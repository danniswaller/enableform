<template>
    <div class="home-page ef-h-full ef-flex ef-flex-col">
        <div class="ef-flex-1">
            <ef-panel class="ef-h-full" title="待办事项">
                <ef-table-Panel :colHeaders="colHeaders"></ef-table-Panel>
            </ef-panel>
        </div>
        <div class="ef-flex-1 ef-flex ef-mt-2">
            <ef-panel class="ef-flex-1" title="公司新闻">
                <div class="ef-flex-1/3 ef-items-center ef-justify-center">
                <div class="ef-px-4">新闻内容一</div>
                </div>
                <!--<ef-newsContent></ef-newsContent>-->
            </ef-panel>
            <ef-panel class="ef-flex-1 ef-ml-2" title="常用网址">
                <div>content</div>
            </ef-panel>
        </div>

    </div>
</template>

<script>
    import  EfTablePanel from '../components/tablePanel.vue'
    export default {
        name: "home-page",

        data() {
            return {   colHeaders:[{colName:'startTime',viewColName:'开始时间'},{colName:'PROC_INST_ID',viewColName:'流程实例Id'},{colName:'sn',viewColName:'单号'},{colName:'subject',viewColName:'主题'},{colName:'proc_node_name',viewColName:'流程节点名称'},{colName:'task_type',viewColName:'任务类型'},{colName:'arrivalTime',viewColName:'到达时间'},{colName:'proc_control',viewColName:'流程监控'},{colName:'approveTime',viewColName:'审批时间'}]};
        },
        methods: {},
        components: {EfTablePanel}
    };
</script>
