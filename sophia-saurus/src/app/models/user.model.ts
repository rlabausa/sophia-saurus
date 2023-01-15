import { AuthToken } from "./authtoken.model";

export class User {
    private name: string;
    private email: string;
    private token: AuthToken;

    public constructor(name: string, email: string, token: AuthToken) {
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

    public getToken(): AuthToken {
        return this.token;
    }
}

