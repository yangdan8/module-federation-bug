const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  productionSourceMap: false,
  outputDir: "./dist",
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
        name: "consumer",
        filename: "remoteEntry.js",
        remotes: {
          "@test/libs": "libs@//localhost:8080/libs/remote-entry.js",
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
