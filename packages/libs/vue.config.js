const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  productionSourceMap: false,
  publicPath: "http://localhost:8080/libs/",
  outputDir: "./dist/libs",
  configureWebpack: {
    output: {
      chunkLoadingGlobal: "myCustomFunc",
      filename: "[name].[contenthash].js",
      chunkFilename: "[name].[contenthash].js",
    },
    optimization: {
      minimize: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "libs",
        filename: "remote-entry.js",
        exposes: {
          "./QueryError.vue": "./src/components/QueryError.vue",
        },
        shared: {
          vue: {
            requiredVersion: "^2.6.11",
          },
        },
      }),
    ],
  },
};
