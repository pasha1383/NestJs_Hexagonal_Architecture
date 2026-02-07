
export class Username {
    private _value: string;

    constructor(name: string) {
        this.setValue(name);
    }

    private isValid(value: string): boolean {
        return value.trim().length > 0;
    }

    getValue(): string {
        return this._value;
    }

    equals(other : Username): boolean {
        return this._value === other.getValue();
    }

    setValue(name: string): void {
        if (!this.isValid(name)) {
            throw new TypeError("name must be a valid string");
        }
        this._value = name;
    }
}