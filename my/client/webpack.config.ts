import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
  mode: 'none',
  entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.m?js/,
          resolve: {
              fullySpecified: false
          }
        },
        {
          test: /\.m?jsx?$/,
          resolve: {
            fullySpecified: false
          },
        },
      ],
      resolve: { 
        extensions: ['*', '.mjs', '.js', '.jsx', '.ts', '.tsx'],
        plugins: [
          new TsconfigPathsPlugin(),
        ],
       },
    },    
  };