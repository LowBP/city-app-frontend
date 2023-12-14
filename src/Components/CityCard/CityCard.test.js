import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CityCard from './CityCard';

// Mock the CityDetailsModal component
jest.mock('../CityDetailsModal/CityDetailsModal', () => ({ isModalOpen, onCloseModal }) => (
    <div data-testid="mocked-modal">
        <span>{`Modal Open: ${isModalOpen}`}</span>
        <button onClick={onCloseModal}>Close Modal</button>
    </div>
));

// Mock the CountryFlag component
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

        // Check if the city details are displayed
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

        // Check if the modal is closed initially
        // expect(screen.queryByTestId('mocked-modal')).not.toBeInTheDocument();

        // Click on the city card to open the modal
        fireEvent.click(screen.getByText('Test City'));

        // Check if the modal is open after click
        expect(screen.getByTestId('mocked-modal')).toBeInTheDocument();
        expect(screen.getByText('Modal Open: true')).toBeInTheDocument();

        // Click on the "Close Modal" button to close the modal
        fireEvent.click(screen.getByText('Close Modal'));

        // Check if the modal is closed after the button click
        expect(screen.getByTestId('mocked-modal')).toBeInTheDocument();
        expect(screen.getByText('Modal Open: false')).toBeInTheDocument();
    });
});
