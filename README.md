## JSX demo
安装babel
```
npm i babel -g --registry=https://registry.npm.taobao.org
```
安装插件
```
npm i babel-plugin-transform-react-jsx  --save-dev --registry=https://registry.npm.taobao.org
```
新建.babelrc文件

编译
```
babel --plugins transform-react-jsx index.jsx
```
