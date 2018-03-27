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
      menuTreeData: [
        {
          label: "管理系统",
          children: [
            {
              label: "投标管理",
              children: [
                {
                  label: "项目信息录入",
                  isLeaf: true,
                  name: "projectInfoWrite"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleNodeClick(nodeData, node, nodeComponent) {
      if (nodeData.isLeaf) {
        this.$router.push({ name: nodeData.name + "Page" });
      }
    }
  }
};
</script>
