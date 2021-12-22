import { MockApi } from '../../__mocks__/mockApi';
import MockedQuotes from '../../__mocks__/quote.json';
import { ErrorNotImplemented } from '../../errors';
import { apiQuote } from './quote';

describe('features/swap/quote', () => {
    it('should exists', () => {
        expect(apiQuote).toBeDefined();
    });

    describe('request', () => {
        let api: MockApi;

        beforeEach(() => {
            api = new MockApi();
        });

        describe('must be implemented later', () => {
            it('should fail client.quote()', async () => {
                for (const _mock of MockedQuotes.filter(m => !m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await apiQuote(api, _mock.request);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
            it('should success client.quote()', async () => {
                for (const _mock of MockedQuotes.filter(m => m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await apiQuote(api, _mock.request);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
        });
    });
});
