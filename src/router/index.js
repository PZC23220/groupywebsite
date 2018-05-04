import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import idolGroup from '@/components/idolGroup'
import idolGroup_index from '@/components/idolGroup/index'
import idolGroup_group from '@/components/idolGroup/group'
import idolGroup_idol from '@/components/idolGroup/idol'

import idolFestival from '@/components/idolFestival'

import event from '@/components/event'
import event_index from '@/components/event/index'
import event_desc from '@/components/event/desc'

import news from '@/components/news'
import news_index from '@/components/news/index'
import news_desc from '@/components/news/desc'

import aboutUs from '@/components/aboutUs'
import joinUs from '@/components/joinUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
        path: '/news',
        component: news,
        children: [
          {path: '', component: news_index},
          {path: '/news_index', component: news_index},
          {path: '/news_desc', component: news_desc},
        ]
    },{
        path: '/idolGroup',
        component: idolGroup,
        children: [
          {path: '', component: idolGroup_index},
          {path: '/idolGroup_index', component: idolGroup_index},
          {path: '/idolGroup_group', component: idolGroup_group},
          {path: '/idolGroup_idol', component: idolGroup_idol},
        ]
    },{
        path: '/event',
        component: event,
        children: [
          {path: '', component: event_index},
          {path: '/event_index', component: event_index},
          {path: '/event_desc', component: event_desc},
        ]
    },{
        path: '/idolFestival',
        component: idolFestival,
    },{
        path: '/aboutUs',
        component: aboutUs,
    },{
        path: '/joinUs',
        component: joinUs,
    },{
        path: '/index',
        component: index,
    }
  ],
  mode: 'history',
})
