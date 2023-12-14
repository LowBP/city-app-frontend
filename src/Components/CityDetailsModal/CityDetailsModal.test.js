import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CityDetailsModal from './CityDetailsModal';

const mockCityDetail = {
  name: 'Test City',
  name_native: 'Test Native City',
  continent: 'Test Continent',
  country: 'US',
  founded: '2000',
  population: '1000000',
  landmarks: ['Landmark1', 'Landmark2'],
  latitude: '40.7128',
  longitude: '-74.0060',
};

describe('CityDetailsModal', () => {
  it('renders modal with city details', () => {
    render(<CityDetailsModal isModalOpen={true} onCloseModal={() => { }} cityDetail={mockCityDetail} />);

    expect(screen.getByText('City Detail of "Test City"')).toBeInTheDocument();
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Test City')).toBeInTheDocument();
  });

  it('displays country flag if country is provided', () => {
    const cityDetailWithoutCountry = { ...mockCityDetail, country: undefined };

    render(<CityDetailsModal isModalOpen={true} onCloseModal={() => { }} cityDetail={cityDetailWithoutCountry} />);

    expect(screen.queryByTestId('country-flag')).toBeNull();

  });

  it('does not display country flag if country is not provided', () => {
    const cityDetailWithoutCountry = { ...mockCityDetail, country: undefined };

    render(<CityDetailsModal isModalOpen={true} onCloseModal={() => { }} cityDetail={cityDetailWithoutCountry} />);

    expect(screen.queryByTestId('country-flag')).toBeNull();
  });

  it('calls onCloseModal when close button is clicked', () => {
    const onCloseModalMock = jest.fn();
    const cityDetail = { ...mockCityDetail };

    render(<CityDetailsModal isModalOpen={true} onCloseModal={onCloseModalMock} cityDetail={cityDetail} />);

    const closeButton = screen.getByTestId('close-button');

    fireEvent.click(closeButton);

    expect(onCloseModalMock).toHaveBeenCalled();
  });
});
