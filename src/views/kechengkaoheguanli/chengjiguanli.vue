/**
* 系统管理 用户管理
*/
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="aa">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成绩管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="aaa">
      <router-link :to="'/system/Dept'"  class="a" >
        <img src="static/img/课程考核管理/成绩管理/已审核成绩修改.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="b" >
        <img src="static/img/课程考核管理/成绩管理/录入学员成绩.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="c" >
        <img src="static/img/课程考核管理/成绩管理/录入毕业前补考成绩.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="d" >
        <img src="static/img/课程考核管理/成绩管理/录入补缓考成绩.png" class="image" height="150" width="150">
      </router-link>
    </div>
    <div class="aaa">
      <router-link :to="'/system/Dept'"  class="e" >
        <img src="static/img/课程考核管理/成绩管理/成绩参数设置.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="f" >
        <img src="static/img/课程考核管理/成绩管理/成绩审核.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="g" >
        <img src="static/img/课程考核管理/成绩管理/打印学元条形码.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="h" >
        <img src="static/img/课程考核管理/成绩管理/按条形码录入学员成绩.png" class="image" height="150" width="150">
      </router-link>
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
