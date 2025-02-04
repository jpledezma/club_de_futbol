import { validateDate } from "../../src/api/middlewares/validations";

describe('Date validations', () => {
    test('ISO date', () => {
        expect(validateDate("1989-01-15")).toBe(true);
    });

    test('ISO date with single digits', () => {
        expect(validateDate("2020-5-1")).toBe(false);
    });

    test('ISO date without days', () => {
        expect(validateDate("2018-11")).toBe(false);
    });

    test('ISO format (invalid date)', () => {
        expect(validateDate("1990-40-50")).toBe(false);
    });

    test('ISO format, valid leap year', () => {
        expect(validateDate("2020-02-29")).toBe(true);
    });

    test('ISO format, invalid leap year', () => {
        expect(validateDate("2021-02-29")).toBe(false);
    });
    
    test('yyyy/mm/dd format', () => {
        expect(validateDate("2018/12/18")).toBe(false);
    });

    test('dd/mm/yyyy format', () => {
        expect(validateDate("19/11/2023")).toBe(false);
    });

    test('Undefined date', () => {
        expect(validateDate(undefined)).toBe(false);
    });
});
