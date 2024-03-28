// Register
interface RegisterRequestBody {
    email: string;
    username: string;
    password: string;
}
interface RegisterResponseData {
    status: "success" | "invalid-parameters" | "user-exists";
}

// Login
interface LoginRequestBody {
    emailOrUsername: string;
    password: string;
    tfaCode: string;
}
interface LoginResponseData {
    status: "success" | "invalid-parameters" | "invalid-credentials" | "requires-tfa" | "invalid-tfa-code" | "internal-error";
}

export type {
    RegisterRequestBody,
    RegisterResponseData,
    LoginRequestBody,
    LoginResponseData,
};