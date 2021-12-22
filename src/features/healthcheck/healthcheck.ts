import { ErrorNotImplemented } from '../../errors';
import { Caeb1inchApi } from '../../lib/Caeb1inchApi';

/**
 * API healthcheck.
 *
 * @export
 * @param {Caeb1inchApi} api
 * @returns {Promise<boolean>}
 */
export async function apiHealthcheck(api: Caeb1inchApi): Promise<boolean> {
    throw new ErrorNotImplemented({ api });
}
