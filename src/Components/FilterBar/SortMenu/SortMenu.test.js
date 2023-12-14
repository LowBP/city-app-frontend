import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SortMenu from './SortMenu';
import { fetchCitiesStart } from '../../../Store/actions';
const mockStore = configureMockStore();
const store = mockStore(
    {
        cities: [],
        fetchStatus: null,
        currentPage: 1,
        pageSize: 10,
        totalCities: 0,
        totalPages: 0,
        searchTerm: '',
    }
);
jest.mock('../../../Store/actions');
xdescribe('SortMenu', () => {
    it('applies sort options correctly', () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <SortMenu />
            </Provider>
        );

        // Open the menu
        fireEvent.click(getByLabelText('Open sort menu'));

        fireEvent.click(getByText('City Name'));

        fireEvent.click(getByText('Apply'));

        expect(fetchCitiesStart).toHaveBeenCalledWith(1, '', { sortBy: 'name', sortOrder: 'asc' });
    });

    it('renders SortMenu component', () => {
        render(<SortMenu />);
        expect(screen.getByText('City Name')).toBeInTheDocument();
        expect(screen.getByText('Population')).toBeInTheDocument();
        expect(screen.getByText('Founded')).toBeInTheDocument();
    });

    it('opens and closes menu on button click', () => {
        render(<SortMenu />);
        const sortButton = screen.getByTestId('sort-menu-button');

        expect(screen.queryByText('City Name')).not.toBeInTheDocument();

        fireEvent.click(sortButton);
        expect(screen.getByText('City Name')).toBeInTheDocument();

        fireEvent.click(sortButton);
        expect(screen.queryByText('City Name')).not.toBeInTheDocument();
    });

    it('applies sort options correctly', () => {
        render(<SortMenu />);
        const sortButton = screen.getByTestId('sort-menu-button');

        // Open menu
        fireEvent.click(sortButton);

        // Click on 'City Name' option
        fireEvent.click(screen.getByLabelText('City Name'));

        // Apply ascending order
        fireEvent.click(screen.getByText('↑'));
        expect(screen.getByLabelText('City Name')).toHaveProperty('checked', true);

        // Apply descending order
        fireEvent.click(screen.getByText('↓'));
        expect(screen.getByLabelText('City Name')).toHaveProperty('checked', true);

        // Clear sort
        fireEvent.click(screen.getByText('Clear'));
        expect(screen.getByLabelText('City Name')).toHaveProperty('checked', false);

        // Close menu
        fireEvent.click(sortButton);
        expect(screen.queryByText('City Name')).not.toBeInTheDocument();
    });
});
