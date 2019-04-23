module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"root": true,
	"extends": "airbnb-base",
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"rules": {
		"comma-dangle": [2, "always-multiline"], // difference from openui5
		"import/extensions": ["error", "ignorePackages"], // override for UI5 WebComponents
		"no-cond-assign": 2,
		"no-console": 2,
		"no-constant-condition": 2,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty-character-class": 2,
		"no-empty": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 1,
		"no-extra-parens": [2, "functions"],
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": [2, "functions"],
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-negated-in-lhs": 2,
		"no-obj-calls": 2,
		"no-regex-spaces": 2,
		"no-sparse-arrays": 2,
		"no-trailing-spaces": 2,
		"no-unreachable": 2,
		"use-isnan": 2,
		// "valid-jsdoc": [1, { removed for UI5 WebComponents
		// 	"requireReturn": false
		// }],
		"valid-typeof": 2,

		"accessor-pairs": 2,
		"block-scoped-var": 1,
		// "consistent-return": 1, // removed for UI5 WebComponents
		"curly": [2, "all"],
		// "default-case": 1, // removed for UI5 WebComponents
		"no-alert": 2,
		"no-caller": 2,
		"no-div-regex": 2,
		"no-eval": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-implied-eval": 2,
		"no-iterator": 2,
		"no-labels": 2,
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-native-reassign": 2,
		"no-new-func": 2,
		"no-new-wrappers": 1,
		"no-new": 1,
		"no-octal-escape": 2,
		"no-octal": 2,
		"no-proto": 2,
		"no-redeclare": 1,
		"no-return-assign": 2,
		"no-script-url": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-unused-expressions": 1,
		"no-void": 2,
		"no-warning-comments": 0,
		"no-with": 2,
		"radix": [2, "as-needed"],
		"wrap-iife": [2, "any"],
		"yoda": 2,

		"strict": [2, "function"],

		"no-catch-shadow": 2,
		"no-delete-var": 2,
		"no-label-var": 2,
		"no-shadow-restricted-names": 2,
		"no-undef-init": 2,
		"no-undef": 2,
		"no-unused-vars": [2, {"vars":"all", "args":"none"}],
		"no-use-before-define": [1, "nofunc"],

		"brace-style": [2, "1tbs", { "allowSingleLine": true }],
		"camelcase": [1, { "properties": "never" }], // added for UI5 WebComponents
		"consistent-this": [1, "that"],
		"linebreak-style": 2,
		"max-nested-callbacks": [1, 3],
		"new-cap": 1,
		"new-parens": 2,
		"no-array-constructor": 2,
		"no-lonely-if": 1,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"no-nested-ternary": 2,
		"no-new-object": 2,
		"no-spaced-func": 2,
		"quote-props": [2, "as-needed", { "keywords": true, "unnecessary": false }],
		"semi-spacing": [1, {"before": false, "after": true}],
		"semi": 2,
		"keyword-spacing": 2,
		"space-infix-ops": 2,
		"space-unary-ops": [2, { "words": true, "nonwords": false }],
		// airbnb overrides
		"indent": [2, "tab"],
		"no-underscore-dangle": 0,
		"no-tabs": 0,
		"quotes": [2, "double", { "allowTemplateLiterals": true }],
		"no-useless-constructor": 0,
		"no-param-reassign": 0,
		"one-var": 0,
		"max-len": 0,
		"arrow-parens": [2, "as-needed"],
		"class-methods-use-this": 0,
		"no-plusplus": 0,
		"default-case": 0,
		"consistent-return": 0,
		"prefer-destructuring": 0,
		"arrow-body-style": 0,
		"import/no-unresolved": 0,
		"no-use-before-define": 0
	}
};
