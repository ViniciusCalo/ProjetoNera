import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    ignores: ["node_modules/**"] // ignora todos os diretórios dentro da pasta
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module", //Define o tipo de fonte. Aqui, estamos especificando que estamos usando módulos.
      globals: { //Define variáveis globais reconhecidas pelo ESLint. Estamos combinando globais do ambiente Node.js e Jest.
        ...js.environments.node.globals,
        jest: jestPlugin.environments.globals.jest
      }
    },
    plugins: {
      jest: jestPlugin
    },
    rules: {
      "no-unused-vars": "warn", //Marca variáveis não utilizadas como aviso.
      "no-undef": "error", //Marca variáveis indefinidas como erro.
      "no-console": "off"
    }
  },
  {
    files: ["**/__tests__/**/*.js", "**/*.test.js"],
    rules: {
      "jest/no-mocks-import": "off"
    }
  }
];
