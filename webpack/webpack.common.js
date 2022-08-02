import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const PATHS = {
  entry: resolve(__dirname, '..', 'src', 'index.tsx'),
  output: resolve(__dirname, '..', 'dist'),
  template: resolve(__dirname, '..', 'src', 'index.html'),
};

export default {
  entry: PATHS.entry,

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpe?g)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: PATHS.output,
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(PATHS.entry, '..', 'assets', 'images'),
          to: resolve(PATHS.output, 'images'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: PATHS.template,
      filename: 'index.html',
    }),
  ],
};
