/**
 * 系统管理 用户管理
*/
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="aa">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>专业管理</el-breadcrumb-item>
    </el-breadcrumb>
<div class="aaa">
    <router-link :to="'/niandukaishezhuanye/one'"  class="a" >
      <img src="static/img/计划管理/专业管理/年度开设专业.png" class="image" height="150" width="150">
    </router-link>

    <router-link :to="'/shixunzhuanyerenwu/shixunone'" class="b" >
    <img src="static/img/计划管理/专业管理/承训专业任务.png " class="image" height="150" width="150">
  </router-link>

    <router-link :to="'/zhuanyebanciyilanbiao/zhuanyebancione'" class="c" >
      <img src="static/img/计划管理/专业管理/专业班次一览表.png " class="image" height="150" width="150">
    </router-link>

<!--    <router-link :to="'/system/Dept'" class="d" >-->
<!--      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" height="150" width="150">-->
<!--    </router-link>-->
  </div>
    <div class="aaa">
<!--      <router-link :to="'/system/Dept'"  class="e" >-->
<!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" height="150" width="150">-->
<!--      </router-link>-->

<!--      <router-link :to="'/system/Dept'" class="f" >-->
<!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" height="150" width="150">-->
<!--      </router-link>-->

<!--      <router-link :to="'/system/Dept'" class="g" >-->
<!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" height="150" width="150">-->
<!--      </router-link>-->

<!--      <router-link :to="'/system/Dept'" class="h" >-->
<!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" height="150" width="150">-->
<!--      </router-link>-->
    </div>


  </div>
</template>
      <style>
           .aaa{
             margin-bottom: 50px;
           }
        .aa{
          margin-bottom: 30px;
        }
        .a{

          margin-left: 380px;
        }
        .b{
          margin-left: 60px;
        }
        .c{
          margin-left: 60px;
        }
        .d{
          margin-left: 60px;
        }
           .e{

             margin-left: 380px;
           }
           .f{
             margin-left: 60px;
           }
           .g{
             margin-left: 60px;
           }
           .h{
             margin-left: 60px;
           }

      </style>


    <script>


    </script>
