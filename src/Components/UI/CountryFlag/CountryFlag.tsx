import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { getCountryCode } from '../../../helpers/utils'

interface CountryFlagProps {
    country: string;
    className?: string
}

const CountryFlag: React.FC<CountryFlagProps> = ({ country, className }) => {
    const countryCode = country && getCountryCode(country) as string;

    if (!countryCode) {
        return <div data-testid="na-text">N/A</div>;
    }

    return (
        <div>
            {countryCode &&
                <ReactCountryFlag
                    data-testid="country-flag-image"
                    className={`cursor-pointer ${className}`}
                    countryCode={countryCode}
                    svg
                    aria-label={country}
                    title={country}
                    alt={country}
                />}
        </div>
    );
};

export default CountryFlag;
