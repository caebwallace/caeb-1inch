/** @format */

// Import the lib
import Caeb1inch, { IBlockchain, IToken } from '../index';

(async () => {
    // Create a new client (ETH, BSC)
    const client = new Caeb1inch({ chainId: IBlockchain.BSC });

    // Get the quote price for a pair of contracts
    const fromToken: IToken = await client.getTokenBySymbol('BNB');
    const toToken: IToken = await client.getTokenBySymbol('USDC');
    const price = await client.getPairPrice({
        fromTokenAddress: fromToken.address,
        toTokenAddress: toToken.address,
        amount: 1,
    });

    // Show price
    console.log(`${fromToken.symbol} / ${toToken.symbol} :`, price);
})();
