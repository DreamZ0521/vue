/**
* 系统管理 用户管理
*/
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="aa">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学籍管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="aaa">
      <router-link :to="'/system/Dept'"  class="a" >
        <img src="static/img/学员管理/学籍管理/历史学员名册查询.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="b" >
        <img src="static/img/学员管理/学籍管理/学籍异动信息管理.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="c" >
        <img src="static/img/学员管理/学籍管理/学院处分信息管理.png" class="image" height="150" width="150">
      </router-link>

      <router-link :to="'/system/Dept'" class="d" >
        <img src="static/img/学员管理/学籍管理/学院花名册.png" class="image" height="150" width="150">
      </router-link>
    </div>
    <div class="aaa">
      <router-link :to="'/system/Dept'"  class="e" >
        <img src="static/img/学员管理/学籍管理/审核学院奖励信息.png" class="image" height="150" width="150">
      </router-link>
      <router-link :to="'/system/Dept'"  class="f" >
        <img src="static/img/学员管理/学籍管理/导入学籍注册号.png" class="image" height="150" width="150">
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
