import { API_VERSION } from '..';
import { Caeb1inchApi } from '../lib/Caeb1inchApi';
import MockConfigApi from './config.api.json';

export class MockApi extends Caeb1inchApi {
    constructor() {
        super(MockConfigApi.chainId, MockConfigApi.apiUrl, MockConfigApi.apiVersion as API_VERSION);
    }
}
