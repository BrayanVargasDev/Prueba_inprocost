import { User } from "./user.model";

export interface UserAuth {
    token: string;
    user: User;
    message: string;
}