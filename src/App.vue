<template>
  <div id="app">
    <el-container>
      <!-- 设置页码宽度 -->
      <div class="web-page-width">
        <!-- 设置页码最小高度 -->
        <div :style="height">
          <div>
            <el-header style="padding: 0px;">
              <!-- 导航栏 -->
              <v-header></v-header>
            </el-header>
          </div>
          <div>
            <el-main style="padding: 0px;">
              <!-- Body -->
              <router-view></router-view>
            </el-main>
          </div>
          <div>
            <el-footer style="padding: 0px;">
              <!-- 页脚 -->
              <v-footer></v-footer>
            </el-footer>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>


<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  data () {
    return {
      height: {
        width: '100%',
        height: '',
        backguound: '#ccc',
      }
    }
  },

  created () {
    this.hh()
  },

  components: {
    'v-header': Header,
    'v-footer': Footer,
  },

  methods: {
    hh () {
      this.height.height = window.innerHeight - 63 + 'px';
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
html,
body {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  /*height: 100%;*/
}
.background-image {
  background: url("");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
.web-page-width {
  margin-left: 0%;
  width: 100%;
}
</style>
