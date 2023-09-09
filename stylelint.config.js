module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],

  plugins: ['stylelint-stylistic'],

  rules: {
    // 禁止空块
    'block-no-empty': true,
    // 禁止额外的分号（可自动修复）
    'stylistic/no-extra-semicolons': true,
    // 声明块使用尾随分号
    'stylistic/declaration-block-trailing-semicolon': 'always',
  },
};
