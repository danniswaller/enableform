<template>
    <div class="block">
        <el-carousel height="180px">
            <el-carousel-item v-for="item in newsData" :key="item.content">
                <h3>{{ item.content }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default{
          name:'ef-newsContent',
          data(){
              return {
                   newsData : [{content:"第一个页面"},{content:"第二个页面"},{content:"第三个页面"}]
              }

          }
    }
</script>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
