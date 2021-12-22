import { ErrorInvalidAddress } from './error-invalid-address';

describe('ErrorInvalidAddress', () => {
    it('should exists', () => {
        expect(ErrorInvalidAddress).toBeDefined;
    });

    it('should be instance of ErrorInvalidAddress', () => {
        const err = new ErrorInvalidAddress();
        expect(err).toBeInstanceOf(ErrorInvalidAddress);
    });

    it('should instanciate', () => {
        const err = new ErrorInvalidAddress();
        expect(err).toBeDefined;
    });

    it('should instanciate with message', () => {
        const err = new ErrorInvalidAddress('foo');
        expect(err.message).toBe('foo');
    });
});
