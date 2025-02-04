import { validatePhoneNumber } from "../../src/api/middlewares/validations";

describe('Phone number validations', () => {
    test('Valid format 1', () => {
        expect(validatePhoneNumber("+1-800-555-1234")).toBe(true);
    });

    test('Valid format 2', () => {
        expect(validatePhoneNumber("800-555-1234")).toBe(true);
    });

    test('Valid format 3', () => {
        expect(validatePhoneNumber("+52-55-1234-5678")).toBe(true);
    });

    test('Valid format 5', () => {
        expect(validatePhoneNumber("+54 9 (011) 2861-9873")).toBe(true);
    });

    test('Valid format 6', () => {
        expect(validatePhoneNumber("123456789")).toBe(true);
    });
    
    test('Valid format 7', () => {
        expect(validatePhoneNumber("52 1235284")).toBe(true);
    });

    test('Invalid format 1', () => {
        expect(validatePhoneNumber("800-555-ABCD")).toBe(false);
    });

    test('Invalid format 2', () => {
        expect(validatePhoneNumber("(800) 555-1234")).toBe(false);
    });

    test('Undefined date', () => {
        expect(validatePhoneNumber(undefined)).toBe(false);
    });
});
