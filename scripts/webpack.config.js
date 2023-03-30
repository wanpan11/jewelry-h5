/* eslint-disable @typescript-eslint/no-var-requires */
require("../env/env.js");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const dynamicConf = require(`./${process.env.NODE_ENV}.config.js`);
const rootDir = path.resolve(__dirname, "../");
console.log("ENV ===>", process.env.NODE_ENV);

const baseConfig = {
  context: path.resolve(rootDir, "./src"),
  entry: dynamicConf.entry,
  output: {
    path: path.resolve(rootDir, dynamicConf.outDir),
    filename: "[name]_[contenthash].js",
    chunkFilename: "js/[name]_[contenthash].js",
    clean: true,
    publicPath: dynamicConf.publicPath,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devtool: false,
  // loader 规则
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: dynamicConf.cssPublicPath
                ? dynamicConf.cssPublicPath
                : dynamicConf.publicPath,
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
            },
          },
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
                useBuiltIns: "usage",
                corejs: "3",
              },
            ],
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
            ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
          ],
          plugins: [
            "@babel/plugin-transform-runtime",
            [
              "import",
              {
                libraryName: "@nutui/nutui-react",
                libraryDirectory: "dist/esm",
                style: true,
                camel2DashComponentName: false,
              },
              "nutui-react",
            ],
          ],
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif)/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 限制于 8kb
          },
        },
      },
    ],
  },
  // 模块解析
  resolve: {
    alias: {
      "@src": path.resolve(rootDir, "./src"),
    },
    extensions: [".ts", ".jsx", ".tsx", "..."], // 自动不全文件后缀
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: dynamicConf.title,
      template: path.resolve(rootDir, "./public/index.html"),
      filename: "index.html",
    }),
    // css 分离
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};

module.exports = (env, argv) => {
  console.log("MODE ===>", argv.mode);

  if (argv.mode === "development") {
    const devServer = {
      historyApiFallback: true,
      compress: true,
      client: {
        logging: "error",
        progress: true,
        overlay: true,
      },
      proxy: dynamicConf?.devServer?.proxy,
      open: true,
      port: dynamicConf?.devServer?.port,
    };
    baseConfig.cache = { type: "filesystem" };
    baseConfig.devServer = devServer;
    baseConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));
  }

  if (argv.mode === "production") {
    const optimization = {
      usedExports: true,
      minimize: true,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            filename: "[contenthash].vendor.js",
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          react: {
            name: "ReactAbout",
            test: /.jsx/,
            priority: 1,
          },
        },
      },
    };
    baseConfig.optimization = optimization;
    baseConfig.plugins.push(
      new BundleAnalyzerPlugin({ analyzerMode: "static" })
    );
  }

  return baseConfig;
};
