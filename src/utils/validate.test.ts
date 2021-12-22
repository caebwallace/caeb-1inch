import MockValidate from '../__mocks__/utils.validateQuoteRequest';
import { IQuoteRequest } from '../types';
import { validateQuoteRequest } from './validate';

describe('utils.validate', () => {
    describe('validateQuoteRequest()', () => {
        // Expect errors
        describe('error', () => {
            for (const mock of MockValidate.filter(m => !!m.expectError)) {
                it(`error if "${mock.field}" is not valid`, () => {
                    expect.assertions(2);
                    try {
                        validateQuoteRequest(mock.request as IQuoteRequest);
                    } catch (err: any) {
                        expect(err instanceof mock.expectErrorType).toBe(true);
                        expect(err).toHaveProperty(
                            'message',
                            `"${mock.field}" is not a valid addresss`,
                        );
                    }
                });
            }
        });

        // Expect success
        describe('success', () => {
            for (const mock of MockValidate.filter(m => !m.expectError)) {
                it(`success if "${mock.field}" is valid`, () => {
                    expect(validateQuoteRequest(mock.request as IQuoteRequest)).toBe(true);
                });
            }
        });
    });
});
