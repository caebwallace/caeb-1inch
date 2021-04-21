/** @format */
import axios from 'axios';
import Web3Utils from 'web3-utils';

export interface Client1inchProps {
    apiUrl?: string;
    apiVersion?: string;
    chainId?: number;
    proxy?: string;
    pricePrecision?: number;
}

export interface Client1inchRequestQuote {
    fromTokenAddress: string;
    toTokenAddress: string;
    amount: number;
    fee?: number;
}

export interface IToken {
    symbol: string;
    name: string;
    decimals: number;
    address: string;
    logoURI: string;
}

export interface ITokenList {
    [address: string]: IToken;
}

/**
 * Declaration of supported ChainIds
 */
export enum IBlockchain {
    ETH = 1,
    BSC = 56,
}

/**
 * 1inch price provider
 */
export class Client1inch {
    protected apiUrl: string = 'https://api.1inch.exchange';
    protected apiVersion: string = 'v3.0';
    protected chainId: number = IBlockchain.BSC;
    // protected proxy: string;
    protected pricePrecision: number = 18;
    protected priceMultiplier: number = 10;
    private tokens: ITokenList;

    /**
     * Creates an instance of Client1inch and possibly override default config.
     *
     * @param {Client1inchProps} [attributes] - The user properties.
     * @memberof Client1inch
     */
    constructor(attributes?: Client1inchProps) {
        if (attributes && attributes.apiUrl) this.apiUrl = attributes.apiUrl;
        if (attributes && attributes.apiVersion) this.apiVersion = attributes.apiVersion;
        if (attributes && attributes.chainId) this.chainId = attributes.chainId;
        // if (attributes && attributes.proxy) this.proxy = attributes.proxy;
        if (attributes && attributes.pricePrecision) this.pricePrecision = attributes.pricePrecision;
    }

    /**
     * Get the list of supported tokens and use cache if exists.
     *
     * @param {boolean} force - A flag to force tokens list to be refheshed.
     * @returns {Promise<ITokenList>} - The list of tokens.
     * @memberof Client1inch
     */
    public async getTokensList(force: boolean = false): Promise<ITokenList> {
        if (this.tokens && !force) return this.tokens;
        this.tokens = await this.fetchRequest('tokens');
        return this.tokens;
    }

    /**
     * Search a token from its symbol.
     *
     * @param {string} symbol - The token symbol.
     * @returns {IToken} - The token if found.
     */
    public async getTokenBySymbol(symbol: string): Promise<IToken> {
        const tokens = await this.getTokensList();
        const token = Object.values(tokens || {}).find(k => k.symbol === symbol);
        return token;
    }

    /**
     * Returns the price of a pair of contrat addresses.
     *
     * @param {Client1inchRequestQuote} attributes - The request attributes.
     * @returns {number} - The price of the pair quote.
     * @memberof Client1inch
     */
    public async getPairPrice(attributes: Client1inchRequestQuote) {
        const tokens = await this.getTokensList();

        if (!this.isAddressValid(attributes.fromTokenAddress)) {
            throw new Error('"fromTokenAddress" is not valid.');
        }
        if (!this.isAddressValid(attributes.toTokenAddress)) {
            throw new Error('"toTokenAddress" is not valid.');
        }
        if (!tokens[attributes.fromTokenAddress]) {
            throw new Error(`"fromTokenAddress" ${attributes.fromTokenAddress} is not in the tokens list.`);
        }
        if (!tokens[attributes.toTokenAddress]) {
            throw new Error(`"toTokenAddress" ${attributes.toTokenAddress} is not in the tokens list.`);
        }

        const params: Client1inchRequestQuote = { ...attributes };
        params.amount = params.amount * 10 ** this.priceMultiplier;
        const data = await this.fetchRequest('quote', params);
        const toTokenAmount = data.toTokenAmount / 10 ** this.priceMultiplier;

        return toTokenAmount;
    }

    /**
     * Check if an address of a contract is valid or not.
     *
     * @param {string} address  - The contract or account address to check.
     * @returns {boolean} - The check status.
     * @memberof Client1inch
     */
    public isAddressValid(address: string): boolean {
        return Web3Utils.isAddress(address);
    }

    /**
     * Build url with params, fetch, wait for response and returns results as JSON.
     *
     * @private
     * @param {object} _params - The querystring params.
     * @returns {object} - The JSON response from API.
     * @memberof Client1inch
     */
    private async fetchRequest(path: string, _params?: object) {
        const params: any = this.buildRequestParams(_params);
        const method = 'get';
        const url = `${this.apiUrl}/${this.apiVersion}/${this.chainId}/${path}`;
        try {
            const { data } = await axios({ method, url, params });
            return data;
        } catch (err) {
            throw new Error(`Can not fetch ${url} : ${err}`);
        }
    }

    /**
     * Returns request params and set defaults.
     *
     * @param {object} params - The request params.
     * @returns {object} - The properties filled.
     * @memberof Client1inch
     */
    private buildRequestParams(params: object): object {
        return {
            ...params,
        };
    }
}

export default Client1inch;
