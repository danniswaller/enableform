<template>
  <div class="ef-flex ef-bg-white ef-border-b ef-border-grey-light">
    <div class="ef-flex ef-items-center ef-justify-center">
      <div class="ef-text-lg ef-font-bold ef-px-4 ef-text-blue-dark ef-cursor-pointer">
        <router-link :to="{name: 'homePage'}" tag="span">邮科通信</router-link>
      </div>
    </div>
    <div class="ef-flex-1 ef-flex ef-items-center ef-justify-center">
      <router-link :to="{name: 'officePage'}" class="ef-text-blue hover:ef-text-blue-dark ef-cursor-pointer" tag="div"><span>办公</span></router-link>
      <router-link :to="{name: 'applicationPage'}" class="ef-text-blue hover:ef-text-blue-dark ef-cursor-pointer ef-ml-4" tag="div">应用</router-link>
      <router-link :to="{name: 'systemUrlPage'}" class="ef-text-blue hover:ef-text-blue-dark ef-cursor-pointer ef-ml-4" tag="div">系统链接</router-link>
    </div>
  <el-menu class="ef-flex-1"
      :default-active="activeIndex"
           mode="horizontal"
           @select="handleSelect">
    <el-menu-item index="1" >四川邮科</el-menu-item>
    <el-submenu index="2">
      <template slot="title">系统管理员</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">通知</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">在线服务</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="5">退出</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  name: "ef-top-navigation",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>
