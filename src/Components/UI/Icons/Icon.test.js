import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortIcon, SearchIcon, ClearIcon, InfoIcon, ToggleIcon } from './index';

describe('SortIcon', () => {
    it('renders SortIcon correctly', () => {
        render(<SortIcon />);
        const sortIcon = screen.getByTestId('sort-icon');
        expect(sortIcon).toBeInTheDocument();
    });
});

describe('SearchIcon', () => {
    it('renders SearchIcon correctly', () => {
        render(<SearchIcon />);
        const searchIcon = screen.getByTestId('search-icon');
        expect(searchIcon).toBeInTheDocument();
    });
});

describe('ClearIcon', () => {
    it('renders ClearIcon correctly', () => {
        render(<ClearIcon />);
        const clearIcon = screen.getByTestId('clear-icon');
        expect(clearIcon).toBeInTheDocument();
    });
});

describe('InfoIcon', () => {
    it('renders InfoIcon correctly', () => {
        render(<InfoIcon />);
        const infoIcon = screen.getByTestId('info-icon');
        expect(infoIcon).toBeInTheDocument();
    });
});

describe('ToggleIcon', () => {
    it('renders ToggleIcon correctly', () => {
        render(<ToggleIcon />);
        const toggleIcon = screen.getByTestId('toggle-icon');
        expect(toggleIcon).toBeInTheDocument();
    });
});