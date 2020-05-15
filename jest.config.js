module.exports = {
	collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	moduleDirectories: ['.', 'node_modules'],
	transformIgnorePatterns: ['/node_modules/'],
	// moduleNameMapper: {
	// 	'^@(.*)$': '<rootDir>$1',
	// },
};
