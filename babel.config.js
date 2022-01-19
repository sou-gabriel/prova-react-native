module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@shared": "./src/shared",
            "@store": "./src/store",
            "@routes": "./src/routes",
          },
        },
      ],
    ],
  };
};
