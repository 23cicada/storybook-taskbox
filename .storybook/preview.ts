import '../src/index.css';
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize()

// 控制 stories 的呈现方式并添加全局 decorator 和 parameters
// 该组件将加载到 preview iframe（用于单独渲染组件） 中
// 使用preview.ts应用全局代码（css imports 或 JavaScript mocks）到所有stores中
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader]
};

export default preview;
