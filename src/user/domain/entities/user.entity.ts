import {Username} from "../value-objects/username.vo";
import {UserId} from "../value-objects/user-id.vo";
import {Email} from "../value-objects/email.vo";

export class User {

    constructor(
        private readonly _userId: UserId,
        private _username: Username,
        private _email: Email,
        private readonly _createdAt: Date,
        private _updatedAt: Date,
    ) {}


    static create(name : string, email: string) {
        return new User(
            new UserId(),
            new Username(name),
            new Email(email),
            new Date(),
            new Date(),
        )
    }

    get userId(): UserId {
        return this._userId;
    }

    get username(): Username {
        return this._username;
    }

    get email(): Email {
        return this._email;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    getAccountAge(): number {
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - this.createdAt.getTime());
        return Math.ceil(diffTime/(1000 * 60 * 60 * 24));
    }

    updateUsername(name: string): void {
        this._username.setValue(name);
        this._updatedAt = new Date();
    }

    updateEmail(email: string): void {
        this._email.setValue(email);
        this._updatedAt = new Date();
    }


}