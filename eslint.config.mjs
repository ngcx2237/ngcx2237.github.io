import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    prettier: {
      endOfLine: 'lf',
    },
  },
  unocss: true,
  astro: true,
}, {
  files: ['**/*.md'],
  rules: {
    'style/no-multiple-empty-lines': 'off',
    'prettier/prettier': 'off', // Disable Prettier rule for markdown files
  },
})
