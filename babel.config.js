// babel.config.js
const NodeEnv = process.env.NODE_ENV
const BabelIgnore = [
  '__snapshots__/**'
]

if (NodeEnv === 'test') {
  // Do nothing
} else {
  BabelIgnore.push('**/*.test.js')
  BabelIgnore.push('**/*.spec.js')
}

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  ignore: BabelIgnore,
  plugins: ['react-docgen']
}
