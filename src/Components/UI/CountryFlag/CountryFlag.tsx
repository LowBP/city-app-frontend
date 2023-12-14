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
        return <div>Country code not found for {country}</div>;
    }

    return (
        <div>
            {countryCode &&
                <ReactCountryFlag
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
