<!-- @format -->

# CAEB 1INCH

![NPM Version](https://badge.fury.io/js/caeb-1inch.svg)

`caeb-1inch` is a nodejs library to provide an easy access to 1inch exchange pair prices.
You can use it for **ETH** or **BSC** blockchains.

## Install

```shell
yarn add caeb-1inch

# - or -

npm i caeb-1inch
```

## Usage

```ts
// Import the lib
import Caeb1inch, { IBlockchain } from 'caeb-1inch';

// Create a new client (ETH, BSC)
const client = new Caeb1inch({ chainId: IBlockchain.BSC });

// Get the token list (in cache)
const tokenList = await client.getTokensList();

// Get the token list (force refresh)
const tokenListFresh = await client.getTokensList(true);

// Get token infos from a symbol
const token = await client.getTokenBySymbol('BNB');
// {
//     "symbol": "BNB",
//     "name": "BNB",
//     "decimals": 18,
//     "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//     "logoURI": "https: //tokens.1inch.exchange/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"
// }

// Get the quote price for a pair of symbols
const price = await client.getPairPriceBySymbols({
    fromTokenSymbol: 'BNB',
    toTokenSymbol: 'USDC',
    amount: 1,
});
// 583.4774620321

// Get the quote price for a pair of contracts
const price = await client.getPairPriceByAddress({
    fromTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    toTokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    amount: 1,
});
// 583.4774620321
```

## Examples

You can find examples in [/src/examples](/src/examples)

-   [src/examples/getPrice.ts](/src/examples/getPrice.ts)

## Run Unit Tests

```shell
npm run test

# - or -

npm run test:watch
```

## Options

| Var             | Type   | Default                    | Desc                                                                                    |
| :-------------- | :----- | :------------------------- | :-------------------------------------------------------------------------------------- |
| apiUrl          | string | https://api.1inch.exchange | The 1inch API url.                                                                      |
| apiVersion      | string | v3.0                       | The 1inch version to use.                                                               |
| chainId         | number | 56                         | The Blockchain ID to use (**ETH**: 1, **BSC**: 56).                                     |
| priceMultiplier | number | 10                         | The price multiplier to apply on quote amount to have enough floats in the quote price. |

## Documentation

Visit [https://caebwallace.github.io/caeb-1inch/](https://caebwallace.github.io/caeb-1inch/) for extended informations and documentations.

## Want to donate ?

If you like **that project and my work**, you can send me your **favorite shitcoin** to my **ERC20** / **BEP20** wallet address : [0x1Ed970C1D3F9B85bA6607d45C752E22D9b0b09f4](https://bscscan.com/address/0x1Ed970C1D3F9B85bA6607d45C752E22D9b0b09f4)

## Credits

Thanks to [axios](https://github.com/axios/axios) and [web3](https://github.com/ChainSafe/web3.js) for their developments and products.

## License

[MIT](LICENSE)

Made by [Caeb WALLACE](https://twitter.com/caeb_wallace) with ❤️
