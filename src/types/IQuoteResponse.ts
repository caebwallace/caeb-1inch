import { IPathView } from './IPathView';
import { IToken } from './IToken';

export interface IQuoteResponse {
    fromToken: IToken;
    toToken: IToken;
    toTokenAmount: number;
    fromTokenAmount: number;
    protocols: IPathView[];
    estimatedGas: number;
}
