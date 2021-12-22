import { IQuoteRequest } from './IQuoteRequest';

export interface ISwapRequest extends IQuoteRequest {
    fromAddress: string;
    slippage: number;
    destReceiver?: string;
    referrerAddress?: string;
    disableEstimate?: boolean;
    burnChi?: boolean;
    allowPartialFill?: boolean;
}
