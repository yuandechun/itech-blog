import Vue from 'vue'
import VueI18n from 'vue-i18n'
//引入各个语言配置文件
import translateCn from './translate-cn'
import translateEn from './translate-en'

Vue.use(VueI18n)

//创建vue-i18n实例
const i18n = new VueI18n({
  //设置默认语言
  locale: localStorage.getItem('locale') || 'translateCn',
  //添加多语言
  messages: {
    translateCn,
    translateEn
  }
})

//暴露i18n
export default i18n;