import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CityCard from './CityCard';

jest.mock('../CityDetailsModal/CityDetailsModal', () => ({ isModalOpen, onCloseModal }) => (
    <div data-testid="mocked-modal">
        <span>{`Modal Open: ${isModalOpen}`}</span>
        <button onClick={onCloseModal}>Close Modal</button>
    </div>
));

jest.mock('../UI/CountryFlag/CountryFlag', () => ({ country, className }) => (
    <div data-testid="mocked-country-flag">{`${country} ${className || ''}`}</div>
));

const cityMock = {
    name: 'Test City',
    continent: 'Test Continent',
    population: 1000000,
    country: 'Test Country',
    founded: 2000,
    landmarks: ['Landmark1', 'Landmark2'],
};

describe('CityCard', () => {
    it('renders correctly and toggles modal state on click', () => {
        render(<CityCard city={cityMock} />);

        expect(screen.getByText('Test City')).toBeInTheDocument();
        expect(screen.getByText('Continent')).toBeInTheDocument();
        expect(screen.getByText('Test Continent')).toBeInTheDocument();
        expect(screen.getByText('Population')).toBeInTheDocument();
        expect(screen.getByText('1.00M')).toBeInTheDocument();
        expect(screen.getByText('Country')).toBeInTheDocument();
        expect(screen.getByTestId('mocked-country-flag')).toBeInTheDocument();
        expect(screen.getByText('Founded')).toBeInTheDocument();
        expect(screen.getByText('2000')).toBeInTheDocument();
        expect(screen.getByText('Landmarks')).toBeInTheDocument();
        expect(screen.getByText('Landmark1, Landmark2')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Test City'));

        expect(screen.getByTestId('mocked-modal')).toBeInTheDocument();
        expect(screen.getByText('Modal Open: true')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Close Modal'));

        expect(screen.getByTestId('mocked-modal')).toBeInTheDocument();
        expect(screen.getByText('Modal Open: false')).toBeInTheDocument();
    });
});
