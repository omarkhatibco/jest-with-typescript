console.log('hwewz');

export default {
	collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	moduleDirectories: ['<rootDir>', 'node_modules'],
	transformIgnorePatterns: ['/node_modules/'],
};
