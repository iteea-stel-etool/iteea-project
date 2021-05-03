// Webpack Configuration
import { join } from 'path'
import HtmlPlugin from 'html-webpack-plugin'

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
  })
]

export const resolve = {
  extensions: ['.tsx', '.ts', '.js']
}

export const module = {
  rules: [
    { test: /\.tsx?/, loader: 'babel-loader', include: join(__dirname, 'src') }
  ]
}

export const devServer = {
  host: 'localhost',
  port: 4000,
  contentBase: join(__dirname, 'src'),
}
