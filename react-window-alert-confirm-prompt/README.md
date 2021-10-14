# react-window-alert-confirm-prompt

## Background

React 在处理 modal/dialog 时一直比较麻烦, 因为你要自行管理打开和关闭的过程, 还要把 modal/dialog 组件插入到 jsx 里.

其实浏览器自带的 `alert` `confirm` `prompt` 就很好用, 只是因为功能单一无法定制, 所以现在用的越来越少了.

## Question

有没有可能在 React 里实现这样的弹出对话框, 只需要一个函数调用就能打开并等待关闭呢?

```tsx
const App = () => {
  const handleClick = async () => {
    const answer = await reactConfirm('Are you sure?');
    console.log('Your answer is', answer);
  };

  return <button onClick={handleClick}>alert</button>;
};
```

[![CodeSandbox](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/CompassChina/quiz/main/csb.json)](https://githubbox.com/CompassChina/quiz/tree/main/react-window-alert-confirm-prompt)
[![StackBlitz](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/CompassChina/quiz/main/sbz.json)](https://githubbox.com/CompassChina/quiz/tree/main/react-window-alert-confirm-prompt)
