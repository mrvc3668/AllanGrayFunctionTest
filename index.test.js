const isValidateSAPhoneNumber = require('./index');

const invalidPhoneNumber = "62762414";
const validPhoneNumberCountryCode = "+27628093199";
const validPhoneNumberNoCountryCode = "0628093199";
const invalidEmptyString = " ";
const invalidPhoneNumberSpecialCharacters = "+275#$#%$*%$@!";

describe("Validate/Verify isValidateSAPhoneNumber functionality", () => {
    test('01: Validate a valid phone number with a country code returns true', () => {

        let result = isValidateSAPhoneNumber(validPhoneNumberCountryCode);

        expect(result).toBe(true);
    });

    test('02: Validate a valid phone number with no country code returns true', () => {
        let result = isValidateSAPhoneNumber(validPhoneNumberNoCountryCode);

        expect(result).toBe(true);
    });

    test('03: Validate an empty phone number returns false', () => {
        let result = isValidateSAPhoneNumber(invalidEmptyString);

        expect(result).toBe(false);
    });

    test('04: Validate an invalid phone number returns false', () => {
        let result = isValidateSAPhoneNumber(invalidPhoneNumber);

        expect(result).toBe(false);
    });

    test('05: Validate a phone number containing special characters returns false', () => {
        let result = isValidateSAPhoneNumber(invalidPhoneNumberSpecialCharacters);

        expect(result).toBe(false);
    });


})
