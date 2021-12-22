import MockConfigApi from '../__mocks__/config.api.json';
import { MockApi } from '../__mocks__/mockApi';
import { ErrorNotImplemented } from '../errors';
import { Caeb1inchApi } from './Caeb1inchApi';

describe('Caeb1inchApi', () => {
    it('should exists', () => {
        expect(Caeb1inchApi).toBeDefined();
    });

    describe('Class Instance', () => {
        it('should instanciate', () => {
            const client = new MockApi();
            expect(client).toBeDefined;
            expect(client.chainId).toBe(MockConfigApi.chainId);
            expect(client.apiUrl).toBe(MockConfigApi.apiUrl);
            expect(client.apiVersion).toBe(MockConfigApi.apiVersion);
        });
    });

    describe('Class Methods', () => {
        let client: Caeb1inchApi;

        beforeEach(() => {
            client = new MockApi();
        });

        it('should change endpoint', () => {
            expect.assertions(1);
            try {
                client.setEndpoint('swap', '/foo');
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });

        it('should request endpoint', async () => {
            expect.assertions(1);
            try {
                await client.request('healthcheck');
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });
    });
});
