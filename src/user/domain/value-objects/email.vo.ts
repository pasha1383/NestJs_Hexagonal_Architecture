export class Email {
    private _value: string;

    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    constructor(value: string) {
        this.setValue(value);
    }

    private isValid(value: string) {
        return this.emailRegex.test(value);
    }

    getValue(): string {
        return this._value;
    }

    equals(other: Email) {
        return this._value === other.getValue();
    }

    setValue(value: string): void {
        if (!this.isValid(value)) {
            throw new TypeError("is not a valid email");
        }
        this._value = value;
    }
}