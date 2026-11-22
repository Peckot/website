# Peckot Studios 官网

## 本地主题调试

```sh
pnpm dev               # 正常开发，不显示浮窗
pnpm dev --mode theme  # 启用主题调试浮窗
```

点击页面左下角的「系统 / 亮色 / 暗色」即可切换，无需刷新。浮窗通过同源 iframe 预览应用，由浏览器传递 `color-scheme`，无需改写应用样式或 `matchMedia()`。生产构建与预览不包含此工具。
