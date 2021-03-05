import Vue from 'vue'
import VueRouter from 'vue-router'

const Class = () => import('views/Class.vue')
const Practical = () => import('views/Practical.vue')

const Interaction = () => import('../views/ClassChildren/ClassContentChildren/Interaction.vue')
const Homework = () => import('views/ClassChildren/ClassContentChildren/Homework.vue')
const Test = () => import('views/ClassChildren/ClassContentChildren/Test.vue')
const Experiment = () => import('views/ClassChildren/ClassContentChildren/Experiment.vue')
const Course = () => import('views/ClassChildren/ClassContentChildren/Course.vue')

Vue.use(VueRouter)

const routes = [  
  {
    path: '/class',
    component: Class,
    name: "课堂",
    children: [
      {
        path: '/class/interaction',
        component: Interaction,
        name: "课堂互动",
      },
      {
        path: '/class/homework',
        component: Homework,
        name: "作业",
      },
      {
        path: '/class/test',
        component: Test,
        name: '测试',
      },
      {
        path: '/class/experiment',
        component: Experiment,
        name: '实验',
      },
      {
        path: '/class/course',
        component: Course,
        name: '课程大纲',
      }
    ]
  },
  {
    path: '/practical',
    component: Practical,
    name: "实训案例库"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
