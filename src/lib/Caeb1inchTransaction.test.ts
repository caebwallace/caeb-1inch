import { MockApi } from '../__mocks__/mockApi';
import MockedTransactions from '../__mocks__/transaction.json';
import { ErrorNotImplemented } from '../errors';
import { Caeb1inchTransaction } from './Caeb1inchTransaction';

describe('Caeb1inchTransaction', () => {
    const mock = MockedTransactions[0];
    it('should exists', () => {
        expect(Caeb1inchTransaction).toBeDefined();
    });

    describe('Class Instance', () => {
        it('should instanciate', () => {
            const client = new Caeb1inchTransaction(mock.input);
            expect(client).toBeDefined;
            expect(client.tx).toEqual(mock.input);
        });
    });

    describe('Class Methods', () => {
        let client: Caeb1inchTransaction;
        let api: MockApi;

        beforeEach(() => {
            client = new Caeb1inchTransaction(mock.input);
            api = new MockApi();
        });

        it('Caeb1inchTransaction.signAndSend()', async () => {
            expect.assertions(1);
            try {
                await client.signAndSend(api, mock.privatekey);
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });
    });
});
