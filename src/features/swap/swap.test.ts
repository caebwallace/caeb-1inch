import { MockApi } from '../../__mocks__/mockApi';
import MockedSwaps from '../../__mocks__/swap.json';
import { ErrorNotImplemented } from '../../errors';
import { apiSwap } from './swap';

describe('features/swap/swap', () => {
    it('should exists', () => {
        expect(apiSwap).toBeDefined();
    });

    describe('request', () => {
        let api: MockApi;

        beforeEach(() => {
            api = new MockApi();
        });

        describe('must be implemented later', () => {
            it('should fail client.quote()', async () => {
                for (const _mock of MockedSwaps.filter(m => !m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await apiSwap(api, _mock.request);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
            it('should success client.quote()', async () => {
                for (const _mock of MockedSwaps.filter(m => m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await apiSwap(api, _mock.request);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
        });
    });
});
