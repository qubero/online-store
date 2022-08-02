import dotenv from 'dotenv'
dotenv.config();

export default {
  mode: 'development',
  devServer: {
    port: parseInt(process.env.PORT) || 8080,
    hot: true,
  },
  devtool: 'cheap-module-source-map',
};
