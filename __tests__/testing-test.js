import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';
import { Providers } from '../components';

test('check if the index renderd', () => {
	const { getByText } = render(<Index />, Providers);
	const paragraph = getByText(/Find in-depth information about Next.js features and API./);
	expect(paragraph).toBeInTheDocument();
});
