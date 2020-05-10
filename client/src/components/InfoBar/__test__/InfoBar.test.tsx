import React from 'react';
import { render } from '@testing-library/react';
import InfoBar from '../InfoBar';

it('should render room value as a header', () => {
	const room = 'room name';
	const { getByRole } = render(<InfoBar room={room} />);
	const h3 = getByRole('heading') as HTMLHeadingElement;
	expect(h3).toHaveTextContent(room);
});
