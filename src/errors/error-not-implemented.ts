import { ErrorCommon } from './error-common';

export class ErrorNotImplemented extends ErrorCommon {
    details: unknown;

    constructor(details?: unknown) {
        super('ERROR_METHOD_NOT_IMPLEMENTED', 'Method not implemented.');
        Object.defineProperty(this, 'name', { value: 'ErrorNotImplemented' });
        Object.assign(this, { details });
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
