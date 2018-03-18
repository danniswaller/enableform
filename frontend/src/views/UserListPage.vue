<template>


    <div>
        <el-table
                :data="userList"
                style="width: 100%">
            <el-table-column
                    prop="username"
                    label="用户名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="createDate"
                    label="创建日期"
                    width="180">
            </el-table-column>
        </el-table>
        <test-component :text="testComponentText" @currentPageChanged="handleTestComponentPageChanged"/><br/>



        <div>父组件输入:{{testComponentText}}</div>
        <input v-model="testComponentText" type="text"/>
    </div>
</template>


<script>
    import TestComponent from './components/TestComponent';
    import {mapActions} from 'vuex';

    export default {
        name: 'user-list-page',
        components: {TestComponent},
        data() {
            return {
                testComponentText: null,
                columns: [
                    {
                        title: '用户名',
                        key: 'username'
                    },
                    {
                        title: '创建时间',
                        key: 'createDate'
                    },
                ],
                userList: []
            };
        },
        computed: {},
        mounted() {
            this.loadUserList();
            this.changeCurrentPage('user list page')
        },
        methods: {
            ...mapActions(['changeCurrentPage']),
            loadUserList() {
                $.get("/api/user/list", (data, status) => {
                    this.userList = data;
                });
            },
            handleTestComponentPageChanged(){
                console.log(arguments);
            }
        }
    };
</script>

<style>

</style>

