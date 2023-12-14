import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('renders Sidebar correctly', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );

        const openSidebarButton = screen.getByRole('button', { name: 'Open sidebar' });
        const sidebar = screen.getByLabelText('Sidebar');
        const cityExplorerLink = screen.getByRole('link', { name: 'City Explorer' });
        const cityDetailsLink = screen.getByRole('link', { name: 'City Details' });


        fireEvent.click(openSidebarButton);

        fireEvent.click(cityExplorerLink);


        fireEvent.click(cityDetailsLink);


        fireEvent.click(openSidebarButton);

    });

    it('navigates to City Explorer route when link is clicked', () => {
        render(
            <Router>
                <Routes>
                    <Route path="/cities">City Explorer Content</Route>
                </Routes>
                <Sidebar />
            </Router>
        );

        const openSidebarButton = screen.getByRole('button', { name: 'Open sidebar' });
        const cityExplorerLink = screen.getByRole('link', { name: 'City Explorer' });

        // Click the open sidebar button
        fireEvent.click(openSidebarButton);

        // Click the City Explorer link
        fireEvent.click(cityExplorerLink);

        expect(screen.getByText('City Details')).toBeInTheDocument();
    });


});
