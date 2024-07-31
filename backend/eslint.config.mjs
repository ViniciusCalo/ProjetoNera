import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    plugins: { jest: pluginJest },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules
    }
  },
  {
    languageOptions: { globals: { ...globals.node, ...globals.jest } }
  }
];
