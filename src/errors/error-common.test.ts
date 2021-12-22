import { ErrorCommon } from './error-common';

describe('ErrorCommon', () => {
    it('should exists', () => {
        expect(ErrorCommon).toBeDefined;
    });

    it('should instanciate', () => {
        const err = new ErrorCommon('0');
        expect(err).toBeDefined;
    });

    it('should instanciate with code', () => {
        const err = new ErrorCommon('100');
        expect(err.code).toBe('100');
    });

    it('should instanciate with message', () => {
        const err = new ErrorCommon('100', 'foo');
        expect(err.message).toBe('foo');
    });
});
