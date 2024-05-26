/** @type { import('@storybook/react-vite').StorybookConfig } */
import type { StorybookConfig } from "@storybook/react-vite";
// Storybook 通过 .storybook 的文件夹进行配置
// main.js 主要配置
const config: StorybookConfig = {
  // 表示 story files 文件位置，相对于main.js
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  // Storybook 加载的 static files 目录
  staticDirs: ["../public"],
  // 插件列表
  addons: [
    // 用于创建在 story 之间导航的链接
    // import { linkTo } from '@storybook/addon-links';
    "@storybook/addon-links",
    // Storybook 默认附带的一组基本插件
    "@storybook/addon-essentials",
    // 用于对 Storybook 中的交互和测试进行可视化调试
    "@storybook/addon-interactions",
  ],
  // 根据特定的框架配置Storybook
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // 配置 Storybook 自动生成的文档
  docs: {
    // 为每个有 ”autodocs” 标签的CSF文件生成文档
    autodocs: "tag",
  },
  // 配置 Storybook 如何处理Typescript文件
  typescript: {
    // yarn install react-docgent -D
    // yarn add react-docgen-typescript -D
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
