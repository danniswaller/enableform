<template>
    <div>
        <button @click="test">表单管理页面及标签</button>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane
                    v-for="(item, index) in tabItems"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
            >
                <div>tab内容</div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export  default{
        name: 'managePage',
        data(){

            return {
               /* activeName:'1',
                //tabsName: '1',
                tabItems: this.$store.state.tabItems*/
            }
        },
        computed: {
            activeName:{
                get:function(){
                    console.log(this.$store.state.activeName);
                return this.$store.state.activeName.activeValue;
            },
                set:function(val){

                  console.log(val);
                }
            },
            tabItems(){
                return this.$store.state.tabItems;
            }
        },
        methods:{
            test(){
                console.log(this);
                console.log(this.$store.state.activeValue);
            }
        }


    }
</script>