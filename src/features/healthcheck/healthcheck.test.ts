import { MockApi } from '../../__mocks__/mockApi';
import { ErrorNotImplemented } from '../../errors';
import { apiHealthcheck } from './healthcheck';

describe('features/api/healthcheck', () => {
    it('should exists', () => {
        expect(apiHealthcheck).toBeDefined();
    });

    describe('request', () => {
        let api: MockApi;

        beforeEach(() => {
            api = new MockApi();
        });

        it('must be implemented later', async () => {
            expect.assertions(1);
            try {
                await apiHealthcheck(api);
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });
    });
});
