import { ErrorNotImplemented } from '../../errors';
import { Caeb1inchApi } from '../../lib/Caeb1inchApi';
import { IProtocolResponse } from '../../types';

/**
 * List of available liquidity sources.
 *
 * @export
 * @param {Caeb1inchApi} api
 * @returns {Promise<IToken[]>}
 */
export async function apiInfoLiquiditySources(api: Caeb1inchApi): Promise<IProtocolResponse[]> {
    throw new ErrorNotImplemented({ api });
}
