/**
* 左边菜单
*/
<template>
  <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b">
    <div class="logobox">
      <img class="logoimg" src="../assets/img/logo.png" alt="">
    </div>
    <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
      <template slot="title">
        <i class="iconfont" :class="menu.icon"></i>
        <span>{{menu.menuname}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="chmenu in menu.menus" :index="'/'+chmenu.url" :key="chmenu.menuid">
          <i class="iconfont" :class="chmenu.icon"></i>
          <span>{{chmenu.menuname}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
import { menu } from '../api/userMG'
export default {
  name: 'leftnav',
  data() {
    return {
      collapsed: false,
      allmenu: []
    }
  },
  // 创建完毕状态(里面是操作)
  created() {
    // 获取图形验证码
    let res = {
      success: true,
      data: [
        {
          menuid: 1,
          icon: 'li-icon-xiangmuguanli',
          menuname: '教学绩效信息管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 2,
              icon: 'icon-cat-skuQuery',
              menuname: '教学绩效信息管理',
              hasThird: 'N',
              url: 'goods/Goods',
              menus: null
            }
          ]
        },
        {
          menuid: 33,
          icon: 'li-icon-dingdanguanli',
          menuname: '公共考试信息管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 34,
              icon: 'icon-order-manage',
              menuname: '公共考试信息管理',
              hasThird: 'N',
              url: 'pay/Order',
              menus: null
            }
          ]
        },
        {
          menuid: 71,
          icon: 'li-icon-xitongguanli',
          menuname: '计划管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 72,
              icon: 'icon-cus-manage',
              menuname: '专业管理',
              hasThird: 'N',
              url: 'system/zhuanyeguanli.vue',
              menus: null
            },
            {
              menuid: 72,
              icon: 'icon-cus-manage',
              menuname: '人才培养方案管理',
              hasThird: 'N',
              url: 'system/rencaipeiyangfangan',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '课程库管理',
              hasThird: 'N',
              url: 'system/Module',
              menus: null
            },
            {
              menuid: 73,
              icon: 'icon-news-manage',
              menuname: '教材库管理',
              hasThird: 'N',
              url: 'system/Role',
              menus: null
            },
            {
              menuid: 74,
              icon: 'icon-cs-manage',
              menuname: '学期院历管理',
              hasThird: 'N',
              url: 'system/Dept',
              menus: null
             }
             //,
            // {
            //   menuid: 75,
            //   icon: 'icon-promotion-manage',
            //   menuname: '系统环境变量',
            //   hasThird: 'N',
            //   url: 'system/Variable',
            //   menus: null
            // },
            // {
            //   menuid: 76,
            //   icon: 'icon-cms-manage',
            //   menuname: '权限管理',
            //   hasThird: 'N',
            //   url: 'system/Permission',
            //   menus: null
            // }
          ]
        },
        {
          menuid: 128,
          icon: 'li-icon-shangchengxitongtubiaozitihuayuanwenjian91',
          menuname: '学员管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 129,
              icon: 'icon-provider-manage',
              menuname: '学籍管理',
              hasThird: 'N',
              url: 'machine/xuejiguanli',
              menus: null
            },
            {
              menuid: 175,
              icon: 'icon-provider-manage',
              menuname: '毕业管理（设置本科和研究生对应页面）',
              hasThird: 'N',
              url: 'pay/biyeguanli',
              menus: null
            }
          ]
        },
        {
          menuid: 150,
          icon: 'li-icon-shangchengxitongtubiaozitihuayuanwenjian91',
          menuname: '师资管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 159,
              icon: 'icon-provider-manage',
              menuname: '师资基础信息',
              hasThird: 'N',
              url: 'charts/statistics',
              menus: null
            }
          ]
        }

        ,
        {
          menuid: 99,
          icon: 'li-icon-xitongguanli',
          menuname: '施训管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 71,
              icon: 'li-icon-xitongguanli',
              menuname: '教学任务管理',
              hasThird: 'N',
              url: 'shixunguanli/jiaoxuerenwuguanli',
              menus: null
            },
            {
              menuid: 72,
              icon: 'icon-cus-manage',
              menuname: '排课管理',
              hasThird: 'N',
              url: 'shixunguanli/paikeguanli',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '课表查询',
              hasThird: 'N',
              url: 'shixunguanli/kebiaochaxun',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '场地使用管理',
              hasThird: 'N',
              url: 'shixunguanli/changdishiyongguanli',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '课时量管理',
              hasThird: 'N',
              url: 'shixunguanli/keshiliangguanli',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '选课管理',
              hasThird: 'N',
              url: 'shixunguanli/xuankeguanli',
              menus: null
            }
          ]
        }

        ,
        {
          menuid: 71,
          icon: 'li-icon-xitongguanli',
          menuname: '课程考核管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 99,
              icon: 'icon-cus-manage',
              menuname: '课程考核实施计划管理',
              hasThird: 'N',
              url: 'kechengkaoheguanli/kechengkaoheshishijihuaguanli',
              menus: null
            },
            {
              menuid: 20,
              icon: 'icon-cus-manage',
              menuname: '考试计划管理',
              hasThird: 'N',
              url: 'kechengkaoheguanli/kaoshijihuaguanli',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '试卷和试题管理',
              hasThird: 'N',
              url: 'kechengkaoheguanli/shijuanheshitiguanli',
              menus: null
            },
            {
              menuid: 73,
              icon: 'icon-news-manage',
              menuname: '题库和在线考试管理',
              hasThird: 'N',
              url: 'kechengkaoheguanli/tikuhezaixiankaoshiguanli',
              menus: null
            },
            {
              menuid: 74,
              icon: 'icon-cs-manage',
              menuname: '成绩管理',
              hasThird: 'N',
              url: 'kechengkaoheguanli/chengjiguanli',
              menus: null
            }
            ,
            {
              menuid: 74,
              icon: 'icon-cs-manage',
              menuname: '成绩打印',
              hasThird: 'N',
              url: 'kechengkaoheguanli/chengjidayin',
              menus: null
            } ,
            {
              menuid: 75,
              icon: 'icon-cs-manage',
              menuname: '成绩分析',
              hasThird: 'N',
              url: 'kechengkaoheguanli/chengjifenxi',
              menus: null
            }
            ,
            {
              menuid: 75,
              icon: 'icon-promotion-manage',
              menuname: '系统环境变量',
              hasThird: 'N',
              url: 'system/Variable',
              menus: null
            },
            {
              menuid: 76,
              icon: 'icon-cms-manage',
              menuname: '权限管理',
              hasThird: 'N',
              url: 'system/Permission',
              menus: null
            }
          ]
        },
        {
          menuid: 99,
          icon: 'li-icon-xitongguanli',
          menuname: '评教管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 71,
              icon: 'li-icon-xitongguanli',
              menuname: '指标体系',
              hasThird: 'N',
              url: 'pingjiaoguanli/zhibiaotixi',
              menus: null
            },
            {
              menuid: 72,
              icon: 'icon-cus-manage',
              menuname: '学员评教',
              hasThird: 'N',
              url: 'pingjiaoguanli/xueyuanpingjiao',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '督导评教',
              hasThird: 'N',
              url: 'pingjiaoguanli/dudaopingjiao',
              menus: null
            },
            {
              menuid: 73,
              icon: 'icon-cms-manage',
              menuname: '课堂教学质量评价汇总',
              hasThird: 'N',
              url: 'pingjiaoguanli/ketangjiaoxuezhilianghuizong',
              menus: null
            }
            //,
            // {
            //   menuid: 75,
            //   icon: 'icon-promotion-manage',
            //   menuname: '系统环境变量',
            //   hasThird: 'N',
            //   url: 'system/Variable',
            //   menus: null
            // },
            // {
            //   menuid: 76,
            //   icon: 'icon-cms-manage',
            //   menuname: '权限管理',
            //   hasThird: 'N',
            //   url: 'system/Permission',
            //   menus: null
            // }
          ]
        },
        {
          menuid: 99,
          icon: 'li-icon-xitongguanli',
          menuname: '教学运行数据管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 71,
              icon: 'li-icon-xitongguanli',
              menuname: '人员指标管理',
              hasThird: 'N',
              url: 'jiaoxueyunxingshujuguanli/renyuanguanli',
              menus: null
            },
            {
              menuid: 72,
              icon: 'icon-cus-manage',
              menuname: '一线数据',
              hasThird: 'N',
              url: 'jiaoxueyunxingshujuguanli/yixianshuju',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '教学基础数据',
              hasThird: 'N',
              url: 'jiaoxueyunxingshujuguanli/jiaoxuejichushuju',
              menus: null
            }
          ]
        },
        {
          menuid: 99,
          icon: 'li-icon-xitongguanli',
          menuname: '教学课题及成果管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 71,
              icon: 'li-icon-xitongguanli',
              menuname: '课题基本设置',
              hasThird: 'N',
              url: 'jiaoxueketijichengguoguanli/ketijibenshezhi',
              menus: null
            },
            {
              menuid: 72,
              icon: 'icon-cus-manage',
              menuname: '课题活动管理',
              hasThird: 'N',
              url: 'jiaoxueketijichengguoguanli/ketihuodongguanli',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '课题查询',
              hasThird: 'N',
              url: 'jiaoxueketijichengguoguanli/ketichaxun',
              menus: null
            },
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '课题评审',
              hasThird: 'N',
              url: 'jiaoxueketijichengguoguanli/ketipingshen',
              menus: null
            }
          ]
        },
        {
          menuid: 99,
          icon: 'li-icon-xitongguanli',
          menuname: '优质课信息管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '优质课信息管理',
              hasThird: 'N',
              url: 'youzhikexinxiguanli/yzxx',
              menus: null
            }
          ]
        },
        {
          menuid: 33,
          icon: 'li-icon-dingdanguanli',
          menuname: '其余非功能需求',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 34,
              icon: 'icon-order-manage',
              menuname: '其余非功能需求',
              hasThird: 'N',
              url: 'qiyufeigongnengxuqiu/fgnxq',
              menus: null
            }
          ]
        }
      ],
      msg: 'success'
    }
          this.allmenu = res.data

    // menu(localStorage.getItem('logintoken'))
    //   .then(res => {
    //     console.log(JSON.stringify(res))
    //     if (res.success) {
    //       this.allmenu = res.data
    //     } else {
    //       this.$message.error(res.msg)
    //       return false
    //     }
    //   })
    //   .catch(err => {
    //     this.$message.error('菜单加载失败，请稍后再试！')
    //   })
    // 监听
    this.$root.Bus.$on('toggle', value => {
      this.collapsed = !value
    })
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
  text-align: left;
}
.el-menu-item-group__title {
  padding: 0px;
}
.el-menu-bg {
  background-color: #1f2d3d !important;
}
.el-menu {
  border: none;
}
.logobox {
  height: 40px;
  line-height: 40px;
  color: #9d9d9d;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
}
.logoimg {
  height: 40px;
}
</style>
