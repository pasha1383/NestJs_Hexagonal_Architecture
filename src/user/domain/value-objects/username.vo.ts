
export class Username {
    private _value: string;

    constructor(name: string) {
        if (!this.isValid(name)) {
            throw new TypeError("name must be a valid string");
        }
        this._value = name;
    }

    private isValid(value: string): boolean {
        return value.trim().length > 0;
    }

    getValue(): string {
        return this._value;
    }
}