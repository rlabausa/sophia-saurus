import { AuthToken } from "./authtoken.model";

export class User {
    private name: string;
    private email: string;
    private token: string;

    public constructor(name: string, email: string, token: string) {
        this.name = name;
        this.email = email;
        this.token = token;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getToken(): string {
        return this.token;
    }
}

