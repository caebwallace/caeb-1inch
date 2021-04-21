/** @format */
import Client1inch from './index';

import fetchRequestMock, { fetchRequestMockPriceExpected } from './__mocks__/fetchRequest';
import { IToken, ITokenList } from './index';

import { TokenServiceMock } from './__mocks__/getTokensList';
import { governanceTokenAdress, unknownTokenAddress } from './__mocks__/config';
import { getTokenBySymbolMock } from './__mocks__/getTokenBySymbol';

// Mock functions
jest.spyOn(Client1inch.prototype as any, 'fetchRequest').mockImplementation(fetchRequestMock);
jest.spyOn(Client1inch.prototype as any, 'getTokensList').mockImplementation(TokenServiceMock);

// Start tests
describe('test client 1inch', () => {
    let client: Client1inch;
    it('should exists', () => {
        expect(Client1inch).toBeDefined;
    });

    beforeAll(() => {
        client = new Client1inch();
    });

    describe('check basics', () => {
        it('client should exists', () => {
            expect(client).toBeDefined;
        });
    });

    describe('public methods', () => {
        let tokens: ITokenList;
        beforeAll(async () => {
            tokens = await client.getTokensList();
        });
        describe('getTokensList', () => {
            it('should has tokens defined', async () => {
                expect(tokens).toBeDefined();
            });
            it('should has tokens list array', async () => {
                expect(Object.keys(tokens).length).toBeGreaterThan(1);
            });
            it('should has governance token address defined', async () => {
                expect(tokens[governanceTokenAdress]).toBeDefined();
            });
        });
        describe('getTokenBySymbol', () => {
            it('should been defined', async () => {
                expect(client.getTokenBySymbol).toBeDefined();
            });
            it('should has tokens defined', async () => {
                expect(Object.keys(tokens).length).toBeGreaterThan(1);
            });
            it('should find governance token by symbol', async () => {
                const token = await client.getTokenBySymbol(getTokenBySymbolMock.governance.input);
                expect(token).toEqual(getTokenBySymbolMock.governance.output);
            });
        });
        describe('getPairPrice', () => {
            it('should fails if fromTokenAddress is not valid', async () => {
                expect.assertions(1);
                try {
                    await client.getPairPriceByAddress({
                        fromTokenAddress: 'BAD_ADDRESS',
                        toTokenAddress: getTokenBySymbolMock.USDC.output.address,
                        amount: 1,
                    });
                } catch (err) {
                    expect(err).toEqual(new Error('"fromTokenAddress" is not valid.'));
                }
            });
            it('should fails if toTokenAddress is not valid', async () => {
                expect.assertions(1);
                try {
                    await client.getPairPriceByAddress({
                        fromTokenAddress: getTokenBySymbolMock.governance.output.address,
                        toTokenAddress: 'BAD_ADDRESS',
                        amount: 1,
                    });
                } catch (err) {
                    expect(err).toEqual(new Error('"toTokenAddress" is not valid.'));
                }
            });
            it('should fails if fromTokenAddress is not in the token list', async () => {
                expect.assertions(1);
                try {
                    await client.getPairPriceByAddress({
                        fromTokenAddress: unknownTokenAddress,
                        toTokenAddress: getTokenBySymbolMock.USDC.output.address,
                        amount: 1,
                    });
                } catch (err) {
                    expect(err).toEqual(new Error(`"fromTokenAddress" ${unknownTokenAddress} is not in the tokens list.`));
                }
            });
            it('should fails if toTokenAddress is not in the token list', async () => {
                expect.assertions(1);
                try {
                    await client.getPairPriceByAddress({
                        fromTokenAddress: getTokenBySymbolMock.governance.output.address,
                        toTokenAddress: unknownTokenAddress,
                        amount: 1,
                    });
                } catch (err) {
                    expect(err).toEqual(new Error(`"toTokenAddress" ${unknownTokenAddress} is not in the tokens list.`));
                }
            });
            it('should success', async () => {
                try {
                    const price = await client.getPairPriceByAddress({
                        fromTokenAddress: getTokenBySymbolMock.governance.output.address,
                        toTokenAddress: getTokenBySymbolMock.USDC.output.address,
                        amount: 1,
                    });
                    expect(price).toEqual(fetchRequestMockPriceExpected);
                } catch (err) {
                    throw err;
                }
            });
        });
        describe('getPairPriceBySymbols', () => {
            it('should success', async () => {
                try {
                    const price = await client.getPairPriceBySymbols({
                        fromTokenSymbol: getTokenBySymbolMock.governance.input,
                        toTokenSymbol: getTokenBySymbolMock.USDC.input,
                        amount: 1,
                    });
                    expect(price).toEqual(fetchRequestMockPriceExpected);
                } catch (err) {
                    throw err;
                }
            });
        });
    });
});
