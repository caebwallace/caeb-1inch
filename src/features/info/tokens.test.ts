import { MockApi } from '../../__mocks__/mockApi';
import { ErrorNotImplemented } from '../../errors';
import { apiInfoTokens } from './tokens';

describe('features/info/tokens', () => {
    it('should exists', () => {
        expect(apiInfoTokens).toBeDefined();
    });

    describe('request', () => {
        let api: MockApi;

        beforeEach(() => {
            api = new MockApi();
        });

        it('must be implemented later', async () => {
            expect.assertions(1);
            try {
                await apiInfoTokens(api);
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });
    });
});
