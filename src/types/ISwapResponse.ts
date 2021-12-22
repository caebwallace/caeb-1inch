import { IQuoteResponse } from './IQuoteResponse';
import { ITransaction } from './ITransaction';

export interface ISwapResponse extends Omit<IQuoteResponse, 'estimatedGas'> {
    tx: ITransaction;
}
