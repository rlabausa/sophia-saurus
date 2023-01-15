export class AuthToken {
    public aud: string;            // Your server's client ID
    public azp: string;
    public email: string;
    public email_verified: boolean;// true, if Google has verified the email address
    public exp: number;            // Unix timestamp of the assertion's expiration time
    public family_name: string;
    public given_name: string;
    public iat: number;            // Unix timestamp of the assertion's creation time
    public iss: string;            // The JWT's issuer
    public jti: string;
    public name: string;
    public nbf: number;
    public picture: string;        // If present, a URL to user's profile picture
    public sub: string;            // The unique ID of the user's Google Account

    public constructor(
        aud: string,
        azp: string,
        email: string,
        emailVerified: boolean,
        exp: number,
        familyName: string,
        givenName: string,
        iat: number,
        iss: string,
        jti: string,
        name: string,
        nbf: number,
        picture: string,
        sub: string
    ) {
        this.aud = aud;
        this.azp = azp;
        this.email = email;
        this.email_verified = emailVerified;
        this.exp = exp;
        this.family_name = familyName;
        this.given_name = givenName;
        this.iat = iat;
        this.iss = iss;
        this.jti = jti;
        this.name = name;
        this.nbf = nbf;
        this.picture = picture;
        this.sub = sub;
    }
}