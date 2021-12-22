import { Caeb1inchTransaction } from '..';
import { ErrorNotImplemented } from '../errors';
import {
    apiApproveAllowance,
    apiHealthcheck,
    apiInfoLiquiditySources,
    apiInfoPresets,
    apiInfoTokens,
    apiQuote,
    apiSwap,
} from '../features';
import {
    API_VERSION,
    BLOCKCHAIN,
    ICheckAllowanceRequest,
    IPresets,
    IProtocolResponse,
    IQuoteRequest,
    IQuoteResponse,
    ISwapRequest,
    ISwapResponse,
    IToken,
} from '../types';
import { Caeb1inchApi } from './Caeb1inchApi';

class Caeb1inch {
    /**
     * Creates an instance of Caeb1inch.
     *
     * @param {BLOCKCHAIN} [chainId=BLOCKCHAIN.ETH]
     * @param {string} [apiUrl='https://api.1inch.exchange']
     * @param {API_VERSION} [apiVersion=API_VERSION.v4]
     * @param {Caeb1inchApi} [api=new Caeb1inchApi(chainId, apiUrl, apiVersion)]
     *
     * @memberOf Caeb1inch
     */
    constructor(
        public readonly chainId: BLOCKCHAIN = BLOCKCHAIN.ETH,
        public readonly apiUrl: string = 'https://api.1inch.exchange',
        public readonly apiVersion: API_VERSION = API_VERSION.v4,
        protected api: Caeb1inchApi = new Caeb1inchApi(chainId, apiUrl, apiVersion),
    ) {}

    /**
     * Performs a helthcheck to check 1inch API status.
     *
     * @returns {Promise<boolean>}
     *
     * @memberOf Caeb1inch
     */
    public async healthcheck(): Promise<boolean> {
        return apiHealthcheck(this.api);
    }

    /**
     * Get the number of tokens that the 1inch router is allowed to spend.
     *
     * @param {ICheckAllowanceRequest} request
     * @returns {number}
     *
     * @memberOf Caeb1inch
     */
    public async checkAllowance(request: ICheckAllowanceRequest): Promise<number> {
        return apiApproveAllowance(this.api, request);
    }

    /**
     * List of available liquidity sources.
     *
     * @returns {IProtocolResponse[]}
     *
     * @memberOf Caeb1inch
     */
    public async getLiquiditySources(): Promise<IProtocolResponse[]> {
        return apiInfoLiquiditySources(this.api);
    }

    /**
     * List of supported tokens.
     *
     * @returns {IToken[]}
     *
     * @memberOf Caeb1inch
     */
    public async getTokens(): Promise<IToken[]> {
        return apiInfoTokens(this.api);
    }

    /**
     * List of preset configurations for the 1inch router.
     *
     * @returns {IPresets[]}
     *
     * @memberOf Caeb1inch
     */
    public async getConfigurationPresets(): Promise<IPresets[]> {
        return apiInfoPresets(this.api);
    }

    /**
     * Get price of a pair from token contract addresses.
     *
     * @param {string} fromTokenAddress - Contract address for the fromToken.
     * @param {string} toTokenAddress - Contract address for the toToken.
     * @returns {Promise<number>}
     *
     * @memberOf Caeb1inch
     */
    public async getPairPriceByAddress(
        fromTokenAddress: string,
        toTokenAddress: string,
    ): Promise<number> {
        throw new ErrorNotImplemented({
            fromTokenAddress,
            toTokenAddress,
        });
    }

    /**
     * Get price of a pair from token symbol.
     *
     * @param {string} fromTokenSymbol
     * @param {string} toTokenSymbol
     * @returns {Promise<number>}
     *
     * @memberOf Caeb1inch
     */
    public async getPairPriceBySymbol(
        fromTokenSymbol: string,
        toTokenSymbol: string,
    ): Promise<number> {
        throw new ErrorNotImplemented({
            fromTokenSymbol,
            toTokenSymbol,
        });
    }

    /**
     * Request a quote to prepare a swap.
     *
     * @param {IQuoteRequest} request - The quote request.
     * @returns {Promise<IQuoteResponse>}
     *
     * @memberOf Caeb1inch
     */
    public async quote(request: IQuoteRequest): Promise<IQuoteResponse> {
        return apiQuote(this.api, request);
    }

    /**
     * Create a swap transaction to sign.
     *
     * @param {ISwapRequest} request - The swap request.
     * @returns {Promise<ISwapResponse>}
     *
     * @memberOf Caeb1inch
     */
    public async swap(request: ISwapRequest): Promise<ISwapResponse> {
        return apiSwap(this.api, request);
    }

    /**
     * Send a transaction and get its hash if success.
     *
     * @param {Caeb1inchTransaction} tx - Swap tx.
     * @param {string} privateKey - Wallet private key.
     * @returns {Promise<string>}
     *
     * @memberOf Caeb1inch
     */
    public async signAndSendTransaction(
        tx: Caeb1inchTransaction,
        privateKey: string,
    ): Promise<string> {
        return tx.signAndSend(this.api, privateKey);
    }
}

export { Caeb1inch };
