import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  rules: {
    // taro
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // node
    'node/prefer-global/process': 'off',
  },
  extends: [
    'taro/react',
  ],
  ignores: [
    // taro
    'project.config.json',
    'project.private.config.json',
  ],
})
