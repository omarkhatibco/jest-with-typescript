module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'prettier/react', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	plugins: ['react-hooks'],
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'prettier/prettier': 'error',
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/no-var-requires': 0,
				'@typescript-eslint/explicit-function-return-type': 0,
			},
		},
	],
};
