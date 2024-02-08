module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
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
    "no-unused-vars": "off", // Turn off unused variable checks (optional)
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ], // Allow short-circuit and ternary expressions
    "promise/always-return": "off", // Turn off always-return rule for promises
    "promise/catch-or-return": "off", // Turn off catch-or-return rule for promises
  },
};
