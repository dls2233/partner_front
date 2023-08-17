<script setup>
  import {ChatDotSquare,View,Pointer,ChatLineRound} from "@element-plus/icons-vue"
  import request from "@/utils/request";

  const load = () => {
    request.get('/user').then(res => {
      console.log(res.data)
    })
  }

  load()
</script>

<template>
  <div style="background-color: white; border-radius: 10px;" class="container-height">
    <div style="display: flex; padding: 10px">
      <!-- 话题动态 -->
      <div class="dynamic-box" style="width: 60%; padding: 20px; border: 1px solid #ccc">

        <div style="display: flex">
          <div style="width: 80px">
            <img style="width: 50px; height: 50px; margin-right: 20px; border-radius: 50%"
                 src="http://localhost:9090/file/download/0f023825e7a045c89b97dcb136a2c2b7.jpg?loginId=c6c9f990abb34fb3ad92f5d01774f9a3&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJjNmM5Zjk5MGFiYjM0ZmIzYWQ5MmY1ZDAxNzc0ZjlhMyIsInJuU3RyIjoia2ZyZjNoTUpNNFBtMzV4eWpWRURQcjk4SFkwVEI1U1oifQ.KZmQl1pFBUTz2M2Fg1TPQktrLLqBagphz9xCW2HarzU"
                 alt="">
          </div>
          <div style="flex: 1; line-height: 25px">
            <div style="font-weight: bold">大老师2233</div>
            <div style="font-size: 12px; color: #999">18分钟前发布</div>
          </div>
          <div style="width: 50px">
            <el-button>关注</el-button>
          </div>
        </div>

        <div style="" class="content">
          你说得对，2005年10月9日下午2:30，重庆市人民政府新闻办公室在重庆市新闻发布中心举行了新闻发布会。
          会议郑重 发布了“世界第一颗0.13微米工艺的TD-SCDMA 3G手机核心芯片在重庆诞生”这一令国人自豪和骄
          傲的重大喜 讯。重庆市人民政府新闻办和重庆邮电学院在此间联合宣布：具有我国自主知识产权的世界首枚“
          通芯一号”3G 手机核心芯片已由重庆重邮信科股份有限公司（简称重邮信科）研发成功，并向媒体人士展示
          亮相。这是世界上 第一枚0.13微米工艺的TD-SCDMA 3G手机基带芯片。它的诞生，标志着我国3G通信核心
          芯片等关键技术已达到了世界领先水平。实现了从“中国制造”到“中国创造”的跨越。
        </div>

        <div style="margin: 10px 0">
         <el-row :gutter="10">
           <el-col :span="12" style="margin-bottom: 10px">
             <img style="width: 100%" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XWH3SflBYrvohv4Ns8WLFgHaHg?w=181&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
           </el-col>
           <el-col :span="12">
             <img style="width: 100%" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XWH3SflBYrvohv4Ns8WLFgHaHg?w=181&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
           </el-col>
           <el-col :span="12">
              <img style="width: 100%" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XWH3SflBYrvohv4Ns8WLFgHaHg?w=181&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
           </el-col>
           <el-col :span="12">
              <img style="width: 100%" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XWH3SflBYrvohv4Ns8WLFgHaHg?w=181&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
           </el-col>
         </el-row>
        </div>

        <div style="margin: 10px 0; display: flex; line-height: 20px">
          <div style="width: 50%">
            <el-tag type="primary">#重庆邮电大学</el-tag>
            <el-tag type="danger" style="margin-left: 10px"><el-icon :size="14" style="top: 2px; position: relative"><ChatDotSquare /></el-icon>重庆</el-tag>
          </div>
          <div style="width: 50%; text-align: right; color: #999999; font-size: 14px">
            <el-icon><View /></el-icon>99
            <el-icon style="margin-left: 10px"><Pointer /></el-icon>99
            <el-icon style="margin-left: 10px"><ChatLineRound /></el-icon>99
          </div>
        </div>

      </div>

      <!-- 排行榜 -->
      <div style="width: 40%; height: 100px; padding: 10px; border: 1px solid #cccccc; margin-left: 10px">
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 只显示两行文本，多余的用省略号代替*/
.content {
  margin: 10px 0;
  line-height: 25px;
  text-align: justify;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>