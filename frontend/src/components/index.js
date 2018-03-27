import Panel from './Panel';

const customComponents = [
  Panel
];

const install = function (Vue, opts = {}) {
  Vue.mixin({
    methods: {}
  });

  customComponents.map(component => {
    Vue.component(component.name, component);
  });

};

export default install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
  if (install.installed) {
    install.installed = false;
  }
}
