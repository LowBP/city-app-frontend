import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import SearchInput from './SearchInput';

const mockStore = configureStore();

xdescribe('SearchInput', () => {
    it('updates search term on input change', () => {
        render(
            <Provider store={mockStore()}>
                <SearchInput />
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText('Search city details...');

        fireEvent.change(searchInput, { target: { value: 'New York' } });

        expect(searchInput.value).toBe('New York');
    });

    it('clears input on clear button click', () => {
        render(
            <Provider store={mockStore()}>
                <SearchInput />
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText('Search city details...');
        const clearButton = screen.getByTestId('clear-button');

        fireEvent.change(searchInput, { target: { value: 'New York' } });
        fireEvent.click(clearButton);

        expect(searchInput.value).toBe('');
    });

    it('dispatches fetchCitiesStart on search button click', () => {
        const store = mockStore();

        render(
            <Provider store={store}>
                <SearchInput />
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText('Search city details...');
        const searchButton = screen.getByText('Search');

        fireEvent.change(searchInput, { target: { value: 'New York' } });
        fireEvent.click(searchButton);

        expect(store.getActions()).toEqual([{ type: 'FETCH_CITIES_START', payload: { page: 1, searchTerm: 'New York' } }]);
    });

    it('dispatches fetchCitiesStart on pressing Enter key', async () => {
        const store = mockStore();

        render(
            <Provider store={store}>
                <SearchInput />
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText('Search city details...');

        fireEvent.change(searchInput, { target: { value: 'New York' } });
        fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13 });
        const data = await store.getActions()
        expect(data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    type: '[cities] fetch cities start',
                    payload: {
                        page: 1,
                        searchTerm: 'New York',
                        pageNumber: 1,
                        search: "New York",
                        sortQuery: undefined,
                        type: "FETCH_CITIES_START",
                    },
                }),
            ])
        );

        // expect(store.getActions()).toEqual([{ type: 'FETCH_CITIES_START', payload: { page: 1, searchTerm: 'New York', pageNumber: 1, search: "New York", sortQuery: undefined, "type": "FETCH_CITIES_START", }, "type": "[cities] fetch cities start", }]);
    });
});
