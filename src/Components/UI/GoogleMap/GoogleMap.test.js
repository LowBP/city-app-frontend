import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GoogleMap from './GoogleMap';

const mockCenter = { lat: 40.7128, lng: -74.0060 };
const mockZoom = 10;

describe('GoogleMap', () => {
    it('renders GoogleMap correctly', () => {
        render(<GoogleMap center={mockCenter} zoom={mockZoom} />);
        const googleMapContainer = screen.getByTestId('google-map-container');

        expect(googleMapContainer).toBeInTheDocument();
    });
});
