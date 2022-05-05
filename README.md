# 用 Todoist 组织一切，管理工作和生活的To Do List，使用 Vite、Vue 和 Vuex 构建的 TodoMVC

![TodoMVC Vue](./images/screenshot.png "TodoMVC Vue")

## Concepts and tools covered

- [Vue CLI](https://cli.vuejs.org/)
- [Components and Props](https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props)
- [处理事件](https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events)
- [Vuex](https://vuex.vuejs.org/)
- [单元测试](https://vue-test-utils.vuejs.org/)
- [端到端测试](https://www.cypress.io/)

## 用法

安装依赖项后，以下 NPM 脚本变为可用：

- start: 在http://localhost:xxxx上以开发模式启动应用程序
- build：将用于生产的应用程序捆绑到dist文件夹中
- test: 运行单元和 E2E 测试
- test:unit: 在后缀为Mocha和Chai的文件夹中运行单元测试src*.spec.js
- test:e2e：在后缀为的文件夹中使用Cypress运行 E2E 测试tests/e2e*.spec.js
- format：在文件夹中使用Prettier格式化代码src
- lint:基于Airbnb 的风格指南和 Prettier 配置的ESLint lint 文件
