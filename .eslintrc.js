module.exports = {
	env: {
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'google',
		'plugin:prettier/recommended',
		'plugin:import/typescript'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'eslint-plugin-import-helpers'
	],
	rules: {
		'prettier/prettier': 'error',
		'import-helpers/order-imports': [
			'warn',
			{
				// example configuration
				newlinesBetween: 'never',
				groups: [
					'/^react/',
					'/^@react/',
					'module',
					'/^@\\//',
					['parent', 'sibling', 'index']
				],
				alphabetize: { order: 'asc', ignoreCase: true }
			}
		]
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: 'tsconfig.json'
			}
		},
		react: { version: 'detect' }
	}
};
