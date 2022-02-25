import { EncodedSession } from "./Session";

export type ApiResponse = {
    message: string;
}

export type SuccessLoginResponse = ApiResponse & {
    session: EncodedSession;
    email: string;
}