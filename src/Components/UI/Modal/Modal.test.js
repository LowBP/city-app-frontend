import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

it('renders modal when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={() => { }}><div>Modal Content</div></Modal>);
    const modalContent = screen.getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
});

it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal isOpen={true} onClose={onCloseMock}><div>Modal Content</div></Modal>);

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
});

it('calls onClose when clicked outside the modal', () => {
    const onCloseMock = jest.fn();
    render(<Modal isOpen={true} onClose={onCloseMock}><div>Modal Content</div></Modal>);

    const modalOverlay = screen.getByTestId('modal-overlay');
    fireEvent.mouseDown(modalOverlay);

    expect(onCloseMock).toHaveBeenCalled();
});