//Register
interface RegisterRequestBody {
	username: string;
	email: string;
	password: string;
}

type RegisterResponse = "bad-request" | "username-email-in-use" | "done";

// Delete account
interface DeleteAccountRequestBody {
	password: string;
	tfaCode: string;
}

type DeleteAccountResponse = "invalid-tfa" | "invalid-password" | "bad-request" | "requires-tfa" | "done" | "unauthorized";

// Login
interface LoginRequestBody {
	email: string;
	password: string;
	tfaCode: string;
}

type LoginResponse = "bad-request" | "invalid-tfa-code" | "requires-tfa" | "invalid-credentials" | "done";

// Logout
// * No request body for this API
type LogoutResponse = "ok";

// Export types
export type { RegisterRequestBody, RegisterResponse, DeleteAccountRequestBody, DeleteAccountResponse, LoginRequestBody, LoginResponse, LogoutResponse };
