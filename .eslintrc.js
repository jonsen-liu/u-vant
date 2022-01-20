module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'vue/setup-compiler-macros': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'@vue/typescript/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: 'vue-eslint-parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'@typescript-eslint/no-explicit-any': ['off'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-v-model-argument': 'off',
		'space-before-function-paren': 'error',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	},
	globals: {
		uni: 'readonly',
		getCurrentPages: 'readonly',
		tt: 'readonly',
		wx: 'readonly',
		my: 'readonly'
	}
}
