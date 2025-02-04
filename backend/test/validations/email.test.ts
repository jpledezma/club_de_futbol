import { validateEmail } from "../../src/api/middlewares/validations";

describe('Email validations', () => {
    test('Valid format 1', () => {
        expect(validateEmail("usuario@gmail.com")).toBe(true);
    });

    test('Valid format 2', () => {
        expect(validateEmail("nombre.apellido@empresa.com.ar")).toBe(true);
    });

    test('Valid format 3', () => {
        expect(validateEmail("nombre_apellido@empresa.co")).toBe(true);
    });

    test('Valid format 5', () => {
        expect(validateEmail("nombre-apellido@empresa.edu.cl")).toBe(true);
    });

    test('Valid format 6', () => {
        expect(validateEmail("correo123@sub.dominio.net")).toBe(true);
    });
    
    test('Invalid format 1', () => {
        expect(validateEmail("@sinusuario.com")).toBe(false);
    });
    
    test('Invalid format 2', () => {
        expect(validateEmail("usuario@dominio,com")).toBe(false);
    });
    
    test('Invalid format 3', () => {
        expect(validateEmail("sin-arroba.com")).toBe(false);
    });
    
    test('Invalid format 4', () => {
        expect(validateEmail("espacio en blanco@dominio.com")).toBe(false);
    });
    
    test('Undefined email', () => {
        expect(validateEmail(undefined)).toBe(true);
    });
});
