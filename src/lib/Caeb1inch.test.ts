import MockedQuotes from '../__mocks__/quote.json';
import MockedSwaps from '../__mocks__/swap.json';
import { ErrorNotImplemented } from '../errors';
import { Caeb1inch } from '../index';
import { BLOCKCHAIN, IQuoteRequest, ISwapRequest, API_VERSION } from '../types';
import { Caeb1inchTransaction } from './Caeb1inchTransaction';

describe('Caeb1inch', () => {
    it('should exists', () => {
        expect(Caeb1inch).toBeDefined;
    });

    describe('Class Instance', () => {
        it('should instanciate', () => {
            const client = new Caeb1inch();
            expect(client).toBeDefined;
        });

        it('should instanciate on a specific chainId', () => {
            const client = new Caeb1inch(BLOCKCHAIN.ETH);
            expect(client.chainId).toBe(BLOCKCHAIN.ETH);
        });

        it('should instanciate on a specific apiUrl', () => {
            const client = new Caeb1inch(BLOCKCHAIN.ETH, 'https://foo');
            expect(client.apiUrl).toBe('https://foo');
        });

        it('should instanciate on a specific apiVersion', () => {
            const client = new Caeb1inch(BLOCKCHAIN.ETH, 'https://foo', API_VERSION.v4);
            expect(client.apiVersion).toBe(API_VERSION.v4);
        });
    });

    describe('Class Methods', () => {
        let client: Caeb1inch;

        beforeAll(() => {
            client = new Caeb1inch();
        });

        describe('healthcheck()', () => {
            it('should test client.healthcheck()', async () => {
                expect.assertions(1);
                try {
                    await client.healthcheck();
                } catch (err: unknown) {
                    expect(err).toBeInstanceOf(ErrorNotImplemented);
                }
            });
        });

        describe('getPairPriceByAddress()', () => {
            it('should test client.getPairPriceByAddress()', async () => {
                expect.assertions(1);
                try {
                    await client.getPairPriceByAddress(
                        '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
                        '0x111111111117dc0aa78b770fa6a738034120c302',
                    );
                } catch (err: unknown) {
                    expect(err).toBeInstanceOf(ErrorNotImplemented);
                }
            });
        });

        describe('getPairPriceBySymbol()', () => {
            it('should test client.getPairPriceBySymbol()', async () => {
                expect.assertions(1);
                try {
                    await client.getPairPriceBySymbol('ETH', 'USDT');
                } catch (err: unknown) {
                    expect(err).toBeInstanceOf(ErrorNotImplemented);
                }
            });
        });

        describe('getLiquiditySources()', () => {
            it('should test client.getLiquiditySources()', async () => {
                expect.assertions(1);
                try {
                    await client.getLiquiditySources();
                } catch (err: unknown) {
                    expect(err).toBeInstanceOf(ErrorNotImplemented);
                }
            });
        });

        describe('getTokens()', () => {
            it('should test client.getTokens()', async () => {
                expect.assertions(1);
                try {
                    await client.getTokens();
                } catch (err: unknown) {
                    expect(err).toBeInstanceOf(ErrorNotImplemented);
                }
            });
        });

        describe('checkAllowance()', () => {
            it('should test client.checkAllowance()', async () => {
                expect.assertions(1);
                try {
                    await client.checkAllowance({
                        tokenAddress: 'tokenAddress',
                        walletAddress: 'walletAddress',
                    });
                } catch (err: unknown) {
                    expect(err).toBeInstanceOf(ErrorNotImplemented);
                }
            });
        });

        describe('getConfigurationPresets()', () => {
            it('should test client.getConfigurationPresets()', async () => {
                expect.assertions(1);
                try {
                    await client.getConfigurationPresets();
                } catch (err: unknown) {
                    expect(err).toBeInstanceOf(ErrorNotImplemented);
                }
            });
        });

        // `/quote` endpoint tests
        describe('quote()', () => {
            it('should fail client.quote()', async () => {
                for (const _mock of MockedQuotes.filter(m => !m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await client.quote(_mock.request as IQuoteRequest);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
            it('should success client.quote()', async () => {
                for (const _mock of MockedQuotes.filter(m => m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await client.quote(_mock.request as IQuoteRequest);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
        });

        // `/swap` endpoint tests
        describe('swap()', () => {
            it('should fail client.swap()', async () => {
                for (const _mock of MockedSwaps.filter(m => !m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await client.swap(_mock.request as ISwapRequest);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
            it('should success client.swap()', async () => {
                for (const _mock of MockedSwaps.filter(m => m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await client.swap(_mock.request as ISwapRequest);
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });

            it('should sign and send transaction client.signAndSendTransaction()', async () => {
                for (const _mock of MockedSwaps.filter(m => m.expectSuccess)) {
                    expect.assertions(1);
                    try {
                        await client.signAndSendTransaction(
                            new Caeb1inchTransaction(_mock.response?.tx),
                            'private key',
                        );
                    } catch (err: unknown) {
                        expect(err).toBeInstanceOf(ErrorNotImplemented);
                    }
                }
            });
        });
    });
});
