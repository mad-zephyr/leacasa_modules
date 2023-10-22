const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path'); 

const isDevelopment = process.env.NODE_ENV !== 'production';

const developmentConfig = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js', 
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },
};

const productionConfig = {
  entry: {
    moduleMap: './src/modules/module-map.tsx',
    moduleIcon: './src/modules/module-icon.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // используйте [name], чтобы Webpack автоматически заменял имя файла на имя точки входа
    library: '[name]', 
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};

const commonConfig = {
  // Общие настройки для обоих режимов
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? '[name].bundle.js' : '[name].[contenthash].js',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    liveReload: true,
    hot: true,
    compress: true,
    port: 3001,
  },
  mode: 'development',
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@': path.resolve(__dirname, './src') 
  },
    extensions: ['.ts', '.tsx', '.js', '.css', '.sass' ],
  },
  module: {
    rules: [
      { 
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: ['last 2 versions', '> 1%']
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, './src/assets/styles')]
              }
            }
          }        
        ],
      }, 
    ], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css' 
    })
  ],
};

module.exports = Object.assign(
  {},
  commonConfig,
  isDevelopment ? developmentConfig : productionConfig
);
