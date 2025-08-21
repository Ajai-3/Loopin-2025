import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Enforce semicolons
      "semi": ["error", "always"],
      // Enforce single quotes
      "quotes": ["error", "single"],
      // Enforce consistent indentation (2 spaces)
      "indent": ["error", 2],
      // Require trailing commas in multiline objects/arrays
      "comma-dangle": ["error", "always-multiline"],
      // Disallow unused variables
      "no-unused-vars": ["warn"],
      // Prefer const over let if variable is never reassigned
      "prefer-const": ["error"],
      // Disallow console logs in production
      "no-console": ["warn"],
      // Require space before function parentheses
      "space-before-function-paren": ["error", "always"],
    },
  },
  tseslint.configs.recommended,
]);
