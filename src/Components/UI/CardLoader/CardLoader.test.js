import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardLoader from './CardLoader';

describe('CardLoader', () => {
    it('renders CardLoader correctly when isLoading is true', () => {
        render(<CardLoader isLoading={true} />);
        const skeletonLoaders = screen.getAllByTestId('skeleton-loader');

        expect(skeletonLoaders).toHaveLength(5);
    });

    it('does not render CardLoader when isLoading is false', () => {
        render(<CardLoader isLoading={false} />);
        const skeletonLoaders = screen.queryByTestId('skeleton-loader');

        expect(skeletonLoaders).toBeNull();
    });
});
