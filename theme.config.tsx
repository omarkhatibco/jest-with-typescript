import { theme, ITheme } from '@chakra-ui/core';

// console.log({ chakra: theme });

interface Config {
	color: string;
	bg: string;
	borderColor: string;
	placeholderColor: string;
}

type ConfigReturnType = { light: Config; dark: Config };

const customIcons = {
	example: {
		path: <g fill='currentColor'></g>,
		viewBox: '0 0 40 40',
	},
};

export const customTheme = {
	...theme,
	fonts: {
		...theme.fonts,
	},
	colors: {
		...theme.colors,
	},
	icons: {
		...theme.icons,
		...customIcons,
	},
};

export const customConfig = (theme: ITheme): ConfigReturnType => ({
	light: {
		color: theme.colors.gray[800],
		bg: theme.colors.white,
		borderColor: theme.colors.gray[200],
		placeholderColor: theme.colors.gray[400],
	},
	dark: {
		color: theme.colors.whiteAlpha[900],
		bg: theme.colors.gray[800],
		borderColor: theme.colors.whiteAlpha[300],
		placeholderColor: theme.colors.whiteAlpha[400],
	},
});
