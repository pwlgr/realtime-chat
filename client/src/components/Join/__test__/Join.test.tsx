import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Join from '../Join';

it('should accpet value as a user name', () => {
	const mockSetMessage = jest.fn();
	const { getByLabelText, getByText } = render(<Join />);
	const Input = getByLabelText('nameInput') as HTMLInputElement;

	fireEvent.change(Input, { target: { value: 'user' } });
	expect(Input.value).toContain('user');
});
