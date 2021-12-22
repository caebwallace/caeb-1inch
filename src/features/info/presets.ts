import { ErrorNotImplemented } from '../../errors';
import { Caeb1inchApi } from '../../lib/Caeb1inchApi';
import { IPresets } from '../../types';

/**
 * Get list of swap presets configuration.
 *
 * @export
 * @param {Caeb1inchApi} api
 * @returns {Promise<IToken[]>}
 */
export async function apiInfoPresets(api: Caeb1inchApi): Promise<IPresets[]> {
    throw new ErrorNotImplemented({ api });
}
