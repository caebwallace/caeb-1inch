export interface IToken {
    symbol: string;
    name: string;
    decimals: number;
    address: string;
    logoURI?: string;
    eip2612?: boolean;
}
