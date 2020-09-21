import Home from '@/views/Home'
import Java from '@/views/java/Java'
import SpringBoot from '@/views/springboot/SpringBoot'
import SpringCloud from '@/views/springcloud/SpringCloud'
import MySql from '@/views/mysql/MySql'
import SqlServer from '@/views/sqlserver/SqlServer'
import Vue from '@/views/vue/Vue'
import Redis from '@/views/redis/Redis'
import ShowMD from '@/views/ShowMD'



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
    path: '/showmd',
    name: 'showmd',
    component: ShowMD,
    meta: {
      title: 'MD'
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