import Vue from "vue";
import Router from "vue-router";
import LoginPage from "./views/LoginPage";
import MainWrapper from "./views/components/MainWrapper";
import HomePage from "./views/HomePage";
import OfficePage from "./views/OfficePage";
import ApplicationPage from "./views/ApplicationPage";
import SystemUrlPage from "./views/SystemUrlPage";

import ProjectInfoWritePage from "./views/manageSystem/tenderManage/ProjectInfoWrite";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/",
      component: MainWrapper,
      children: [
        {
          path: "home",
          name: "homePage",
          component: HomePage
        },
        {
          path: "office",
          name: "officePage",
          component: OfficePage
        },
        {
          path: "application",
          name: "applicationPage",
          component: ApplicationPage
        },
        {
          path: "systemUrl",
          name: "systemUrlPage",
          component: SystemUrlPage
        },
        {
          path: "projectInfoWrite",
          name: "projectInfoWritePage",
          component: ProjectInfoWritePage
        }
      ]
    }
  ]
});
