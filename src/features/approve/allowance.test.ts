import MockAllowance from '../../__mocks__/allowance.json';
import { MockApi } from '../../__mocks__/mockApi';
import { ErrorNotImplemented } from '../../errors';
import { apiApproveAllowance } from './allowance';

describe('features/api/approve/allowance', () => {
    it('should exists', () => {
        expect(apiApproveAllowance).toBeDefined();
    });

    describe('request', () => {
        let api: MockApi;

        beforeEach(() => {
            api = new MockApi();
        });

        it('must be implemented later', async () => {
            expect.assertions(1);
            try {
                const request = MockAllowance[0];
                await apiApproveAllowance(api, request);
            } catch (err: unknown) {
                expect(err).toBeInstanceOf(ErrorNotImplemented);
            }
        });
    });
});
