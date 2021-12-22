import { CustomError } from 'ts-custom-error';

export class ErrorCommon extends CustomError {
    constructor(public code: string, message?: string) {
        super(message);
        Object.defineProperty(this, 'name', { value: 'ErrorCommon' });
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
