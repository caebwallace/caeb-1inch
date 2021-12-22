import { ErrorNotImplemented } from '../../errors';
import { Caeb1inchApi } from '../../lib/Caeb1inchApi';
import { ISwapRequest, ISwapResponse } from '../../types';

/**
 * Get list of supported tokens.
 *
 * @export
 * @param {Caeb1inchApi} api
 * @returns {Promise<IToken[]>}
 */
export async function apiSwap(api: Caeb1inchApi, request: ISwapRequest): Promise<ISwapResponse> {
    throw new ErrorNotImplemented({ api, request });
}
