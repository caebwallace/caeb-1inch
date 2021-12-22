import { ErrorNotImplemented } from '../../errors';
import { Caeb1inchApi } from '../../lib/Caeb1inchApi';
import { ICheckAllowanceRequest } from '../../types';

export async function apiApproveAllowance(
    api: Caeb1inchApi,
    request: ICheckAllowanceRequest,
): Promise<number> {
    throw new ErrorNotImplemented({ api, request });
}
