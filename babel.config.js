// Babel Configuration
module.exports = {
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-typescript",  { "jsxPragma": "h" }]
  ],
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma": "h", "pragmaFrag": "fragment" }]
  ]
}
