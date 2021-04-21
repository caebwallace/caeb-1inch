/** @format */

import TokenList from './dataset/tokens.json';

const TokenServiceMock = (params: any) => {
    return new Promise((resolve, reject) => {
        resolve(TokenList);
    });
};
export { TokenList, TokenServiceMock };
