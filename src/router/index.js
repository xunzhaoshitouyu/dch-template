import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'

const Button = (resolve) => import('@/pages/components/Button').then(module => {
  resolve(module)
})

const Input = (resolve) => import('@/pages/components/Input').then(module => {
  resolve(module)
})

const Select = (resolve) => import('@/pages/components/Select').then(module => {
  resolve(module)
})

const Transfer = (resolve) => import('@/pages/components/Transfer').then(module => {
  resolve(module)
})

const Menu = (resolve) => import('@/pages/components/menu').then(module => {
  resolve(module)
})

const Modal = (resolve) => import('@/pages/components/Modal').then(module => {
  resolve(module)
})

const Tooltip = (resolve) => import('@/pages/components/tooltip').then(module => {
  resolve(module)
})

const LayoutTree = (resolve) => import('@/pages/layout-tree/index').then(module => {
  resolve(module)
})

const Layout = (resolve) => import('@/pages/layout/index').then(module => {
  resolve(module)
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/menu',
          name: 'menu',
          component: Menu
        },
        {
          path: '/button',
          name: 'button',
          component: Button
        },
        {
          path: '/input',
          name: 'input',
          component: Input
        },
        {
          path: '/select',
          name: 'select',
          component: Select
        },
        {
          path: '/transfer',
          name: 'transfer',
          component: Transfer
        },
        {
          path: '/layoutTree',
          name: 'layoutTree',
          component: LayoutTree
        },
        {
          path: '/layout',
          name: 'layout',
          component: Layout
        },
        {
          path: '/modal',
          name: 'modal',
          component: Modal
        }, {
          path: '/tooltip',
          name: 'tooltip',
          component: Tooltip
        }
      ]
    }
  ]
})
