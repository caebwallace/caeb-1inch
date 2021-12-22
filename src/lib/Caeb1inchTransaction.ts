import { Caeb1inchApi } from '..';
import { ErrorNotImplemented } from '../errors';
import { ITransaction } from '../types/ITransaction';

class Caeb1inchTransaction {
    constructor(public readonly tx: ITransaction) {}

    /**
     * Sign a transaction with the privateKey and send it.
     *
     * @param {Caeb1inchApi} api
     * @param {string} privateKey
     * @returns {Promise<string>}
     *
     * @memberOf Caeb1inchTransaction
     */
    public async signAndSend(api: Caeb1inchApi, privateKey: string): Promise<string> {
        throw new ErrorNotImplemented({ api, tx: this.tx, privateKey });
    }
}

export { Caeb1inchTransaction };
