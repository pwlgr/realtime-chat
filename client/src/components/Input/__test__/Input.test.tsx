import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputComponent from '../Input';

it('should accpet value as a new message', () => {
	const mockSetMessage = jest.fn();
	const { getByLabelText, getByText } = render(<InputComponent setMessage={mockSetMessage} />);
	const Input = getByLabelText('messageInput') as HTMLInputElement;

	fireEvent.change(Input, { target: { value: 'new message' } });
	expect(Input.value).toContain('new message');
});

it('should call send message only once when clicked', () => {
	const mockSendMessage = jest.fn();
	const { getByText } = render(<InputComponent sendMessage={mockSendMessage} />);
	const SendBtn = getByText('Send') as HTMLButtonElement;

	fireEvent.click(SendBtn);
	expect(mockSendMessage).toHaveBeenCalled();
	expect(mockSendMessage).toHaveBeenCalledTimes(1);
});
