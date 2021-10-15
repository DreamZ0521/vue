// 导入组件
import Vue from 'vue';
import Router from 'vue-router';

// 登录
import login from '@/views/login';
// 首页
import index from '@/views/index';
/**
 * 基础菜单
 */
// 商品管理
import Goods from '@/views/goods/Goods';
// 机器信息管理
import Machine from '@/views/machine/Machine';
// 货道信息管理
import MachineAisle from '@/views/machine/MachineAisle';
/**
 * 订单管理
 */
// 交易订单
import Order from '@/views/pay/Order';
/**
 * 系统管理
 */
// 用户管理
import user from '@/views/system/user';
// 用户管理
import rencaipeiyangfangan from '@/views/system/rencaipeiyangfangan';
//专业管理
import user5 from '@/views/system/zhuanyeguanli.vue';
// 菜单管理
import Module from '@/views/system/Module';
// 角色管理
import Role from '@/views/system/Role';
// 公司管理
import Dept from '@/views/system/Dept';
// 系统环境变量
import Variable from '@/views/system/Variable';
// 权限管理
import Permission from '@/views/system/Permission';
/**
 * 支付管理
 */
// 支付配置信息
import xuejiguanli from '@/views/machine/xuejiguanli';
// 支付配置
import biyeguanli from '@/views/pay/biyeguanli';
/**
 * 数据监控
 */
// 监控查询
import druidLogin from '@/views/druid/login';

// 图表界面
import statistics from '@/views/charts/statistics';
import kechengkaoheshishijihuaguanli from '@/views/kechengkaoheguanli/kechengkaoheshishijihuaguanli';
//考试计划管理
import kaoshijihuaguanli from '@/views/kechengkaoheguanli/kaoshijihuaguanli';

import shijuanheshitiguanli from '@/views/kechengkaoheguanli/shijuanheshitiguanli';

import tikuhezaixiankaoshiguanli from '@/views/kechengkaoheguanli/tikuhezaixiankaoshiguanli';

import chengjiguanli from '@/views/kechengkaoheguanli/chengjiguanli';

import chengjidayin from '@/views/kechengkaoheguanli/chengjidayin';

import chengjifenxi from '@/views/kechengkaoheguanli/chengjifenxi';

import zhibiaotixi from '@/views/pingjiaoguanli/zhibiaotixi';

import xueyuanpingjiao from '@/views/pingjiaoguanli/xueyuanpingjiao';

import dudaopingjiao from '@/views/pingjiaoguanli/dudaopingjiao';

import ketangjiaoxuezhilianghuizong from '@/views/pingjiaoguanli/ketangjiaoxuezhilianghuizong';


import renyuanguanli from '@/views/jiaoxueyunxingshujuguanli/renyuanguanli';

import yixianshuju from '@/views/jiaoxueyunxingshujuguanli/yixianshuju';

import jiaoxuejichushuju from '@/views/jiaoxueyunxingshujuguanli/jiaoxuejichushuju';

import ketijibenshezhi from '@/views/jiaoxueketijichengguoguanli/ketijibenshezhi';

import ketihuodongguanli from '@/views/jiaoxueketijichengguoguanli/ketihuodongguanli';

import ketichaxun from '@/views/jiaoxueketijichengguoguanli/ketichaxun';

import ketipingshen from '@/views/jiaoxueketijichengguoguanli/ketipingshen';

import yzxx from '@/views/youzhikexinxiguanli/yzxx';

import fgnxq from '@/views/qiyufeigongnengxuqiu/fgnxq';


import jiaoxuerenwuguanli from '@/views/shixunguanli/jiaoxuerenwuguanli';

import paikeguanli from '@/views/shixunguanli/paikeguanli';

import kebiaochaxun from '@/views/shixunguanli/kebiaochaxun';

import changdishiyongguanli from '@/views/shixunguanli/changdishiyongguanli';

import keshiliangguanli from '@/views/shixunguanli/keshiliangguanli';

import xuankeguanli from '@/views/shixunguanli/xuankeguanli';

import tj from '@/views/system/Dept';

import shixunzhuanyerenwu from '@/views/shixunzhuanyerenwu/shixunzhuanyerenwu';
import shixunone from '@/views/shixunzhuanyerenwu/shixunone';

import niandukaishezhuanye from '@/views/niandukaishezhuanye/niandu';

import one from '@/views/niandukaishezhuanye/one';


import zhuanyebanci from '@/views/zhuanyebanciyilanbiao/zhuanyebanci';

import zhuanyebancione from '@/views/zhuanyebanciyilanbiao/zhuanyebancione';

// 启用路由
Vue.use( Router);


// 导出路由
export default new Router({
    routes: [{
        path: '/',
        name: '',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
        path: '/login',
        name: '登录',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
        path: '/index',
        name: '首页',
        component: index,
        iconCls: 'el-icon-tickets',
        children: [{
            path: '/goods/Goods',
            name: '教学绩效信息管理',
            component: Goods,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/machine/Machine',
            name: '机器信息管理',
            component: Machine,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/machine/MachineAisle',
            name: '货道信息管理',
            component: MachineAisle,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/pay/Order',
            name: '公共考试信息管理',
            component: Order,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/zhuanyeguanli.vue',
            name: '专业管理',
            component: user5,
            meta: {
                requireAuth: true
            }
        }, {
          path: '/system/rencaipeiyangfangan',
          name: '人才培养方案管理',
          component: rencaipeiyangfangan,
          meta: {
            requireAuth: true
          }
        }, {
            path: '/system/Module',
            name: '课程库管理',
            component: Module,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Role',
            name: '教材库管理',
            component: Role,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Dept',
            name: '学期院历管理',
            component: Dept,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Variable',
            name: '系统环境变量',
            component: Variable,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Permission',
            name: '权限管理',
            component: Permission,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/machine/xuejiguanli',
            name: '学籍管理',
            component: xuejiguanli,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/pay/biyeguanli',
            name: '毕业管理（设置本科和研究生对应页面）',
            component: biyeguanli,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/druid/login',
            name: '监控查询',
            component: druidLogin,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/charts/statistics',
            name: '师资基础信息',
            component: statistics,
            meta: {
                requireAuth: true
            }
        }, {
          path: '/kechengkaoheguanli/kechengkaoheshishijihuaguanli',
          name: '课程考核管理',
          component: kechengkaoheshishijihuaguanli,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/kechengkaoheguanli/kaoshijihuaguanli',
          name: '考试计划管理',
          component: kaoshijihuaguanli,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/kechengkaoheguanli/shijuanheshitiguanli',
          name: '试卷和试题管理',
          component: shijuanheshitiguanli,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/kechengkaoheguanli/tikuhezaixiankaoshiguanli',
          name: '题库和在线考试管理',
          component: tikuhezaixiankaoshiguanli,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/kechengkaoheguanli/chengjiguanli',
          name: '成绩管理',
          component: chengjiguanli,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/kechengkaoheguanli/chengjidayin',
          name: '成绩打印',
          component: chengjidayin,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/kechengkaoheguanli/chengjifenxi',
          name: '成绩分析',
          component: chengjifenxi,
          meta: {
            requireAuth: true
          }
        }, {
            path: '/pingjiaoguanli/zhibiaotixi',
            name: '指标体系',
            component: zhibiaotixi,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/pingjiaoguanli/xueyuanpingjiao',
            name: '学员评教',
            component: xueyuanpingjiao,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/pingjiaoguanli/dudaopingjiao',
            name: '督导评教',
            component: dudaopingjiao,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/pingjiaoguanli/ketangjiaoxuezhilianghuizong',
            name: '课堂教学质量评价汇总',
            component: ketangjiaoxuezhilianghuizong,
            meta: {
              requireAuth: true
            }
          }
          , {
            path: '/jiaoxueyunxingshujuguanli/renyuanguanli',
            name: '人员指标管理',
            component: renyuanguanli,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/jiaoxueyunxingshujuguanli/yixianshuju',
            name: '一线数据',
            component: yixianshuju,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/jiaoxueyunxingshujuguanli/jiaoxuejichushuju',
            name: '教学基础数据',
            component: jiaoxuejichushuju,
            meta: {
              requireAuth: true
            }
          }

          , {
            path: '/jiaoxueketijichengguoguanli/ketijibenshezhi',
            name: '课题基本设置',
            component: ketijibenshezhi,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/jiaoxueketijichengguoguanli/ketihuodongguanli',
            name: '课题活动管理',
            component: ketihuodongguanli,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/jiaoxueketijichengguoguanli/ketichaxun',
            name: '课题查询',
            component: ketichaxun,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/jiaoxueketijichengguoguanli/ketipingshen',
            name: '课题评审',
            component: ketipingshen,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/youzhikexinxiguanli/yzxx',
            name: '优质课信息管理',
            component: yzxx,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/qiyufeigongnengxuqiu/fgnxq',
            name: '其余非功能需求',
            component: fgnxq,
            meta: {
              requireAuth: true
            }
          }

          , {
            path: '/shixunguanli/jiaoxuerenwuguanli',
            name: '教学任务管理',
            component: jiaoxuerenwuguanli,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/shixunguanli/paikeguanli',
            name: '排课管理',
            component: paikeguanli,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/shixunguanli/kebiaochaxun',
            name: '课表查询',
            component: kebiaochaxun,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/shixunguanli/changdishiyongguanli',
            name: '场地使用管理',
            component: changdishiyongguanli,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/shixunguanli/keshiliangguanli',
            name: '课时量管理',
            component: keshiliangguanli,
            meta: {
              requireAuth: true
            }
          }, {
            path: '/shixunguanli/xuankeguanli',
            name: '选课管理',
            component: xuankeguanli,
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/system/Dept/',
            name: '二级承训专业任务的页面',
            component: tj,
            meta: {
              requireAuth: true
            }
          },{
            path: '/shixunzhuanyerenwu/shixunzhuanyerenwu',
            name: '施训专业任务',
            component: shixunzhuanyerenwu,
            meta: {
              requireAuth: true
            }
          },{
            path: '/shixunzhuanyerenwu/shixunone',
            name: '施训专业任务',
            component: shixunone,
            meta: {
              requireAuth: true
            }
          },{
            path: '/niandukaishezhuanye/niandu/',
            name: '年度',
            component: niandukaishezhuanye,
            meta: {
              requireAuth: true
            }
          },{
            path: '/niandukaishezhuanye/one/',
            name: '年度',
            component: one,
            meta: {
              requireAuth: true
            }
          }

          ,{
            path: '/zhuanyebanciyilanbiao/zhuanyebanci',
            name: '专业班次一览表',
            component: zhuanyebanci,
            meta: {
              requireAuth: true
            }
          },{
            path: '/zhuanyebanciyilanbiao/zhuanyebancione',
            name: '专业班次一览表',
            component: zhuanyebancione,
            meta: {
              requireAuth: true
            }
          }
        ]
    }]
})

