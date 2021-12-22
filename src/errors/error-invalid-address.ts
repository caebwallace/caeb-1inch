import { ErrorCommon } from './error-common';

export class ErrorInvalidAddress extends ErrorCommon {
    constructor(message?: string) {
        super('ERROR_ADDRESS_INVALID', message);
        Object.defineProperty(this, 'name', { value: 'ErrorInvalidAddress' });
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
