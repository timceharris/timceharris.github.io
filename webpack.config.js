const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, "docs"),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
      },
    module : {
        rules: [
            {
                test: /\.p?css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },
              
              {

                test: /\.s[ac]ss$/,
                use: [

                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"

                  ]
              },

              {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react',{"runtime": "automatic"}]]
                      }
                }
              }

        ]
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html"),
        }),
      ],
  };