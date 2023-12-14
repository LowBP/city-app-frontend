import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FilterBar from './FilterBar';
import { getRenderedTotalCities, getTotalCities } from '../../Store/selectors';
import { useSelector } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({

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
        useSelector.mockReturnValueOnce(5);
        useSelector.mockReturnValueOnce(10);
        getRenderedTotalCities.mockReturnValueOnce(5);
        getTotalCities.mockReturnValueOnce(10);

        render(
            <Provider store={store}>
                <FilterBar />
            </Provider>
        );

        expect(screen.getByText('Displaying')).toBeInTheDocument();
    });
});
