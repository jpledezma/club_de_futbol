import { validateDNI } from "../../src/api/middlewares/validations";

describe('DNI validations', () => {
    test('Negative integer dni', () => {
        expect(validateDNI(-10000000)).toBe(false);
    });

    test('Positive integer dni (out of range)', () => {
        expect(validateDNI(900_000)).toBe(false);
    });

    test('Positive integer dni (in range)', () => {
        expect(validateDNI(40_000_000)).toBe(true);
    });

    test('Positive decimal dni', () => {
        expect(validateDNI(3.5)).toBe(false);
    });

    test('Negative decimal dni', () => {
        expect(validateDNI(-7.8)).toBe(false);
    });

    test('Dni with a value of 0', () => {
        expect(validateDNI(0)).toBe(false);
    });

    test('Undefined dni', () => {
        expect(validateDNI(undefined)).toBe(false);
    });

    test('NaN dni', () => {
        expect(validateDNI(NaN)).toBe(false);
    });
});
