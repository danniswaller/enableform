<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" closable >
      <el-tab-pane
              v-for="(item, index) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
      >
        {{item.content}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "project-info-write-page",
    data(){
        return {
            editableTabsValue : '1',
            editableTabs:[{
                title:'项目信息录入',
                name:'1',
                content:'tab1 content'
            }]

        }
    }

  }
</script>