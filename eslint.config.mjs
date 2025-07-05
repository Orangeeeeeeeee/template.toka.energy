import { defineConfig } from "eslint/config";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),

    plugins: {
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: babelParser,
        ecmaVersion: 8,
        sourceType: "module",

        parserOptions: {
            allowImportExportEverywhere: true,

            ecmaFeatures: {
                experimentalObjectRestSpread: true,
            },
        },
    },

    rules: {
        "no-param-reassign": "off",

        "operator-linebreak": [2, "after", {
            overrides: {
                "?": "ignore",
                ":": "ignore",
            },
        }],

        indent: [0, 4],

        "arrow-body-style": [1, "as-needed", {
            requireReturnForObjectLiteral: false,
        }],

        "import/prefer-default-export": "off",

        "no-unused-vars": [1, {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
        }],

        "padded-blocks": [2, "never"],

        "import/extensions": [1, "always", {
            ignorePackages: true,
        }],

        "no-tabs": 0,
        "one-var": [1, "consecutive"],
        "no-case-declarations": 0,
        "no-underscore-dangle": 0,
        "no-undef": 2,
        "no-control-regex": 0,
        "no-useless-escape": 0,
        "no-plusplus": 0,

        "no-unused-expressions": [2, {
            allowShortCircuit: true,
        }],

        "no-else-return": 0,

        "consistent-return": [1, {
            treatUndefinedAsUnspecified: true,
        }],

        "max-len": [1, {
            code: 150,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
        }],

        "guard-for-in": 0,
        "no-restricted-syntax": [2, "WithStatement", "BinaryExpression[operator='in']"],
        "no-continue": 0,
        "no-return-assign": 0,
        "no-restricted-globals": 0,

        "no-console": "off",
    },
}]);