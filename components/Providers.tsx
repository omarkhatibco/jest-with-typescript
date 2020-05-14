import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import { customTheme } from '@theme.config';
import { PreflightCSS } from '@components';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider theme={customTheme}>
			<PreflightCSS />
			<ColorModeProvider value='dark'>{children}</ColorModeProvider>
		</ThemeProvider>
	);
};
