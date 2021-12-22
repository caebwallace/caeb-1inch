import { ErrorNotImplemented } from '../../errors';
import { Caeb1inchApi } from '../../lib/Caeb1inchApi';
import { IQuoteRequest, IQuoteResponse } from '../../types';

/**
 * Get list of supported tokens.
 *
 * @export
 * @param {Caeb1inchApi} api
 * @returns {Promise<IToken[]>}
 */
export async function apiQuote(api: Caeb1inchApi, request: IQuoteRequest): Promise<IQuoteResponse> {
    throw new ErrorNotImplemented({ api, request });
}
