import { formatNumberToK, getCountryCode } from "../helpers/utils";

describe('getCountryCode', () => {
    it('should return "US" for "USA"', () => {
        const result = getCountryCode('USA');
        expect(result).toBe('US');
    });

    it('should return "DE" for an unknown country', () => {
        const result = getCountryCode('UnknownCountry');
        expect(result).toBe('DE');
    });

    it('should return country code for a valid country name', () => {
        expect(getCountryCode('Germany')).toBe('DE');
        expect(getCountryCode('Canada')).toBe('CA');
    });
});

describe('formatNumberToK', () => {
    it('should format large numbers to billions', () => {
        const result = formatNumberToK('1500000000');
        expect(result).toBe('1.50B');
    });

    it('should format large negative numbers in billions', () => {
        expect(formatNumberToK('-1500000000')).toBe('-1.50B');
    });

    it('should format medium numbers to millions', () => {
        const result = formatNumberToK('5000000');
        expect(result).toBe('5.00M');
    });

    it('should format small numbers to thousands', () => {
        const result = formatNumberToK('1200');
        expect(result).toBe('1.20K');
    });

    it('should format numbers less than 1000 as is', () => {
        const result = formatNumberToK('500');
        expect(result).toBe('500');
    });

    it('should handle non-numeric input', () => {
        expect(formatNumberToK('abc')).toBe('NaN');
    });
});
