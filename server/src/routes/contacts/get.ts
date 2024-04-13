import UserModel from "../../models/users";

import { GetResponseData as ResponseData } from "../../../../shared/types/api/contacts";
import { NextFunction, Request, Response } from "express";
import { User } from "../../../../shared/types/models";

// Contacts get
const handler = async (req: Request, res: Response<ResponseData>, next: NextFunction) => {
    if (req.isUnauthenticated() || !req.user) return res.status(401).send({ status: "unauthenticated" });
    const currentUser = req.user as User;

    const allContacts = await UserModel.find({
        userID: {
            $in: [
                ...currentUser.contacts.accepted,
                ...currentUser.contacts.pending,
                ...currentUser.contacts.requests,
                ...currentUser.contacts.blocked,
            ],
        },
    }).select("profile.username userID");

    const acceptedContacts = allContacts.filter((user) => currentUser.contacts.accepted.includes(user.userID));
    const pendingContacts = allContacts.filter((user) => currentUser.contacts.pending.includes(user.userID));
    const requestedContacts = allContacts.filter((user) => currentUser.contacts.requests.includes(user.userID));
    const blockedContacts = allContacts.filter((user) => currentUser.contacts.blocked.includes(user.userID));

    return res.status(200).send({
        status: "success",
        contacts: {
            accepted: acceptedContacts as any,
            pending: pendingContacts as any,
            requests: requestedContacts as any,
            blocked: blockedContacts as any,
        },
    });
};

export default handler;