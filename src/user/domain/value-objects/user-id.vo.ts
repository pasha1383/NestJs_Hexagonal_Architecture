import {randomUUID} from 'crypto';

export class UserId {
    private readonly _value: string;

    constructor(userId?: string) {
        this._value = userId || randomUUID();
    }

    getValue(): string {
        return this._value;
    }

    equals(other : UserId) {
        return this._value !== other.getValue();
    }



}