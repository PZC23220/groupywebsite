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

import rule from '@/components/rule'
import privacy_policy from '@/components/privacy_policy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },{
        path: '/news',
        component: news,
        children: [
          {path: '', component: news_index},
          {path: '/news_index', component: news_index},
          {path: '/news_desc', component: news_desc},
        ]
    }, {
      path: '/index_chinese',
      component: index,
      children: [
        {path: '', component: index},
        {path: '/index_chinese/chinese', component: index},
        {path: '/index_chinese/detail', component: index},
        {path: '/index_chinese/chinese_videos',component: index},
        {path: '/index_chinese/chinese_idol',component: index},
        {path: '/index_chinese/chinese_rule',component: index},
        {path: '/index_chinese/chinese_privacy_policy',component: index}
      ]
    }, {
      path: '/index_japanese',
      component: index,
      children: [
        {path: '', component: index},
        {path: '/index_japanese/index',component: index},
        {path: '/index_japanese/japanese',component: index},
        {path: '/index_japanese/japanese_videos',component: index},
        {path: '/index_japanese/japanese_detail',component: index},
        // {path: '/index_japanese/japanese_registered',component: japanese_registered},
        {path: '/index_japanese/japanese_idol',component: index},
        {path: '/index_japanese/japanese_rule',component: index},
        {path: '/index_japanese/japanese_privacy_policy',component: index}
      ]
    }, {
      path: '/japanese_registered',
      component: index
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
        path: '/rule',
        component: rule,
    },{
        path: '/privacy_policy',
        component: privacy_policy,
    },{
        path: '/index',
        component: index,
    }
  ],
  mode: 'history',
})
