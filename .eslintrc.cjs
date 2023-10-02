module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
};
