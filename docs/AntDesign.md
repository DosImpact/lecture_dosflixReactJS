# AntDesign

## 핀터레스트 Gestalt 사용하려다가, 차라리 좀더 완성된 컴포넌트 UI 프레임 워크를 배우자. !!

- yarn add antd
- yarn add react-app-rewired customize-cra
- yarn add babel-plugin-import
- yarn add less less-loader

```js
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
또는
    "antd": "react-app-rewired start",
}
```

Then create a config-overrides.js at root directory of your project for further overriding.

```js
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
```
