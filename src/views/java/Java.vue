<template>
  <div class="div-min-hegin">
    <div>
      <el-carousel :interval="5000"
                   arrow="always">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="div-margin-top">
      <h1>Java基础学习</h1>
      <div class="markdown-body">
        <markdown />
      </div>
    </div>

  </div>
</template>



<script>
// 引入 markdown 文件，引入后是一个组件，需要在 components 中注册
import markdown from './md/test.md'
// 代码高亮
import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'

export default {
  name: 'Home',
  components: { markdown },
  data () {
    return {
    };
  },

}
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.div-margin-top {
  margin-top: 3%;
}
.div-min-hegin {
  min-height: 590px;
}
</style>