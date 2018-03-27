<template>
  <el-container class="ef-h-full">
    <el-header class="ef-px-0 ef-border-b-4 ef-border-black ef-pin-t" style="height: 61px;">
      <ef-top-navigation/>
    </el-header>
    <el-container class="ef-h-full ef-py-4">
      <el-aside width="200px" class="ef-h-full ef-overflow-auto ef-shadow">
        <ef-left-tree-menu class="ef-h-full"/>
      </el-aside>
      <el-main class="ef-p-0">
        <div class="ef-px-4 ef-h-full ef-w-full">
        <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import EfTopNavigation from "./TopNavigation";
import EfLeftTreeMenu from "./LeftTreeMenu";
export default {
  components: { EfLeftTreeMenu, EfTopNavigation }
};
</script>
