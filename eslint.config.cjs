// eslint.config.cjs - Flat config for ESLint 9

const js = require("@eslint/js");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const importPlugin = require("eslint-plugin-import");
const nextPlugin = require("@next/eslint-plugin-next");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  // Ignore paths (replaces .eslintignore)
  {
    ignores: [
    "dist",
    "coverage",
    "docs",
    ".next",
    "next-env.d.ts",
  ],
  },

  // Base recommended JS rules
  js.configs.recommended,

  // Next.js rules (ported into flat config)
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...(nextPlugin.configs.recommended?.rules || {}),
      ...(nextPlugin.configs["core-web-vitals"]?.rules || {}),
    },
  },

  // TypeScript rules
  // eslint.config.cjs (en el bloque files: ["**/*.ts", "**/*.tsx"])
{
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: tsParser,
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      process: "readonly",
    },
  },
  plugins: {
    "@typescript-eslint": ts,
    import: importPlugin,
  },
  rules: {
    ...ts.configs.recommended.rules,

    // TS already does a better job here
    "no-undef": "off",

    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
  },
},


  // Scripts
  {
    files: ["scripts*/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
      sourceType: "module",
    },
  },
];
