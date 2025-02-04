function validateId(id: number | undefined): boolean {
    let validId: boolean;

    if (!id || !Number.isInteger(id) || id < 1)
        validId = false;
    else
        validId = true;
    
    return validId;
}

function validateDNI(dni: number | undefined): boolean {
    let validDNI;

    if (!dni || !Number.isInteger(dni) || +dni > 99_999_999 || +dni < 1_000_000)
        validDNI = false;
    else
        validDNI = true;

    return validDNI;
}

function validateName(name: string | undefined): boolean {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜüÖöÏïËëÄäÙùÒòÌìÈèÀà\s\'\-]+$/;
    let validName;
    // No se puede confiar en la gente
    if (typeof name === "string" && regex.test(name.trim()))
        validName = true;
    else
        validName = false;

    return validName;
}

function validateDate(date: string | undefined): boolean {
    let validDate: boolean;
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    
    if (typeof date !== "string" || !regex.test(date)) {
        validDate = false;
    }
    else {
        let year, month, day: string;
        [year, month, day] = date.split("-");
        const isLeapYear = +year % 4 === 0 && +year % 100 !== 0 || +year % 400 === 0;

        // tengo que hacer esta validacion manualmente porque js permite crear una fecha 30/02 .
        // pensé que el ORM iba a validar años bisiestos, pero no... (gracias js).
        if (month === "02" && +day > 29)
            validDate = false;
        else if (month === "02" && day === "29" && !isLeapYear)
            validDate = false;
        else
            validDate = true
    }

    return validDate;
}

function validatePhoneNumber(phoneNumber: string | undefined): boolean {
    const regex = /^\+?\d+([ -]?\(?\d+\)?[ -]?)*\d+$/;
    let validPhoneNumber;

    if (typeof phoneNumber === "string" && regex.test(phoneNumber))
        validPhoneNumber = true;
    else
        validPhoneNumber = false;

    return validPhoneNumber;
}

function validateEmail(email: string | undefined): boolean {
    // Permitir email nulo
    if (!email)
        return true;
    
    const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    let validEmail;

    if (typeof email === "string" && regex.test(email))
        validEmail = true;
    else
        validEmail = false;

    return validEmail;
}

function removeExtraWhiteSpaces (str: string): string {
    let normalStr = str.replaceAll(/[\t\r\n]/g, "").trim();
    normalStr = normalStr.replaceAll(/[\s]+/g, " ");

    return normalStr;
}

export {
    validateId,
    validateName,
    validateDNI,
    validateDate,
    validatePhoneNumber,
    validateEmail,
    removeExtraWhiteSpaces
};
