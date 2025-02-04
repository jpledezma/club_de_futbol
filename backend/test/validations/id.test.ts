import { validateId } from "../../src/api/middlewares/validations";

describe('Id validations', () => {
    test('Positive integer id', () => {
        expect(validateId(2)).toBe(true);
    });

    test('Negative integer id', () => {
        expect(validateId(-11)).toBe(false);
    });

    test('Positive decimal id', () => {
        expect(validateId(3.5)).toBe(false);
    });

    test('Negative decimal id', () => {
        expect(validateId(-7.8)).toBe(false);
    });

    test('Id with a value of 0', () => {
        expect(validateId(0)).toBe(false);
    });

    test('Undefined id', () => {
        expect(validateId(undefined)).toBe(false);
    });

    test('NaN id', () => {
        expect(validateId(NaN)).toBe(false);
    });
});
