module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    [
      "module-resolver",
      {
        alias: {
          "@Configs": "./src/configs",
          "@Entities": "./src/entities",
          "@Constants": "./src/constants",
          "@Controllers": "./src/controllers",
          "@Repositories": "./src/repositories",
          "@Errors": "./src/errors",
          "@Types": "./src/@types",
          "@Builders": "./src/builders",
          "@Middlewares": "./src/middlewares",
          "@Services": "./src/services",
          "@Schemas": "./src/schemas",
        },
      },
    ],
  ],
  ignore: ["**/*.test.ts"],
};