//error page, router rules
export default [
  {
    path: '*',
    name: 'page404',
    //懒加载
    component: (resolve) => require(['@/views/Page404'], resolve),
    meta: {
      title: '404页面不存在'
    }
  }
]