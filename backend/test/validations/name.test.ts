import { validateName } from "../../src/api/middlewares/validations";

describe('Name validations', () => {
    test('Single name', () => {
        expect(validateName("Sophia")).toBe(true);
    });

    test('Multiple names', () => {
        expect(validateName("Del Valle")).toBe(true);
    });

    test('Multiple names with extra spaces', () => {
        expect(validateName("   John    Doe  ")).toBe(true);
    });

    test('Name with valid symbols', () => {
        expect(validateName("Altaïr Ibn-La'Ahad")).toBe(true);
    });

    test('Name with invalid symbols', () => {
        expect(validateName("Altaïr Ibn+La\"Ahad")).toBe(false);
    });

    test('Name with numbers', () => {
        expect(validateName("Deadmau5")).toBe(false);
    });

    test('Only spaces', () => {
        expect(validateName("   ")).toBe(false);
    });

    test('Undefined name', () => {
        expect(validateName(undefined)).toBe(false);
    });
    // TODO: only symbols
});
