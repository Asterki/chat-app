import bcrypt from 'bcrypt';
import speakeasy from 'speakeasy';
import { v4 as uuidv4 } from 'uuid';

import UserModel from '../models/Users';
import { HydratedDocument } from 'mongoose';

import Logger from '../utils/logger';

import type { User } from '../../../shared/types/models';

const registerUser = async (
  email: string,
  username: string,
  password: string,
): Promise<{
  status: 'success' | 'user-exists' | 'internal-error';
  user?: User;
}> => {
  try {
    const isUsernameOrEmailTaken = await UserModel.findOne({
      $or: [{ 'profile.email.value': email }, { 'profile.username': username }],
    });
    if (isUsernameOrEmailTaken) return { status: 'user-exists' };

    // Create the user
    const user = new UserModel({
      userID: uuidv4(),
      pubKey: Buffer.from(''),
      created: Date.now(),
      profile: {
        username,
        email: {
          value: email,
          verified: false,
        },
      },
      preferences: {
        security: {
          password: bcrypt.hashSync(password, 10),
        },
      },
    });
    await user.save();

    return {
      status: 'success',
      user: user as unknown as User,
    };
  } catch (error) {
    console.log(error);
    Logger.getInstance().error((error as Error).message, true);
    return {
      status: 'internal-error',
    };
  }
};

const deleteUser = async (
  userID: string,
  password: string,
  tfaCode?: string,
): Promise<{
  status: 'success' | 'invalid-password' | 'invalid-tfa' | 'internal-error';
}> => {
  try {
    const user: HydratedDocument<User> | null = await UserModel.findOne({ userID });
    if (!user) return { status: 'internal-error' };

    // Check passwords and TFA CODE
    if (!bcrypt.compareSync(password, user.preferences.security.password)) return { status: 'invalid-password' };
    if (user.preferences.security.twoFactor.active) {
      if (
        tfaCode &&
        !speakeasy.totp.verify({
          secret: user.preferences.security.twoFactor.secret as string,
          encoding: 'base32',
          token: tfaCode,
        })
      )
        return { status: 'invalid-tfa' };
    }

    // Delete the user and their related documents
    await UserModel.deleteOne({
      userID,
    });

    return {
      status: 'invalid-password',
    };
  } catch (error) {
    Logger.getInstance().error((error as Error).message, true);
    return {
      status: 'internal-error',
    };
  }
};

export { registerUser, deleteUser };
