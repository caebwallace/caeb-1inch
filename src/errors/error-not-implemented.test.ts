import { ErrorNotImplemented } from './error-not-implemented';

describe('ErrorNotImplemented', () => {
    it('should exists', () => {
        expect(ErrorNotImplemented).toBeDefined;
    });

    it('should be instance of ErrorNotImplemented', () => {
        const err = new ErrorNotImplemented();
        expect(err).toBeInstanceOf(ErrorNotImplemented);
        expect(err.code).toBe('ERROR_METHOD_NOT_IMPLEMENTED');
        expect(err.message).toBe('Method not implemented.');
    });

    it('should instanciate', () => {
        const err = new ErrorNotImplemented();
        expect(err).toBeDefined;
    });

    it('should instanciate with details', () => {
        const err = new ErrorNotImplemented('foo');
        expect(err.details).toBe('foo');
    });
});
