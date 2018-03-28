<template>
    <el-table
            :data = 'workFlowTodoStore'
            height="250"
            border
            style="width: 100%"
            :row-class-name="rowClassName"
    >

        <el-table-column
                :prop="colHeader.colName"
                :label="colHeader.viewColName"
                width="180"
                header-align="center"
                align ='center'
                v-for="colHeader in colHeaders"
        >
        </el-table-column>



    </el-table>
</template>

<script>
    export  default{
        name:"ef-tablePanel",
      data(){
          return {
                workFlowTodoStore:[{startTime:'2018-03-28',PROC_INST_ID:'12321321',sn:'XMXX001',subject:'四川邮科一期项目',proc_node_name:'财务主管',task_type:'普通',arrivalTime:'2018-03-27',proc_control:'流程监控',approveTime:''}
                ,{startTime:'2018-03-28',PROC_INST_ID:'12321331',sn:'XMXX002',subject:'四川邮科二期项目',proc_node_name:'项目主管',task_type:'普通',arrivalTime:'2018-03-27',proc_control:'流程监控',approveTime:'2018-03-28',}
                ],

          }
      },

     props:{colHeaders:Array},
        methods:{
            rowClassName({row,rowIndex}){
                 if(row.approveTime){
                 return  'success-row'
                 }else{
                 return 'warning-row'
                 }
               // console.log(row);
            }
        }

    }

</script>
<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>