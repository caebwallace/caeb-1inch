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

// Get the quote price for a pair of contracts
const { address: fromTokenAddress } = await client.getTokenBySymbol('BNB');
const { address: toTokenAddress } = await client.getTokenBySymbol('USDC');
const price = await client.getPairPrice({
    fromTokenAddress,
    toTokenAddress,
    amount: 1,
});
// 583.4774620321
```

## Examples

You can find examples in [/examples](/examples)` :

-   [examples/getPrice.ts](/examples/getPrice.ts)

## Run Unit Tests

```shell
npm run test

# - or -

npm run test:watch
```

## Options and defaults

```
apiUrl: string = 'https://api.1inch.exchange'
apiVersion: string = 'v3.0'
chainId: number = 56
priceMultiplier: number = 10
```

## More docs

You can download package and open [https://caebwallace.github.io/caeb-1inch/](https://caebwallace.github.io/caeb-1inch/) for extended informations and documentations.

## Want to donate ?

If you like **that project and my work**, you can send me your **favorite shitcoin** to my **ERC20** / **BEP20** wallet address : [0x1Ed970C1D3F9B85bA6607d45C752E22D9b0b09f4](https://bscscan.com/address/0x1Ed970C1D3F9B85bA6607d45C752E22D9b0b09f4)

## License

Copyright © 2021, [Caeb WALLACE](https://twitter.com/caeb_wallace). Released under the MIT License.
