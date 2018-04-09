import Vue from 'vue'
import Vuex from 'vuex'
import  {LEFT_MENU_MUTATION} from './mutation-types'
import axios  from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        user:{},
        tabItems:[],
      activeName:{},
      leftMenuData:[]
  },
  mutations: {
     increment(state,user){
          state.user = user;

      },
      incrementTabItems(state,tabItem){
          state.tabItems.push(tabItem[0]);

          state.activeName = tabItem[1];
          //debugger;
      },
      [LEFT_MENU_MUTATION](state,leftMenuData){
         state.leftMenuData = leftMenuData;
      }
  },
  actions: {
     increatLeftMenu({commit}){

         axios({
             method:'get',
             url:'/api',
             data:''
         }).then(function(rep){
             console.log(rep);
         });
         let datas = [
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
                             },{
                                 label:'投标保证金',
                                 children:[
                                     {
                                         label:'标书费用缴纳',
                                         isLeaf:true,
                                         name:'paymentBids'

                                     }
                                 ]
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
         ];
        commit('LEFT_MENU_MUTATION',datas)
     }
  }
})
