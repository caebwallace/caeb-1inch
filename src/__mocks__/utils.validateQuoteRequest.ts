import { ErrorInvalidAddress } from '../errors/error-invalid-address';

interface MockQuoteRequest {
    type: string;
    field: string;
    expectError?: string;
    expectErrorType?: any;
    request: {
        fromTokenAddress?: string;
        toTokenAddress?: string;
        amount?: string;
    };
}

const mock: MockQuoteRequest[] = [
    {
        type: 'quote',
        field: 'fromTokenAddress',
        expectError: '"fromTokenAddress" is not a valid addresss',
        expectErrorType: ErrorInvalidAddress,
        request: {
            fromTokenAddress: '',
            toTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            amount: '100000',
        },
    },
    {
        type: 'quote',
        field: 'toTokenAddress',
        expectError: '"toTokenAddress" is not a valid addresss',
        expectErrorType: ErrorInvalidAddress,
        request: {
            fromTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            toTokenAddress: '',
            amount: '100000',
        },
    },
    {
        type: 'quote',
        field: 'fromTokenAddress and toTokenAddress',
        request: {
            fromTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            toTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            amount: '100000',
        },
    },
];

export default mock;
