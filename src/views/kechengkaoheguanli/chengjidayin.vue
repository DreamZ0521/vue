/**
* 系统管理 用户管理
*/
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="aa">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成绩打印</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="aaa">
      <router-link :to="'/system/Dept'"  class="a" >
        <img src="static/img/课程考核管理/成绩打印/按专业班次打印学员成绩单.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="b" >
        <img src="static/img/课程考核管理/成绩打印/按专业班次打印课程成绩单.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="c" >
        <img src="static/img/课程考核管理/成绩打印/按学号打印学员成绩单.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="d" >
        <img src="static/img/课程考核管理/成绩打印/按课程打印成绩单.png" class="image" height="150" width="150">
      </router-link>
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
