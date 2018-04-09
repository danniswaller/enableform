<template>
  <div class="ef-bg-white ef-border-r ef-border-t ef-border-grey-light ef-rounded">
    <el-tree class="ef-rounded" :data="menuTreeData" :props="menuTreeProps" :default-expand-all="true" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  name: "ef-left-tree-menu",
  data() {
    return {
      menuTreeProps: {
        children: "children",
        label: "label"
      },

    };
  },
  methods: {
    handleNodeClick(nodeData, node, nodeComponent) {
      if (nodeData.isLeaf) {
          let tabItem = [{title:'项目信息录入',name:'1'},{activeValue:'1'}];
          if(this.$store.state.tabItems.length<1) {
              this.$store.commit('incrementTabItems',tabItem);
              this.$router.push({name: 'managementPage'})
          }else{
              tabItem =[{title:'标签2',name:'2'},{activeValue:'2'}]
              this.$store.commit('incrementTabItems',tabItem);
          }
      }
    },
      addTab(){

      },

  },
    computed:{
        menuTreeData(){

          return this.$store.state.leftMenuData;
      }

    },
    created(){
        this.$store.dispatch('increatLeftMenu');
    }
};
</script>
