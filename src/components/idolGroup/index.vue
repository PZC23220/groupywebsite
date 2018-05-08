<template>
  <div class="idolGroup_index">
    <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.eventTitle}}</span></p>
    <!-- content -->
    <div class="idol-content">
      <div class="group-tabs width1200"><a class="active" href="#" @click="changeSwipers(0)">日本</a><a href="#" @click="changeSwipers(1)">中国</a></div>
       <swiper :options="swiperOption" ref="contentSwiper" class="swiper-group scrollReveal">
        <!-- anthors -->
        <swiper-slide class="banner-slides">
          <swiper :options="swiperOption2" ref="groupSwiper2" class="swiper-content">
            <swiper-slide class="banner-slides" v-for="(team,index1) in idolList1" :key="index1" v-if="index1%5 == 0">
              <ul class="group-list">
                <li class="list-content" v-for="(idol,$index) in idolList1" :key="$index" v-if="($index >= index1) && ($index < index1+5)">
                    <router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" class="group-logo"><span :style="'background-image:url('+ idol.small_logo +');'"></span></router-link>
                    <div class="group-desc">
                      <router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" class="group-name">{{idol.name}}</router-link>
                      <router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" class="group-info">{{idol.introduce}}</router-link>
                    </div>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="group-page group-page1 width1200"><span v-for="(team,index1) in idolList1" :key="index1" v-if="index1%5 == 0" :class="{'active':index1 == 0}" @click="changeSwipers2(index1/5)">{{index1/5+1}}</span></div>

        </swiper-slide>
        <swiper-slide class="banner-slides">
          <!-- in -->
          <swiper :options="swiperOption3" ref="groupSwiper3" class="swiper-content">
            <swiper-slide class="banner-slides" v-for="(team,index1) in idolList2" :key="index1" v-if="index1%5 == 0">
              <ul class="group-list">
                <li class="list-content" v-for="(idol,$index) in idolList2" :key="$index" v-if="($index >= index1) && ($index < index1+5)">
                    <router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" class="group-logo"><span :style="'background-image:url('+ idol.small_logo +');'"></span></router-link>
                    <div class="group-desc">
                      <router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" class="group-name">{{idol.name_chinese}}</router-link>
                      <router-link :to="'/idolGroup_group?id='+idol.id+'&nationality='+idol.nationality+'&lan='+lan" class="group-info">{{idol.introduce_chinese}}</router-link>
                    </div>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="group-page group-page2 width1200"><span v-for="(team,index1) in idolList2" :key="index1" v-if="index1%5 == 0" :class="{'active':index1 == 0}" @click="changeSwipers3(index1/5)">{{index1/5+1}}</span></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss"scoped>
  @import "../../styles/idolGroup.scss";
</style>
<script>
import scrollReveal from  'scrollreveal'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import $ from  'n-zepto'
var idolsData = require('../../../static/json/user_organization.json')
var japanIdols=[],chinaIdols=[]
for(let i=0;i<idolsData.length;i++) {
  if(idolsData[i].nationality == 'China') {
    chinaIdols.push(idolsData[i])
  }else {
    japanIdols.push(idolsData[i])
  }
}
export default {
  name: 'idolGroup_index',
  data () {
    return {
      idolList1:[],
      idolList2:[],
      scrollReveal:scrollReveal(),
      swiperOption: {
        setWrapperSize :true,
        speed:500,
        on:{
          transitionStart(){
            $('.group-tabs a').removeClass('active')
            $('.group-tabs a').eq(this.activeIndex).addClass('active');
          }
        }
      },
      swiperOption2: {
        setWrapperSize :true,
        grabCursor: true,
        speed:500,
        on:{
          transitionStart(){
            $('.group-page1 span').removeClass('active')
            $('.group-page1 span').eq(this.activeIndex).addClass('active');
          }
        }
      },
      swiperOption3: {
        setWrapperSize :true,
        grabCursor: true,
        speed:500,
        on:{
          transitionStart(){
            $('.group-page2 span').removeClass('active')
            $('.group-page2 span').eq(this.activeIndex).addClass('active');
          }
        }
      },
      text: {
        index: 'ホーム',
        eventTitle: '配信アイドル',
      }
    }
  },
  methods: {
    changeSwipers(val) {
      let tabs = $('.group-tabs a');
      tabs.removeClass('active');
      tabs.eq(val).addClass('active');
      this.swiper.slideTo(val, 500, false)
      let tabs2 = $('.group-page1 span');
      tabs2.removeClass('active');
      tabs2.eq(0).addClass('active');
      this.groupSwiper2.slideTo(0, 500, false)
    },
    changeSwipers2(val) {
      setTimeout(function() {
        let ele = document.querySelector('.content');
        ele.scrollIntoView();
      },0);
      let tabs = $('.group-page1 span');
      tabs.removeClass('active');
      tabs.eq(val).addClass('active');
      this.groupSwiper2.slideTo(val, 500, false)
    },
    changeSwipers3(val) {
      setTimeout(function() {
        let ele = document.querySelector('.content');
        ele.scrollIntoView();
      },0);
      let tabs = $('.group-page2 span');
      tabs.removeClass('active');
      tabs.eq(val).addClass('active');
      this.groupSwiper3.slideTo(val, 500, false)
    },
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          index: '首页',
          eventTitle: '入驻爱豆',
        }
      }else {
        this.text = {
          index: 'ホーム',
          eventTitle: '配信アイドル',
        }
      }
    },
    routeChange() {
      this.lan = this.$route.query.lan;
      this.changeInfo();
    }
  },
  watch: {
    '$route': 'routeChange'
  },
  computed: {
    swiper() {
      return this.$refs.contentSwiper.swiper
    },
    groupSwiper2() {
      return this.$refs.groupSwiper2.swiper
    },
    groupSwiper3() {
      return this.$refs.groupSwiper3.swiper
    }
  },
  mounted() {
    this.scrollReveal.reveal('.scrollReveal', {
      duration: 600,
    });
  },
  created: function() {
    this.idolList1 = japanIdols;
    this.idolList2 = chinaIdols;
    let self = this;
    setTimeout(function() {
      let ele = document.querySelector('.content');
      ele.scrollIntoView();
    },0);
    self.lan = self.$route.query.lan;
    self.changeInfo();
  }
}
</script>
