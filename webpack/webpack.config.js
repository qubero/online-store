import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

export default async ({ mode }) => {
  const { default: envConfig } = await import(`./webpack.${mode}.js`);

  return merge(commonConfig, envConfig);
};
