module.exports = {
  /**
   * extends 可以看做是去集成一个个配置方案的最佳实践
   * 需要注意的是：多个扩展中有相同的规则，以后面引入的扩展中规则为准。
   */
  extends: ['@antfu/react'],

  /**
   * 0 or 'off'：关闭规则
   * 1 or 'warn'：并将其视为一个警告（不会导致程序失败)
   * 2 or 'error'：打开规则，并将其视为一个错误（如果不修复，将导致程序失败）
   */
  rules: {
    semi: [2, 'always'],
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/no-unused-vars': 2,
    'n/prefer-global/process': 0,
  }
}
