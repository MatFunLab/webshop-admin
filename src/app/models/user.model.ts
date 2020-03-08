import { Role } from "./Role.model";

export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    roleId: Role;
} 