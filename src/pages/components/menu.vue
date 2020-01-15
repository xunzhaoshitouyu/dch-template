<template>
  <ul class="api">
    <li>菜单组件的数据结构如下：<br>
      <code>
        menus: [
        {
        title: '布局',
        index: '1',
        children: [
        {
        title: '有tree',
        index: '/layoutTree',
        children: null
        },
        {
        title: '没tree',
        index: '1-2',
        children: null
        }
        ]
        },
        {
        title: '菜单',
        index: '/menu',
        children: null
        },
        {
        title: '按钮',
        index: '/button',
        children: null
        },
        {
        title: '输入框',
        index: '/input',
        children: null
        },
        {
        title: '下拉框',
        index: '/select',
        children: null
        },
        {
        title: '穿梭框',
        index: '/transfer',
        children: null
        }
        ]
      </code>
    </li>
  </ul>
</template>
