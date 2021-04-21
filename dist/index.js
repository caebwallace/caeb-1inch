/** @format */

'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Client1inch = exports.IBlockchain = void 0;
const axios_1 = __importDefault(require('axios'));
const web3_utils_1 = __importDefault(require('web3-utils'));
var IBlockchain;
(function (IBlockchain) {
    IBlockchain[(IBlockchain['ETH'] = 1)] = 'ETH';
    IBlockchain[(IBlockchain['BSC'] = 56)] = 'BSC';
})((IBlockchain = exports.IBlockchain || (exports.IBlockchain = {})));
class Client1inch {
    constructor(attributes) {
        this.apiUrl = 'https://api.1inch.exchange';
        this.apiVersion = 'v3.0';
        this.chainId = IBlockchain.BSC;
        this.pricePrecision = 18;
        this.priceMultiplier = 10;
        if (attributes && attributes.apiUrl) this.apiUrl = attributes.apiUrl;
        if (attributes && attributes.apiVersion) this.apiVersion = attributes.apiVersion;
        if (attributes && attributes.chainId) this.chainId = attributes.chainId;
        if (attributes && attributes.proxy) this.proxy = attributes.proxy;
        if (attributes && attributes.pricePrecision) this.pricePrecision = attributes.pricePrecision;
    }
    getTokensList(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tokens && !force) return this.tokens;
            this.tokens = yield this.fetchRequest('tokens');
            return this.tokens;
        });
    }
    getTokenBySymbol(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokens = yield this.getTokensList();
            const token = Object.values(tokens || {}).find(k => k.symbol === symbol);
            return token;
        });
    }
    getPairPrice(attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokens = yield this.getTokensList();
            if (!this.isAddressValid(attributes.fromTokenAddress)) {
                throw new Error('"fromTokenAddress" is not valid.');
            }
            if (!this.isAddressValid(attributes.toTokenAddress)) {
                throw new Error('"toTokenAddress" is not valid.');
            }
            if (!tokens[attributes.fromTokenAddress]) {
                throw new Error(`"fromTokenAddress" ${attributes.fromTokenAddress} is not in the tokens list.`);
            }
            if (!tokens[attributes.toTokenAddress]) {
                throw new Error(`"toTokenAddress" ${attributes.toTokenAddress} is not in the tokens list.`);
            }
            const params = Object.assign({}, attributes);
            params.amount = params.amount * Math.pow(10, this.priceMultiplier);
            const data = yield this.fetchRequest('quote', params);
            const toTokenAmount = data.toTokenAmount / Math.pow(10, this.priceMultiplier);
            return toTokenAmount;
        });
    }
    isAddressValid(address) {
        return web3_utils_1.default.isAddress(address);
    }
    fetchRequest(path, _params) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = this.buildRequestParams(_params);
            const method = 'get';
            const url = `${this.apiUrl}/${this.apiVersion}/${this.chainId}/${path}`;
            try {
                const { data } = yield axios_1.default({ method, url, params });
                return data;
            } catch (err) {
                throw new Error(`Can not fetch ${url} : ${err}`);
            }
        });
    }
    buildRequestParams(params) {
        return Object.assign({}, params);
    }
}
exports.Client1inch = Client1inch;
exports.default = Client1inch;
