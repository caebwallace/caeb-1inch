import { MockApi } from '../../__mocks__/mockApi';
import { ErrorNotImplemented } from '../../errors';
import { apiInfoPresets } from './presets';

describe('features/info/presets', () => {
    it('should exists', () => {
        expect(apiInfoPresets).toBeDefined();
    });

    describe('request', () => {
        let api: MockApi;

        beforeEach(() => {
            api = new MockApi();
        });

        it('must be implemented later', async () => {
            expect.assertions(1);
            try {
                await apiInfoPresets(api);
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });
    });
});
