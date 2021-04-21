/** @format */

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
export declare enum IBlockchain {
    ETH = 1,
    BSC = 56,
}
export declare class Client1inch {
    protected apiUrl: string;
    protected apiVersion: string;
    protected chainId: number;
    protected pricePrecision: number;
    protected priceMultiplier: number;
    private tokens;
    constructor(attributes?: Client1inchProps);
    getTokensList(force?: boolean): Promise<ITokenList>;
    getTokenBySymbol(symbol: string): Promise<IToken>;
    getPairPrice(attributes: Client1inchRequestQuote): Promise<number>;
    isAddressValid(address: string): boolean;
    private fetchRequest;
    private buildRequestParams;
}
export default Client1inch;
