<template>
  <div class="index">

    <!-- content -->
    <div class="content">
      <!-- banner -->
      <div class="banner-content">
        <swiper :options="swiperOption" ref="bannerSwiper" class="swiper-content scrollReveal">
          <swiper-slide id="swiper1" class="banner-slides">
            <a href="http://activity.groupy.vip/GroupyIdolFestival201807/index.html" target="_black">
              <div class="banner banner1">
                <img :src="text.banner1" class="width1200">
                <swiper :options="swiperOption5" ref="mySwiper" class="banner_container">
                    <!-- slides -->
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/huase.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/notall.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/yinv.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/AA.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/tsd.jpg"></swiper-slide>
                    <div class="swiper-pagination4" slot="pagination"></div>
                </swiper>
              </div>
               <div class="banner banner2">
                <img :src="text.banner1" class="width1200">
                <swiper :options="swiperOption4" ref="mySwiper" class="banner_container">
                    <!-- slides -->
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/huase.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/notall.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/yinv.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/AA.jpg"></swiper-slide>
                    <swiper-slide><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/tsd.jpg"></swiper-slide>
                    <div class="swiper-pagination4" slot="pagination"></div>
                </swiper>
              </div>
            </a>
          </swiper-slide>
          <!-- <div class="swiper-pagination banner-page" slot="pagination"></div> -->
        </swiper>
      </div>
      <!-- <div class="banner-page"><span class="bannerTabs active cursor" @click="changeSwipers(1)"></span><span class="bannerTabs cursor" @click="changeSwipers(2)"></span></div> -->
      <!-- BACKGROUND -->
      <div class="background">
        <h2 class="groupy-h2 scrollReveal"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>{{text.background}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3 scrollReveal"><span>{{text.bgTitle}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <p class="groupy-desc scrollReveal" v-html="text.bgTitleDesc"></p>
        <ul class="groupy-desc-img width1200 scrollReveal">
         <li>
            <img v-lazy="text.callImg" class="desc-title">
            <img v-lazy="text.callImgs" class="desc-img">
            <p class="desc-p" v-html="text.callDesc"></p>
          </li>
          <li>
            <img v-lazy="text.liveImg" class="desc-title">
            <img v-lazy="text.liveImgs" class="desc-img">
            <p class="desc-p" v-html="text.liveDesc"></p>
          </li>
          <li>
            <img v-lazy="text.bugImg" class="desc-title">
            <img v-lazy="text.bugImgs" class="desc-img">
            <p class="desc-p" v-html="text.bugDesc"></p>
          </li>
        </ul>
      </div>
      <!-- PRODUCT -->
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/bg_1.png" class="bg-img bg-img-2">
      <div class="product" id="product">
        <h2 class="groupy-h2 scrollReveal"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>PRODUCT</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3 scrollReveal"><span>{{text.productTitle}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <p class="groupy-desc scrollReveal" v-html="text.productTitleDesc"></p>
        <div class="idol-desc scrollReveal">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_video_1.png" class="idol-video">
          <img v-lazy="text.video1Img" class="idol-info">
          <p class="idol-name">{{text.video1Name}}</p>
        </div>
        <div class="idol-desc scrollReveal">
          <img v-lazy="text.video2Img" class="idol-info">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_video_2.png" class="idol-video">
          <p class="idol-name idol-name-2">{{text.video2Name}}</p>
        </div>
        <div class="idol-desc scrollReveal">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_video_3.png" class="idol-video">
          <img v-lazy="text.video3Img" class="idol-info idol-info-2">
          <p class="idol-name idol-name-3">{{text.video3Name}}</p>
        </div>
        <div class="idol-desc scrollReveal">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_7.png" v-if="lan == 'zh-cn'" class="idol-info idol-info-2">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_video_4.png" class="idol-video">
          <p class="idol-name idol-name-4">{{text.video4Name}}</p>
        </div>
      </div>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/bg_1.png" class="bg-img">
      <!-- IDOL GROUP -->
      <div class="idol-group" id="idolGroupy">
        <h2 class="groupy-h2 scrollReveal"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>IDOL GROUP</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3 scrollReveal"><span>{{text.groupTitle}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <p class="groupy-desc scrollReveal" v-html="text.groupTitleDesc"></p>
        <ul class="groupy-desc-img groupy-desc-img-2 width1200 scrollReveal">
          <li>
            <router-link :to="'/idolGroup_group?id=50&lan='+this.lan"><img v-lazy="text.idol1Img" class="desc-img"></router-link>
            <router-link :to="'/idolGroup_group?id=50&lan='+this.lan" class="groupy-h4">{{text.idol1Name}}</router-link>
            <router-link :to="'/idolGroup_group?id=50&lan='+this.lan" class="desc-p desc-p-2" v-html="text.idol1Desc"></router-link>
            <div class="idol-more group-translateX"><router-link :to="'/idolGroup_group?id=50&lan='+this.lan" :data-hover="text.member"><span><em>{{text.member}}</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_1.png"></span></router-link></div>
          </li>
          <li>
            <router-link :to="'/idolGroup_group?id=32&lan='+this.lan"><img v-lazy="text.idol2Img" class="desc-img"></router-link>
            <router-link :to="'/idolGroup_group?id=32&lan='+this.lan" class="groupy-h4">{{text.idol2Name}}</router-link>
            <router-link :to="'/idolGroup_group?id=32&lan='+this.lan" class="desc-p desc-p-2" v-html="text.idol2Desc"></router-link>
            <div class="idol-more group-translateX"><router-link :to="'/idolGroup_group?id=32&lan='+this.lan" :data-hover="text.member"><span><em>{{text.member}}</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_1.png"></span></router-link></div>
          </li>
         <li>
            <router-link :to="'/idolGroup_group?id=42&lan='+this.lan"><img v-lazy="text.idol3Img" class="desc-img"></router-link>
            <router-link :to="'/idolGroup_group?id=42&lan='+this.lan" class="groupy-h4">{{text.idol3Name}}</router-link>
            <router-link :to="'/idolGroup_group?id=42&lan='+this.lan" class="desc-p desc-p-2" v-html="text.idol3Desc"></router-link>
            <div class="idol-more group-translateX"><router-link :to="'/idolGroup_group?id=42&lan='+this.lan" :data-hover="text.member"><span><em>{{text.member}}</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_1.png"></span></router-link></div>
          </li>
        </ul>
        <div class="groupy-more scrollReveal group-translateX"><router-link :to="'/idolGroup?lan='+this.lan" data-hover="MORE"><span><em>MORE</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></span></router-link></div>
      </div>
      <!-- EVENT -->
      <div class="event" id="event">
        <h2 class="groupy-h2 scrollReveal"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>EVENT</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3 scrollReveal"><span>{{text.eventTitle}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <div class="width1200 event-swiper-content scrollReveal">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_5.png" @click="clickLeft()" class="event-btn btn-left cursor">
          <swiper :options="swiperOption2" ref="eventSwiper" class="swiper-content2">
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=5&lan='+lan" class="event-img-content"><img :src="text.event7Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=5&lan='+lan" class="event-desc"><span v-html="text.event7Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-img-content"><img :src="text.event8Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-desc"><span v-html="text.event8Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=3&lan='+lan" class="event-img-content"><img v-lazy="text.event1Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=3&lan='+lan" class="event-desc"><span v-html="text.event1Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=3&lan='+lan" class="event-img-content"><img v-lazy="text.event2Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=3&lan='+lan" class="event-desc"><span v-html="text.event2Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-img-content"><img v-lazy="text.event4Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-desc"><span v-html="text.event4Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-img-content"><img v-lazy="text.event5Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-desc"><span v-html="text.event5Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
          </swiper>
          <div class="banner-page event-page"><span class="eventTabs active cursor" @click="changeSwipers(2)"></span><span class="eventTabs cursor" @click="changeSwipers(4)"></span><span class="eventTabs cursor" @click="changeSwipers(6)"></span></div>
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_4.png" @click="clickRight()" class="event-btn btn-right cursor">
        </div>
        <div class="width1200 event-swiper-content scrollReveal event-swiper-content-web">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_5.png" @click="clickLeft2()" class="event-btn btn-left cursor">
          <swiper :options="swiperOption3" ref="eventSwiper2" class="swiper-content2">
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=5&lan='+lan" class="event-img-content"><img :src="text.event7Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=5&lan='+lan" class="event-desc"><span v-html="text.event7Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-img-content"><img v-lazy="text.event8Img" class="event-img"></router-link>
              <router-link :to="'/news_desc?id=4&lan='+lan" class="event-desc"><span v-html="text.event8Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link to="/event_desc" class="event-img-content"><img v-lazy="text.event1Img" class="event-img"></router-link>
              <router-link to="/event_desc" class="event-desc"><span v-html="text.event1Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link to="/event_desc" class="event-img-content"><img v-lazy="text.event2Img" class="event-img"></router-link>
              <router-link to="/event_desc" class="event-desc"><span v-html="text.event2Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link to="/event_desc" class="event-img-content"><img v-lazy="text.event4Img" class="event-img"></router-link>
              <router-link to="/event_desc" class="event-desc"><span v-html="text.event4Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
            <swiper-slide class="event-slides">
              <router-link to="/event_desc" class="event-img-content"><img v-lazy="text.event5Img" class="event-img"></router-link>
              <router-link to="/event_desc" class="event-desc"><span v-html="text.event5Title"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></router-link>
            </swiper-slide>
          </swiper>
           <div class="banner-page event-page"><span class="eventTabs2 active cursor" @click="changeSwipers(1)"></span><span class="eventTabs2 cursor" @click="changeSwipers(2)"></span></span><span class="eventTabs2 cursor" @click="changeSwipers(3)"></span></span><span class="eventTabs2 cursor" @click="changeSwipers(4)"></span></span><span class="eventTabs2 cursor" @click="changeSwipers(5)"></span></span><span class="eventTabs2 cursor" @click="changeSwipers(6)"></span></div>
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_4.png" @click="clickRight2()" class="event-btn btn-right cursor">
        </div>
        <div class="groupy-more event-more scrollReveal group-translateX"><router-link :to="'/event?lan='+this.lan" data-hover="MORE"><span><em>MORE</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></span></router-link></div>
      </div>
      <!-- NEWS -->
      <div class="news" id="news">
        <h2 class="groupy-h2 scrollReveal"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>NEWS</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3 scrollReveal"><span>{{text.newsTitle}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <ul class="news-list scrollReveal">
          <li><router-link :to="'/news_desc?id=5&lan='+lan"><p><time>{{text.news4Time}}</time></p><span>{{text.news4Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
          <li><router-link :to="'/news_desc?id=3&lan='+lan"><p><time>{{text.news1Time}}</time></p><span>{{text.news1Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
          <li><router-link :to="'/news_desc?id=2&lan='+lan"><p><time>{{text.news2Time}}</time></p><span>{{text.news2Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
          <li><router-link :to="'/news_desc?id=1&lan='+lan"><p><time>{{text.news3Time}}</time></p><span>{{text.news3Title}}</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></router-link></li>
        </ul>
        <div class="groupy-more scrollReveal group-translateX"><router-link :to="'/news?lan='+lan" data-hover="MORE"><span><em>MORE</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></span></router-link></div>
      </div>
      <!-- download -->
      <div class="download" id="download">
        <div class="download-content width1200 scrollReveal">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_6.jpg" class="product-img">
          <div class="site-content">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_groupy.png" class="icon_groupy">
            <div class="site-desc" :class="{'site-desc-letter-spacing':lan=='zh-cn'}"><span v-html="text.site"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_star_1.png" class="img_star img_star_1"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_star_2.png" class="img_star img_star_2"></div>
          </div>
          <div class="download-qr">
            <div class="download-qr-content">
              <div class="apps">
                <a :href="text.ios_app" target="_black" class="app ios"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_download_1.png"></a>
                <a :href="text.android_app" target="_black" class="app android"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_download_2.png"></a>
              </div>
              <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_download.png" class="qr-groupy">
            </div>
            <p class="download-qr-tips">{{text.support}}</p>
          </div>
        </div>
      </div>
      <div class="download download-web" id="download">
        <div class="download-content width1200 scrollReveal">
          <div class="site-content">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_groupy.png" class="icon_groupy">
            <div class="site-desc" :class="{'site-desc-letter-spacing':lan=='zh-cn'}"><span v-html="text.site"></span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_star_1.png" class="img_star img_star_1"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_star_2.png" class="img_star img_star_2"></div>
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_6.png" class="product-img">
          </div>
          <div class="download-qr">
            <div class="download-qr-content">
              <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_download.png" class="qr-groupy">
              <div class="apps">
                <a :href="text.ios_app" target="_black" class="app ios"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_download_1.png"></a>
                <a :href="text.android_app" target="_black" class="app android"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_download_2.png"></a>
              </div>
            </div>
            <p class="download-qr-tips">{{text.support}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../styles/index.scss";
</style>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import scrollReveal from  'scrollreveal'
import $ from  'n-zepto'
export default {
  name: 'index',
  data () {
    return {
      lan: '',
      scrollReveal:scrollReveal(),
      swiperOption: {
        setWrapperSize :true,
        speed:500,
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        on:{
          transitionStart(){
            $('.bannerTabs').removeClass('active')
            if (this.activeIndex%2 == 0) {
              $('.bannerTabs').eq(1).addClass('active');
            }else {
              $('.bannerTabs').eq(0).addClass('active');
            }
          }
        }
      },
      swiperOption2: {
        setWrapperSize :true,
        speed:500,
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        autoplay: true,
        autoplay: {
          disableOnInteraction: false
        },
        on:{
          transitionStart(){
            $('.eventTabs').removeClass('active')
            if (this.activeIndex == 6) {
              $('.eventTabs').eq(2).addClass('active');
            }else if (this.activeIndex == 4) {
              $('.eventTabs').eq(1).addClass('active');
            }else {
              $('.eventTabs').eq(0).addClass('active');
            }
          }
        }
      },
      swiperOption3: {
        setWrapperSize :true,
        grabCursor: true,
        speed:500,
        loop: true,
        autoplay: true,
        paginationClickable: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination3',
          // dynamicBullets: true,
          clickable :true,
        },
        on:{
          transitionStart(){
            $('.eventTabs2').removeClass('active')
            $('.eventTabs2').eq(this.activeIndex - 1).addClass('active');
            if(this.activeIndex == 7) {
              $('.eventTabs2').eq(0).addClass('active');
            }
          }
        }
      },
      swiperOption4: {
        setWrapperSize :true,
        autoplay: true,
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination4',
          clickable :true,
        },
        grabCursor: true,
        paginationClickable: true,
      },
      swiperOption5: {
        speed: 2000,
        setWrapperSize :true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        autoplay: true,
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination4',
          clickable :true,
        },
        grabCursor: true,
        paginationClickable: true,
      },
      text: {
        banner1: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/subject2.png',
        banner2: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/banner-1.jpg',
        bgTitle: '日系偶像应援',
        background: 'BACKGROUND',
        bgTitleDesc: '在日本，“偶像”是一门职业。比起闪闪发亮的明星，他们显得异常平凡,<br>通往梦想的道路更是崎岖，需要依托粉丝的应援来成长。',
        callImg: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_4.png',
        callImgs: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_3.png',
        liveImg: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_5.png',
        liveImgs: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_4.png',
        bugImg: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_6.png',
        bugImgs: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_5.png',
        callDesc: 'wota艺的一种，在日系live中，粉丝据歌曲的歌词中的要素喊口号，包括跟着歌词联动、复唱、回应。',
        liveDesc: '日系少女偶像的live更强调气氛与互动，开创了独特应援文化，粉丝通过呐喊和肢体，配合歌曲元素与偶像一起嗨！',
        bugDesc: 'live表演后，少女偶像将会现场售卖周边以及合影券、握手券、聊天券，与粉丝近距离接触。',
        productTitle: '应用介绍',
        productTitleDesc: 'Groupy是一个日系少女偶像的梦想应援平台<br>在这里，你可看到少女偶像的独家短视频，时刻跟踪她的消息<br>为她疯狂打CALL争取更多曝光机会，守护她的小小梦想。',
        video1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_1.png',
        video1Name: 'ID：みのわみのり',
        video2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_2.png',
        video2Name: 'ID：あおい@Ariel Project',
        video3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_3.png',
        video3Name: 'ID：橘 莉子(りぃちゃん)',
        video4Name: 'ID：渡邊ちこ(notall)',
        groupTitle: '入驻偶像',
        groupTitleDesc: 'APP已有大量小偶像入驻<br>妹子们每天都在更新视频<br>努力给饭们带来治愈的笑容和有趣的生活日常镜头',
        idol1Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/Shine%20Fine%20Movement.jpg',
        idol2Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/%E6%94%BE%E8%AA%B2%E5%BE%8C%E3%83%95%E3%82%9A%E3%83%AA%E3%83%B3%E3%82%BB%E3%82%B9.jpg',
        idol3Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/TOKYO%20SWEET%20PARTY.jpg',
        idol1Name: 'Shine Fine Movement',
        idol2Name: '放学后Princess',
        idol3Name: 'Tokyo Sweet Party',
        idol1Desc: '日本哥伦比亚旗下唱片公司「Label The Garden」所属，以「光」和「元气」为主题进行活动的偶像组合。',
        idol2Desc: '每到16点，发圈变为皇冠，穿着制服的女学生变身为公主的校园偶像团体。<br><br>',
        idol3Desc: 'TOKYO SWEET PARTY（简称tosupari），是成立于2018年1月3日的压倒性可爱正统派偶像团体。',
        member: '成员',
        eventTitle: '活动现场',
        event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
        event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
        event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
        event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
        event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
        event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
        event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event7Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%881.jpg',
        event7Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
        event8Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%882.jpg',
        event8Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
        newsTitle: '大事记',
        news4Time: '2018/05/01',
        news4Title: '~萌色倾城偶像祭~ 五一就要燥起来！为小偶像疯狂应援！',
        news1Time: '2017/12/30',
        news1Title: '~新年偶像祭~ Groupy国内最初live公演 见学真正的打Call',
        news2Time: '2017/07/02',
        news2Title: 'APP正式上线运营 随时随地为少女应援',
        news3Time: '2017/06/06',
        news3Title: '项目全新启动 进军日系偶像应援市场',
        site: '日系少女偶像的<br>梦想应援平台',
        support: '下载和小偶像互动',
        android_app: 'http://activity.groupy.vip/groupy_download',
        ios_app: 'https://itunes.apple.com/cn/app/groupy-%E8%B6%85%E8%90%8C%E4%B8%89%E6%AC%A1%E5%85%83%E6%97%A5%E7%B3%BB%E7%88%B1%E8%B1%86%E7%9F%AD%E8%A7%86%E9%A2%91/id1270083927?mt=8',
      }
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          banner1: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/subject.png',
          banner2: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/banner-1.jpg',
          bgTitle: '日系偶像应援',
          background: 'BACKGROUND',
          bgTitleDesc: '在日本，“偶像”是一门职业。比起闪闪发亮的明星，他们显得异常平凡,<br>通往梦想的道路更是崎岖，需要依托粉丝的应援来成长。',
          callImg: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_4.png',
          callImgs: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_3.png',
          liveImg: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_5.png',
          liveImgs: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_4.png',
          bugImg: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_6.png',
          bugImgs: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_5.png',
          callDesc: 'wota艺的一种，在日系live中，粉丝据歌曲的歌词中的要素喊口号，包括跟着歌词联动、复唱、回应。',
          liveDesc: '日系少女偶像的live更强调气氛与互动，开创了独特应援文化，粉丝通过呐喊和肢体，配合歌曲元素与偶像一起嗨！',
          bugDesc: 'live表演后，少女偶像将会现场售卖周边以及合影券、握手券、聊天券，与粉丝近距离接触。',
          productTitle: '应用介绍',
          productTitleDesc: 'Groupy是一个日系少女偶像的梦想应援平台<br>在这里，你可看到少女偶像的独家短视频，时刻跟踪她的消息<br>为她疯狂打CALL争取更多曝光机会，守护她的小小梦想。',
          video1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_1.png',
          video1Name: 'ID：みのわみのり',
          video2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_2.png',
          video2Name: 'ID：あおい@Ariel Project',
          video3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_3.png',
          video3Name: 'ID：橘 莉子(りぃちゃん)',
          video4Name: 'ID：渡邊ちこ(notall)',
          groupTitle: '入驻偶像',
          groupTitleDesc: 'APP已有大量小偶像入驻<br>妹子们每天都在更新视频<br>努力给饭们带来治愈的笑容和有趣的生活日常镜头',
          idol1Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/Shine%20Fine%20Movement.jpg',
          idol2Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/%E6%94%BE%E8%AA%B2%E5%BE%8C%E3%83%95%E3%82%9A%E3%83%AA%E3%83%B3%E3%82%BB%E3%82%B9.jpg',
          idol3Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/TOKYO%20SWEET%20PARTY.jpg',
          idol1Name: 'Shine Fine Movement',
          idol2Name: '放学后Princess',
          idol3Name: 'Tokyo Sweet Party',
          idol1Desc: '日本哥伦比亚旗下唱片公司「Label The Garden」所属，以「光」和「元气」为主题进行活动的偶像组合。',
          idol2Desc: '每到16点，发圈变为皇冠，穿着制服的女学生变身为公主的校园偶像团体。<br><br>',
          idol3Desc: 'TOKYO SWEET PARTY（简称tosupari），是成立于2018年1月3日的压倒性可爱正统派偶像团体。',
          member: '成员',
          eventTitle: '活动现场',
          event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
          event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
          event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
          event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
          event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
          event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
          event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event7Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%881.jpg',
          event7Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
          event8Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%882.jpg',
          event8Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
          news4Time: '2018/05/01',
          news4Title: '~萌色倾城偶像祭~ 五一就要燥起来！为小偶像疯狂应援！',
          newsTitle: '大事记',
          news1Time: '2017/12/30',
          news1Title: '~新年偶像祭~ Groupy国内最初live公演 见学真正的打Call',
          news2Time: '2017/07/02',
          news2Title: 'APP正式上线运营 随时随地为少女应援',
          news3Time: '2017/06/06',
          news3Title: '项目全新启动 进军日系偶像应援市场',
          site: '日系少女偶像的<br>梦想应援平台',
          support: '下载和小偶像互动',
          android_app: 'http://activity.groupy.vip/groupy_download',
          ios_app: 'https://itunes.apple.com/cn/app/groupy-%E8%B6%85%E8%90%8C%E4%B8%89%E6%AC%A1%E5%85%83%E6%97%A5%E7%B3%BB%E7%88%B1%E8%B1%86%E7%9F%AD%E8%A7%86%E9%A2%91/id1270083927?mt=8',
        }
      }else {
        this.text = {
          banner1: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/subject2.png',
          banner2: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/banner-1.jpg',
          bgTitle: '市場可能性まだ大きい',
          background: 'MARKETING',
          bgTitleDesc: '中国アイドル文化産業の発展に伴い、<br>中国アイドル業界は「急激発展期」に突入した。',
          callImg: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/text_7.png',
          callImgs: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/img_7.png',
          liveImg: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/text_8.png',
          liveImgs: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/img_8.png',
          bugImg: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/text_9.png',
          bugImgs: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/img_9.png',
          callDesc: '韓国発のアイドル育成番組『Produce101』などの大ブレイクによって、アイドルグループへの関心が高まっています。また、中国では「二次元（アニメ・漫画・ゲームなどをまとめたジャンル）」文化はとても人気があり、その「二次元」の派生文化としてのアイドル文化もだんだん注目を集めていきます。',
          liveDesc: 'アイドルを応援するために、若者たちは多くの時間やお金を注ぎ込んでいます。例えば、中国アイドルSNH482017年の総選挙では、投票にかかった総額のみが1億元を超えました。 ',
          bugDesc: '中国のアイドル市場自体がまだ未熟であり、日本に較べアイドルグループの数もまだ飽和状態ではないので、これから大勢のファンの様々なニーズを満たすために、より多くのアイドルグループを導入する必要があります。',
          productTitle: 'アプリ紹介',
          productTitleDesc: 'Groupyとはファン向けのアイドル応援アプリです。<br>アイドルが動画を配信してファンとコミュニケーションをとることができます。<br>ファンからの応援に応じて、人気アイドルは、雑誌掲載、ライブ出演、中国進出などのチャンスが得られます。',
          video1Img: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/text_1.jpg',
          video1Name: 'ID：みのわみのり',
          video2Img: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/text_2.png',
          video2Name: 'ID：あおい@Ariel Project',
          video3Img: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/groupywebsite2/text_3.png',
          video3Name: 'ID：橘 莉子(りぃちゃん)',
          video4Name: 'ID：渡邊ちこ(notall)',
          groupTitle: '配信アイドル',
          groupTitleDesc: '新規配信アイドルが続々参加<br>人気アイドルがたくさん集まり、毎日動画配信中<br>かわいい笑顔や面白いオフショットがご覧いただけます',
          idol1Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/Shine%20Fine%20Movement.jpg',
          idol2Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/%E6%94%BE%E8%AA%B2%E5%BE%8C%E3%83%95%E3%82%9A%E3%83%AA%E3%83%B3%E3%82%BB%E3%82%B9.jpg',
          idol3Img: 'http://groupyupload2.oss-cn-hongkong.aliyuncs.com/organization_post/TOKYO%20SWEET%20PARTY.jpg',
          idol1Name: 'Shine Fine Movement',
          idol2Name: '放課後プリンセス',
          idol3Name: 'Tokyo Sweet Party',
          idol1Desc: '日本コロムビア アイドルレーベル「Label The Garden」 所属、"光"と"元気"をモチーフに活動するアイドルグループ。',
          idol2Desc: '16時を境にカチューシャはティアラに、制服からプリンセスに変身する学園アイドルユニットです。',
          idol3Desc: 'TOKYO SWEET PARTY（略称トスパリ）とは 2018年1月3日デビューの 『ガチでカワイイ正統派アイドルグループ』です。',
          member: 'メンバー',
          eventTitle: 'イベント現場',
          event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
          event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
          event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
          event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
          event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
          event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
          event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event7Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%881.jpg',
          event7Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
          event8Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%882.jpg',
          event8Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
          newsTitle: 'お知らせ',
          news4Time: '2018/05/01',
          news4Title: '~GroupyIdolFestival~ 5月イベント大変盛り上げりました！',
          news1Time: '2017/12/30',
          news1Title: 'Groupy New Year Festival～in 広州～開催決定！',
          news2Time: '2017/07/02',
          news2Title: '「Groupy」ホームページリリースのお知らせ',
          news3Time: '2017/06/06',
          news3Title: '新規アプリ「Groupy」開発開始！',
          site: 'アイドルとファンを親密に<br>つなぐプラットフォーム',
          support: 'アプリを入手',
          android_app: 'https://play.google.com/store/apps/details?id=com.groupy.app.fans',
          ios_app: 'https://itunes.apple.com/jp/app/groupy/id1270083927?mt=8',
        }
      }
    },
    changeSwipers(val) {
      let tabs = $('.eventTabs');
      tabs.removeClass('active');
      tabs.eq(val).addClass('active');
      this.swiper2.slideTo(val,500,false)
      this.swiper3.slideTo(val,500,false)
    },
    clickLeft() {
      if(this.swiper2.activeIndex == 2) {
        this.swiper2.slideTo(6,500,false)
      }else {
        this.swiper2.slideTo(this.swiper2.activeIndex - 2,500,false)
      }

    },
    clickRight() {
      if(this.swiper2.activeIndex == 6) {
        this.swiper2.slideTo(2,500,false)
      }else if(this.swiper2.activeIndex == 8) {
        this.swiper2.slideTo(4,500,false)
      }else {
        this.swiper2.slideTo(this.swiper2.activeIndex+2,500,false)
      }
    },
    clickLeft2() {
      if(this.swiper3.activeIndex == 1) {
        this.swiper3.slideTo(6,500,false)
      }else {
        this.swiper3.slideTo(this.swiper3.activeIndex - 1,500,false)
      }
    },
    clickRight2() {
      if(this.swiper3.activeIndex == 6) {
        this.swiper3.slideTo(1,500,false)
      }else if(this.swiper3.activeIndex == 7) {
        this.swiper3.slideTo(2,500,false)
      }else {
        this.swiper3.slideTo(++this.swiper3.activeIndex,500,false)
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
  mounted() {
    this.scrollReveal.reveal('.scrollReveal', {
      duration: 600,
    });
  },
  computed: {
    swiper() {
      return this.$refs.bannerSwiper.swiper
    },
    swiper2() {
      return this.$refs.eventSwiper.swiper
    },
    swiper3() {
      return this.$refs.eventSwiper2.swiper
    }
  },
  created: function() {
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
