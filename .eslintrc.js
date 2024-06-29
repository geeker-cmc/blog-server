module.exports = {
  // 指定环境，这里配置了浏览器和Node.js
  "env": {
    "browser": true,
    "node": true,
    "es2021": true // ES2021特性
  },
  // 扩展配置，这里包括了标准的 ESLint 规则，TypeScript 规则，以及 Prettier
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // 启用 TypeScript 的 ESLint 插件推荐规则
    "plugin:prettier/recommended" // 启用 prettier 插件并禁用 ESLint 中与 prettier 冲突的规则
  ],
  // 解析器选项，这里指定了解析器和 ECMAScript 版本
  "parserOptions": {
    "ecmaVersion": 12, // 指定 ECMAScript 版本
    "sourceType": "module", // 使用 ES 模块
    "project": "./tsconfig.json" // 使用项目中的 tsconfig.json 文件
  },
  // 解析器，这里使用 TypeScript 的解析器
  "parser": "@typescript-eslint/parser",
  // 插件配置，这里配置了 TypeScript 和 prettier 插件
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  // 规则配置，具体规则解释如下
  "rules": {
    "prettier/prettier": "error", // prettier 的错误作为 ESLint 错误报告
    "@typescript-eslint/no-explicit-any": "off",
  },
  // 指定忽略文件
  "ignorePatterns": [
    "node_modules/",
    "dist/",
    "build/"
  ],
  // 重写项目中个别文件或文件夹的配置
  "overrides": [
    {
      "files": ["*.ts"], // 只对 TypeScript 文件生效
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off" // 关闭显式函数返回类型规则
      }
    }
  ]
};
