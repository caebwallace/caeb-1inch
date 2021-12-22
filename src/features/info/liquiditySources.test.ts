import { MockApi } from '../../__mocks__/mockApi';
import { ErrorNotImplemented } from '../../errors';
import { apiInfoLiquiditySources } from './liquiditySources';

describe('features/info/liquiditySources', () => {
    it('should exists', () => {
        expect(apiInfoLiquiditySources).toBeDefined();
    });

    describe('request', () => {
        let api: MockApi;

        beforeEach(() => {
            api = new MockApi();
        });

        it('must be implemented later', async () => {
            expect.assertions(1);
            try {
                await apiInfoLiquiditySources(api);
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });
    });
});
