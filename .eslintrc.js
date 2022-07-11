module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'standard'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'

		// ecmaVersion: 'latest',
		// sourceType: 'module',
		// ecmaFeatures: {
		// 	modules: true
		// },
		// requireConfigFile: false,
		// parser: '@typescript-eslint/parser'
	},
	plugins: [
		'vue',
		'@typescript-eslint'
	],
	rules: {
		'no-var': 'error', // 禁止使用 var
		'no-tabs': 'off',
		semi: [2, 'never'],
		'vue/html-indent': ['error', 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		}],
		indent: [1, 'tab', {
			SwitchCase: 1
		}],
		'no-unused-vars': 'off',
		'vue/max-attributes-per-line': ['error', {
			singleline: { max: 5 },
			multiline: { max: 5 }
		}],
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['index'] // 需要忽略的组件名
			}
		],
		'no-mixed-spaces-and-tabs': 0
	},
	globals: {
		getApp: 'readonly',
		uni: 'readonly',
		wx: 'readonly',
		tt: 'readonly',
		getCurrentPages: 'readonly',
		my: 'readonly',
		requirePlugin: 'readonly',
		requireDynamicLib: 'readonly',
		upsdk: 'readonly',
		swan: 'readonly'
	}
}
