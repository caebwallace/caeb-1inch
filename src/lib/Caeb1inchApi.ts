import { ErrorNotImplemented } from '../errors';
import { API_VERSION, BLOCKCHAIN, TApiEndpoint } from '../types';
import { AxiosRequestConfig } from 'axios';

class Caeb1inchApi {
    /**
     * Endpoints configuration.
     *
     * @memberOf Caeb1inchApi
     */
    private endpoints: TApiEndpoint = {
        healthcheck: '/healthcheck',
        liquiditySource: '/liquidity-sources',
        tokens: '/tokens',
        presets: '/presets',
        approveSpender: '/approve/spender',
        approveTransation: '/approve/transaction',
        approveAllowance: '/approve/allowance',
        quote: '/quote',
        swap: '/swap',
    };

    /**
     * Creates an instance of Caeb1inchApi.
     *
     * @param {BLOCKCHAIN} chainId
     * @param {string} apiUrl
     * @param {API_VERSION} apiVersion
     *
     * @memberOf Caeb1inchApi
     */
    constructor(
        public readonly chainId: BLOCKCHAIN,
        public readonly apiUrl: string,
        public readonly apiVersion: API_VERSION,
    ) {}

    /**
     * Change endpoint url.
     *
     * @param {keyof TApiEndpoint} id - Endpoint ID to change
     * @param {string} url - New endpoint URL.
     *
     * @memberOf Caeb1inchApi
     */
    public setEndpoint(id: keyof TApiEndpoint, url: string) {
        throw new ErrorNotImplemented({ id, url });
    }

    /**
     * Perform an API request.
     *
     * @param {keyof TApiEndpoint} endPointId
     * @param {AxiosRequestConfig['method']} [method='GET']
     * @param {Omit<AxiosRequestConfig, 'method' | 'url'>} [data]
     *
     * @memberOf Caeb1inchApi
     */
    public async request(
        endPointId: keyof TApiEndpoint,
        method: AxiosRequestConfig['method'] = 'GET',
        data?: Omit<AxiosRequestConfig, 'method' | 'url'>,
    ) {
        throw new ErrorNotImplemented({ method, endPointId, data });
    }
}
export { Caeb1inchApi };
