import Home from '@/views/Home'
import Java from '@/views/Java'
import SpringBoot from '@/views/SpringBoot'
import SpringCloud from '@/views/SpringCloud'
import MySql from '@/views/MySql'
import SqlServer from '@/views/SqlServer'
import Vue from '@/views/Vue'
import Redis from '@/views/Redis'



//home page, router rules
export default [
  {
    path: '*',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/java/basis',
    name: 'java',
    component: Java,
    meta: {
      title: 'Java基础'
    }
  },
  {
    path: '/java/springboot',
    name: 'springboot',
    component: SpringBoot,
    meta: {
      title: 'SpringBoot学习'
    }
  },
  {
    path: '/java/springcloud',
    name: 'springcloud',
    component: SpringCloud,
    meta: {
      title: 'SpringBoot学习'
    }
  },
  {
    path: '/database/mysql',
    name: 'mysql',
    component: MySql,
    meta: {
      title: 'MySql学习'
    }
  },
  {
    path: '/database/sqlserver',
    name: 'sqlserver',
    component: SqlServer,
    meta: {
      title: 'SqlServer学习'
    }
  },
  {
    path: '/ui/vue',
    name: 'vue',
    component: Vue,
    meta: {
      title: 'Vue学习'
    }
  },
  {
    path: '/nosql/redis',
    name: 'redis',
    component: Redis,
    meta: {
      title: 'Redis学习'
    }
  }
]