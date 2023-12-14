import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryFlag from './CountryFlag';

describe('CountryFlag', () => {
    it('renders CountryFlag correctly with country code', () => {
        render(<CountryFlag country="USA" />);
        const flagImage = screen.getByTestId('country-flag-image');

        expect(flagImage).toBeInTheDocument();
        expect(flagImage).toHaveAttribute('aria-label', 'USA');
        expect(flagImage).toHaveAttribute('title', 'USA');
        expect(flagImage).toHaveAttribute('alt', 'USA');
    });
});
