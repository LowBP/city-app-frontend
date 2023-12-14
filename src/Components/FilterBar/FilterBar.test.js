import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FilterBar from './FilterBar';
import { getRenderedTotalCities, getTotalCities } from '../../Store/selectors';
import { useSelector } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({
    // Add your initial state here if needed
});

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

jest.mock('../../Store/selectors', () => ({
    getRenderedTotalCities: jest.fn(),
    getTotalCities: jest.fn(),
}));

describe('FilterBar', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });


    xit('renders correctly', () => {
        // Mock the selectors' return values
        useSelector.mockReturnValueOnce(5); // Replace with your desired value
        useSelector.mockReturnValueOnce(10); // Replace with your desired value
        getRenderedTotalCities.mockReturnValueOnce(5); // Replace with your desired value
        getTotalCities.mockReturnValueOnce(10); // Replace with your desired value

        render(
            <Provider store={store}>
                <FilterBar />
            </Provider>
        );

        // Add your assertions based on the rendered output
        expect(screen.getByText('Displaying')).toBeInTheDocument();
        // Add more assertions as needed
    });
});
