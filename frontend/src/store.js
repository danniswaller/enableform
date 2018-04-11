import Vue from "vue";
import Vuex from "vuex";
import { LEFT_MENU_MUTATION } from "./mutation-types";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { name: "", password: "" },
    tabItems: [],
    activeName: {},
    leftMenuData: []
  },
  mutations: {
    increment(state, user) {
      state.user = user;
    },
    incrementTabItems(state, tabItem) {
      state.tabItems.push(tabItem[0]);

      state.activeName = tabItem[1];
      //debugger;
    },
    [LEFT_MENU_MUTATION](state, leftMenuData) {
      state.leftMenuData = leftMenuData;
    }
  },
  actions: {
    increatLeftMenu({ commit }) {
      axios({
        method: "get",
        url: "/api/user",
        data: this.$store.state.user.id
      }).then(function(rep) {
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
                },
                {
                  label: "投标保证金",
                  children: [
                    {
                      label: "标书费用缴纳",
                      isLeaf: true,
                      name: "paymentBids"
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
      commit("LEFT_MENU_MUTATION", datas);
    },
    incrementUser({ commit }, user) {
      // function loadUserDetail(resolve, reject) {
      //   let ms = new Date().getMilliseconds();
      //   let loadUserDetailSuccess = ms % 2 === 0;
      //   if (loadUserDetailSuccess) {
      //     resolve(ms);
      //   } else {
      //     reject(ms);
      //   }
      // }
      //
      // function loadOtherResource(resolve, reject) {
      //   let ms = new Date().getMilliseconds();
      //   let loadUserDetailSuccess = ms % 2 === 0;
      //   if (loadUserDetailSuccess) {
      //     resolve(ms);
      //   } else {
      //     reject(ms);
      //   }
      // }
      //
      // function userLogin(resolve, reject) {
      //   let ms = new Date().getMilliseconds();
      //   let loginSuccess = ms % 2 === 0;
      //   if (loginSuccess) {
      //     resolve(ms);
      //     // loadUserDetail(
      //     //   function() {
      //     //     loadOtherResource(
      //     //         function() {
      //     //           resolve(ms);
      //     //         },
      //     //         function() {
      //     //           reject(ms);
      //     //         }
      //     //     );
      //     //   },
      //     //   function() {
      //     //     reject(ms);
      //     //   }
      //     // );
      //   } else {
      //     reject(ms);
      //   }
      // }

      // let ms = 2;
      // new Promise((resolve, reject) => {
      //   // login
      //   alert("登录中");
      //
      //   let loginSuccess = ms % 2 === 0;
      //   if (loginSuccess) {
      //     let userId = 123;
      //     resolve(userId); // => this.success = true;
      //   } else {
      //     reject("error"); // => this.success = false;
      //   }
      // })
      //   // promise.then = function(callback){
      //   //   if(this.success){
      //   //       callback();
      //   //   }
      //   //   return this;
      //   // }
      //
      //   .then(userId => {
      //     // loadUserDetail
      //
      //     alert("获取到userId=" + userId);
      //     alert("加载用户基本信息");
      //     let loadUserDetailSuccess = ms % 2 === 0;
      //     if (loadUserDetailSuccess) {
      //       let userDetail = { fullname: "张聪" };
      //       return userDetail;
      //     }
      //   })
      //   .then(userDetail => {
      //     // loadOtherResource
      //
      //     alert("获取到userDetail.fullname=" + userDetail.fullname);
      //     alert("加载其他资源");
      //     let loadOtherResourceSuccess = ms % 2 === 0;
      //     if (loadOtherResourceSuccess) {
      //       let otherResource = { xxx: "456" };
      //       return otherResource;
      //     }
      //   })
      //   .then(otherResource => {
      //     alert("整个过程全部成功，跳转到HomePage");
      //   })
      //   .catch(error => {
      //       /*
      //       if(this.success===false){
      //       }
      //        */
      //
      //     console.log(error);
      //     alert("登录失败");
      //   });

      // .then(res=>{
      // alert("跳转到HomePage");
      // })
      //
      //     .catch(error=>{
      //   alert("登录失败");
      // });

      // 代码抽取有很多原因， 例如
      // 1. 这段代码太长(1000行)，这段代码做的什么事情不能里面明白，可以抽取出一个方法，用方法名来解释 gotoHomePageAfterLoginSuccess
      // 2. 这段代码可能是某个状态后的执行逻辑，可能不同用户针对这个状态，有不同的处理逻辑，需要在这里提供一个插入点（扩展点），以提供整个过程的复用能力

      // function redirectAfterLoginSuccess() {
      //   alert("跳转到HomePage");
      // }
      //
      // function redirectAfterLoginFailure() {
      //
      // }

      // A公司用户跳转到首页
      // userLogin(redirectAfterLoginSuccess, redirectAfterLoginFailure);

      // // B公司用户跳转到用户详情页面
      // userLogin(
      //     function(ms) {
      //       alert("跳转到UserDetailPage");
      //     },
      //     function(ms) {
      //       alert("登录失败2");
      //     }
      // );

      // new Promise((resolve, reject) => {
      //   console.log(123);
      //   let ms = new Date().getMilliseconds();
      //   if (ms % 2 === 0) {
      //     alert("成功1");
      //     // resolve(ms);
      //   } else {
      //     alert("失败1");
      //     // reject(ms);
      //   }
      // });
      // .then(ms=>{
      // alert("成功1");
      // }).catch(ms=>{
      //   alert("失败1");
      // });

      // let login = function() {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(function() {
      //       console.log("login");
      //       resolve({ userId: 123 });
      //     }, 1000);
      //   });
      // };
      //
      // let loadUserDetail = function(res) {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(function() {
      //       console.log(res);
      //       console.log("loadUserDetail");
      //       var test = undefined;
      //       test.do();
      //       resolve({ fullname: "张聪" });
      //       // reject("error123s");
      //     }, 1000);
      //   });
      // };
      //
      // let loadOtherResources = function(res) {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(function() {
      //       console.log(res);
      //       console.log("loadOtherResources");
      //       resolve({ fullname: "张聪" });
      //     }, 1000);
      //   });
      // };
      //
      // login()
      //   .then(loadUserDetail)
      //   .then(loadOtherResources)
      //     .catch(error=>{
      //         console.log(123,error);
      //     });

      // GET /api/user => list user
      // POST /api/user => create user
      // PUT /api/user/:userId => update user
      // DELETE /api/user/:userId => delete user
      // POST /api/user/login => user login
      // all request content type => application/json

      // POST request content type => application/form-url-content
      return axios({
        method: "post",
        url: '/api/user/login',
        data: user,
        // params:user
      }).then(function(rep) {
        if (rep.data.success) {
          commit("increment", { name: rep.data.name });
        }
        return rep;
        // resolve(rep);
      });
    }
  }
});
