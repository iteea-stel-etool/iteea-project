// Webpack Configuration
import { join } from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const entry = {
  main: join(__dirname, 'src/index.tsx')
}

export const output = {
  path: join(__dirname, 'dist'),
  publicPath: '/',
  filename: '[name].js'
}

export const plugins = [
  new HtmlPlugin({
    title: 'Preact Configuration',
    template: join(__dirname, 'public/index.html'),
    favicon: join(__dirname, 'public/favicon.ico')
  }),
  new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
]

export const resolve = {
  extensions: ['.tsx', '.ts', '.js']
}

export const module = {
  rules: [
    { test: /\.tsx?/, loader: 'babel-loader', include: join(__dirname, 'src') },
    {
      test: /\.css?/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        },
        'postcss-loader'
      ]
    }
  ]
}

export const devServer = {
  host: 'localhost',
  port: 4000,
  contentBase: join(__dirname, 'src')
}
