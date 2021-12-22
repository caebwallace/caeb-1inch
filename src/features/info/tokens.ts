import { ErrorNotImplemented } from '../../errors';
import { Caeb1inchApi } from '../../lib/Caeb1inchApi';
import { IToken } from '../../types';

/**
 * Get list of supported tokens.
 *
 * @export
 * @param {Caeb1inchApi} api
 * @returns {Promise<IToken[]>}
 */
export async function apiInfoTokens(api: Caeb1inchApi): Promise<IToken[]> {
    throw new ErrorNotImplemented({ api });
}
