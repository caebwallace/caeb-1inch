import { ErrorInvalidAddress } from '../errors/error-invalid-address';
import { IQuoteRequest } from '../types';
import { isAddress } from '@ethersproject/address';

/**
 * Check if quote params are valid.
 *
 * @export
 * @param {(IQuoteRequest )} request - The request to test.
 * @returns {boolean}
 */
export function validateQuoteRequest(request: IQuoteRequest): boolean {
    // Check quote or swap params
    if (!isAddress(request?.fromTokenAddress))
        throw new ErrorInvalidAddress('"fromTokenAddress" is not a valid addresss');
    if (!isAddress(request?.toTokenAddress))
        throw new ErrorInvalidAddress('"toTokenAddress" is not a valid addresss');

    // Confirm request validity if all tests are ok
    return true;
}
