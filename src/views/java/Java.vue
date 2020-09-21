<template>
  <div class="div-min-hegin">
    <div class="markdown-body md-style">
      <markdown />
    </div>
  </div>
</template>



<script>
// 引入 markdown 文件，引入后是一个组件，需要在 components 中注册
import markdown from './md/HelloWord.md'
// 代码高亮
import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'

export default {
  name: 'Java',
  components: { markdown },
  data () {
    return {
    };
  },

}
</script>


<style scoped>
.div-min-hegin {
  width: 70%;
  margin-left: 15%;
  min-height: 590px;
}
.md-style {
  text-align: left;
}
</style>