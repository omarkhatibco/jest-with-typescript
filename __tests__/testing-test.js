import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';
// import { Providers } from '../components';

const Wrapper = ({ children }) => {
	return <div>{children}</div>;
};
test('check if the index renderd', () => {
	const { getByText } = render(<Index />, { wrapper: Wrapper });
	const paragraph = getByText(/Find in-depth information about Next.js features and API./);
	expect(paragraph).toBeInTheDocument();
});
