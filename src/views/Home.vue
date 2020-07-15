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
      <h1>光州程序猿欢迎你的到来！</h1>
    </div>

  </div>
</template>



<script>

export default {
  name: 'Home',
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