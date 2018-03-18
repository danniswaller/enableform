https://www.tailwindcss.cn
https://www.tailwindcss.cn/docs/examples/forms

https://www.iviewui.com/docs/guide/start
npm install iview --save



props 外部状态 由父组件维护
data 内部状态  由自己维护

不应该在组件内直接修改props状态


props和data都是一个组件的状态，只是分类不一样

data是自己的状态，
props是外部状态，另一方面来讲,props提供了一种父组件向子组件通信的方式，这种通信是单向的（单向数据流），

现在还没有子组件向父组件通信的方式

“状态” -> 变量

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

global.store.set('currentPage','user list page');

app.vue  store.currentPage


页面路由，用户列表
page1 -> loadUserPage -> set users into store  (store.state.users= [...])
page2 -> this.$store.state.users




vue -> component(props,data, computed, methods, event($on,$emit) )  父组件向子组件通信用props， 子组件向父组件通信用emit
vuex -> store(state,action, mutation)  vuex是更灵活的一种通信方式，一种全局状态管理
vue-router -> router-view, router-link (页面路由)
css -> postcss, scss, tailwindcss