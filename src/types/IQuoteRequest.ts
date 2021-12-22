export interface IQuoteRequest {
    fromTokenAddress: string;
    toTokenAddress: string;
    amount: string;
    protocols?: string;
    fee?: string;
    gasLimit?: string;
    connectorTokens?: string;
    complexityLevel?: string;
    mainRouteParts?: string;
    virtualParts?: string;
    parts?: string;
    gasPrice?: string;
}
