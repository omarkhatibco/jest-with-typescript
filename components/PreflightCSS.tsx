import { CSSReset } from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import { customConfig } from 'theme.config';

export const PreflightCSS: React.FC = () => {
	return (
		<>
			<CSSReset config={customConfig} />
			<Global
				styles={css`
					#__next {
						min-height: 100vh;
					}
					html,
					body {
						/* scroll-behavior: smooth; */
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}
				`}
			/>
		</>
	);
};
