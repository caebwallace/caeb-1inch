/** @format */

import { governanceTokenSymbol } from './config';

export const getTokenBySymbolMock = {
    governance: {
        input: governanceTokenSymbol,
        output: {
            symbol: 'BNB',
            name: 'BNB',
            decimals: 18,
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            logoURI: 'https: //tokens.1inch.exchange/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
        },
    },
    USDC: {
        input: 'USDC',
        output: {
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 18,
            address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
            logoURI: 'https: //tokens.1inch.exchange/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        },
    },
};
