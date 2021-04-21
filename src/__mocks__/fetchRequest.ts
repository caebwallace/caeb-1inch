/** @format */
import price from './dataset/price.json';
import priceResponse from './dataset/priceResponse.json';

export default (path: string, params: any) => {
    return new Promise((resolve, reject) => {
        if (path === 'quote') {
            resolve(priceResponse);
        } else {
            reject(new Error(`No Mock for module '${path}' ${JSON.stringify(params)}`));
        }
    });
};

export const fetchRequestMockPriceExpected = price.toTokenAmount;
