import Vue from 'vue';
import store from './store'


Vue.directive('permission', {
  inserted: function (el, binding) {
    if (!permission(binding.value)) {
      el.parentNode.removeChild(el);
    }

    function permission (value) {
      // 此处store.getters.getMenuBtnList代表vuex中储存的按钮菜单数据
      let list = store.getters.getMenuBtnList;
      for (let item of list) {
        if (item.permission === value) {
          return true;
        }
      }
      return false;
    }
  }
});
