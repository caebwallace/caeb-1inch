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
        this.priceMultiplier = 10;
        if (attributes && attributes.apiUrl) this.apiUrl = attributes.apiUrl;
        if (attributes && attributes.apiVersion) this.apiVersion = attributes.apiVersion;
        if (attributes && attributes.chainId) this.chainId = attributes.chainId;
    }
    getTokensList(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tokens && !force) return this.tokens;
            this.tokens = (yield this.fetchRequest('tokens')).tokens;
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
    getPairPriceByAddress(attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isAddressValid(attributes.fromTokenAddress)) {
                throw new Error('"fromTokenAddress" is not valid.');
            }
            if (!this.isAddressValid(attributes.toTokenAddress)) {
                throw new Error('"toTokenAddress" is not valid.');
            }
            const params = Object.assign({}, attributes);
            params.amount = params.amount * Math.pow(10, this.priceMultiplier);
            const data = yield this.fetchRequest('quote', params);
            const toTokenAmount = data.toTokenAmount / Math.pow(10, this.priceMultiplier);
            const fromDecimals = data.fromToken.decimals;
            const toDecimals = data.toToken.decimals;
            if (fromDecimals !== toDecimals) {
                if (toDecimals > fromDecimals) {
                    return toTokenAmount / Math.pow(10, toDecimals - fromDecimals);
                }
            }
            return toTokenAmount;
        });
    }
    getPairPriceBySymbols(attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const fromToken = yield this.getTokenBySymbol(attributes.fromTokenSymbol);
            const toToken = yield this.getTokenBySymbol(attributes.toTokenSymbol);
            const req = {
                fromTokenAddress: fromToken.address,
                toTokenAddress: toToken.address,
                amount: attributes.amount,
                fee: attributes.fee,
            };
            return this.getPairPriceByAddress(req);
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
