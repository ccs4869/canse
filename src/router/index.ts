import { createRouter,createWebHistory,Router,RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/pages/Home/index.vue'),
    meta: {
      status: true
    }
  },
  {
    path: '/home',
    redirect: '/',
    meta: {
      status: true
    }
  },
  {
    path: '/talks',
    component: () => import("@/pages/Talks/index.vue"),
    meta: {
      status: true
    }
  },
  {
    path: '/scheduler',
    component: () => import('@/pages/Scheduler/index.vue'),
    meta: {
      status: true
    }
  },
  {
    path: '/project',
    component: () => import('@/pages/Project/index.vue'),
    meta: {
      status: true
    }
  },
  {
    path: '/demos',
    component: () => import('@/pages/Demos/index.vue'),
    meta: {
      status: true
    },
    children: [
      {
        path: 'minesweeper',
        component: () => import('@/pages/Demos/Minesweeper/index.vue'),
        meta: {
          status: false
        }
      }
    ]
  },
  {
    path: '/essay',
    component: () => import('@/pages/Essay/index.vue'),
    meta: {
      status: true
    }
  },
  {
    path: '/pub',
    component: () => import('@/pages/Pub/index.vue'),
    meta: {
      status:true
    }
  },
  {
    path: '/note',
    component: () => import('@/pages/Note/index.vue'),
    meta: {
      status: true
    }
  },
  {
    path: '/user',
    component: () => import('@/pages/Essay/User/index.vue'),
    meta: {
      status: false
    },
    children: [
      {
        path: '/user',
        redirect: '/user/todo'
      },
      {
        path: 'todo',
        component: () => import('@/pages/Todo/index.vue')
      },
      {
        path: 'message',
        component: () => import('@/pages/Message/index.vue')
      },
      {
        path: 'data',
        component: () => import('@/pages/Data/index.vue')
      }
    ]
  },
  {
    path: '/like',
    component: () => import('@/pages/Like/index.vue'),
    meta: {
      status: true
    }
  },
  {
    path: '/msgBoard',
    component: () => import('@/pages/MsgBoard/index.vue'),
    meta: {
      status: true
    }
  },
  {
    path: '/zdf',
    component: () => import('@/pages/Zdf/index.vue'),
    meta: {
      status: true
    },
    children: [
      {
        path: 'calendar',
        component: () => import('@/pages/Calendar/index.vue')
      },
      {
        path: 'chat',
        component: () => import('@/pages/Chat/index.vue')
      },
      {
        path: 'timeline',
        component: () => import('@/pages/Timeline/index.vue')
      }
    ]
  },
  {
    path: '/err',
    component: () => import('@/pages/Error/index.vue'),
    meta: {
      status:true
    }
  }
]

const router: Router = createRouter({
  history:createWebHistory(),
  routes
})


export default router