module.exports = {
	apps: [
		{
			name: 'siem-v2',
			script: 'server.js',
			env: {
				NODE_ENV: 'production',
				PORT: 3001,
			},
		},
	],
};
