<template>
  <el-menu router
           :default-active="$route.path"
           class="el-menu-style"
           mode="horizontal">

    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <span slot="title"
            class="menu-font-size">Home</span>
    </el-menu-item>

    <el-submenu index="">
      <template slot="title">
        <i class="el-icon-notebook-1"></i>
        <span slot="title"
              class="menu-font-size">Java</span>
      </template>
      <el-menu-item index="/java/basis">Java Basis</el-menu-item>
      <el-menu-item index="/java/springboot">Spring Boot</el-menu-item>
      <el-menu-item index="/java/springcloud">Spring Cloud</el-menu-item>
    </el-submenu>

    <el-submenu index="/database">
      <template slot="title">
        <i class="el-icon-reading"></i>
        <span slot="title"
              class="menu-font-size">Database</span>
      </template>
      <el-menu-item index="/database/mysql">MySql</el-menu-item>
      <el-menu-item index="/database/sqlserver">SqlServer</el-menu-item>
      <el-menu-item index="/database/sybase">Sybase</el-menu-item>
    </el-submenu>

    <el-submenu index="/ui">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title"
              class="menu-font-size">UI</span>
      </template>
      <el-menu-item index="/ui/html">Html</el-menu-item>
      <el-menu-item index="/ui/vue">Vue</el-menu-item>
      <el-menu-item index="/ui/react">React</el-menu-item>
    </el-submenu>

    <el-submenu index="/nosql">
      <template slot="title">
        <i class="el-icon-notebook-2"></i>
        <span slot="title"
              class="menu-font-size">NoSql</span>
      </template>
      <el-menu-item index="/nosql/redis">Redis</el-menu-item>
      <el-menu-item index="/nosql/mongodb">MongoDB</el-menu-item>
      <el-menu-item index="/nosql/hbase">HBase</el-menu-item>
    </el-submenu>

    <el-submenu index="/download">
      <template slot="title">
        <i class="el-icon-download"></i>
        <span slot="title"
              class="menu-font-size">Download</span>
      </template>
      <el-menu-item index="/download/learnResource">Learning Resources</el-menu-item>
      <el-menu-item index="/download/developerTool">Developer Tools</el-menu-item>
    </el-submenu>

    <el-submenu index="language">
      <template slot="title">
        <i class="el-icon-s-tools"></i>
        <span slot="title">{{$t('nav.language.name')}}</span>
      </template>
      <el-menu-item @click="handleChangeLanguage('translateCn')">{{$t('nav.language.lang.cn')}}</el-menu-item>
      <el-menu-item @click="handleChangeLanguage('translateEn')">{{$t('nav.language.lang.en')}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


<script scoped>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },

  methods: {
    //切换多语言
    handleChangeLanguage (val) {
      this.$i18n.locale = val;
    },
  }
}
</script>

<style scoped>
.el-menu-style {
  background-color: #563d7c;
}
.menu-font-size {
  font-size: 16px;
}
</style>
