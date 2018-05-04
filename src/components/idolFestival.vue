<template>
  <div class="index">

    <!-- content -->
    <div class="content">
      <!-- banner -->
      <swiper :options="swiperOption" ref="bannerSwiper" class="swiper-content">
        <swiper-slide id="swiper1" class="banner-slides">
          <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/optupload/banner-%E6%97%A5%E6%96%87.png" class="banners animated">
        </swiper-slide>
        <swiper-slide id="swiper2" class="banner-slides">
          <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/optupload/WechatIMG67.png" class="banners animated">
        </swiper-slide>
        <div class="swiper-pagination banner-page" slot="pagination"></div>
      </swiper>
      <!-- <div class="banner-page"><span class="bannerTabs active cursor" @click="changeSwipers(1)"></span><span class="bannerTabs cursor" @click="changeSwipers(2)"></span></div> -->
      <!-- BACKGROUND -->
      <div class="background">
        <h2 class="groupy-h2"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>BACKGROUND</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3"><span>日系爱豆应援</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <p class="groupy-desc">在日本，“偶像”是一门职业。比起闪闪发亮的明星，他们显得异常平凡<br>通往梦想的道路更是崎岖，需要依托粉丝的应援来成长</p>
        <ul class="groupy-desc-img width1200">
          <li>
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_4.png" class="desc-title">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_3.png" class="desc-img">
            <p class="desc-p">wota艺的一种，在日系live中，粉丝据歌曲的歌词中的要素喊口号，包括跟着歌词联动、复唱、回应。</p>
          </li>
          <li>
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_5.png" class="desc-title">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_4.png" class="desc-img">
            <p class="desc-p">日系少女偶像的live更强调气氛与互动，开创了独特应援文化，粉丝通过呐喊和肢体，配合歌曲元素与偶像一起嗨！</p>
          </li>
          <li>
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_6.png" class="desc-title">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_5.png" class="desc-img">
            <p class="desc-p">live表演后，少女偶像将会现场售卖周边以及合影券、握手券、聊天券，与粉丝近距离接触。</p>
          </li>
        </ul>
      </div>
      <!-- PRODUCT -->
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/bg_1.png" class="bg-img bg-img-2">
      <div class="product" id="product">
        <h2 class="groupy-h2"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>PRODUCT</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3"><span>产品介绍</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <p class="groupy-desc">Groupy是一个日系少女偶像的梦想应援平台<br>你可看到少女偶像的独家短视频，时刻跟踪她的消息<br>为她疯狂打CALL争取更多曝光机会，守护她的小小梦想</p>
        <div class="idol-desc">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_video_1.png" class="idol-video">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_1.png" class="idol-info">
          <p class="idol-name">ID：鈴原知花</p>
        </div>
        <div class="idol-desc">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_2.png" class="idol-info">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_video_2.png" class="idol-video">
          <p class="idol-name idol-name-2">ID：あおい@Ariel Project</p>
        </div>
        <div class="idol-desc">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_video_3.jpg" class="idol-video">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/text_3.png" class="idol-info idol-info-2">
          <p class="idol-name idol-name-3">ID：TSD陈墨岚</p>
        </div>
      </div>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/bg_1.png" class="bg-img">
      <!-- IDOL GROUP -->
      <div class="idol-group" id="idolGroupy">
        <h2 class="groupy-h2"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>IDOL GROUP</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3"><span>入驻爱豆</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <p class="groupy-desc">APP已有大量小偶像入驻<br>妹子们每天都在更新视频<br>努力给饭们带来治愈的笑容和有趣的生活日常镜头</p>
        <ul class="groupy-desc-img width1200">
          <li>
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_3.png" class="desc-img">
            <h4 class="groupy-h4">Shine Fine Movement</h4>
            <p class="desc-p">日本哥伦比亚旗下唱片公司所属，以「光」和「元气」为主题进行活动的偶像组合。</p>
            <a href="" class="idol-more"><span>成员</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_1.png"></a>
          </li>
          <li>
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_4.png" class="desc-img">
            <h4 class="groupy-h4">放学后Princess</h4>
            <p class="desc-p">日本哥伦比亚旗下唱片公司所属，以「光」和「元气」为主题进行活动的偶像组合。</p>
            <a href="" class="idol-more"><span>成员</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_1.png"></a>
          </li>
          <li>
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_5.png" class="desc-img">
            <h4 class="groupy-h4">Tokyo Sweet Party</h4>
            <p class="desc-p desc-p-2">日本哥伦比亚旗下唱片公司所属，以「光」和「元气」为主题进行活动的偶像组合。</p>
            <a href="" class="idol-more"><span>成员</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_1.png"></a>
          </li>
        </ul>
        <a href="" class="groupy-more"><span>MORE</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></a>
      </div>
      <!-- EVENT -->
      <div class="event" id="event">
        <h2 class="groupy-h2"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>EVENT</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3"><span>活动现场</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <div class="width1200 event-swiper-content">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_5.png" class="event-btn btn-left cursor">
          <swiper :options="swiperOption2" ref="eventSwiper" class="swiper-content2">
            <swiper-slide id="swiper1" class="event-slides">
              <a href="" class="event-img-content"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_5.png" class="event-img animated"></a>
              <a href="" class="event-desc"><span>元旦FFACG活动</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></a>
            </swiper-slide>
            <swiper-slide id="swiper2" class="event-slides">
              <a href="" class="event-img-content"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_5.png" class="event-img animated"></a>
              <a href="" class="event-desc"><span>2018.1 Groupy Live</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></a>
            </swiper-slide>
            <div class="swiper-pagination2 event-page" slot="pagination"></div>
          </swiper>
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_4.png" class="event-btn btn-right cursor">
        </div>
        <!-- <div class="event-page"><span class="eventTabs active"></span><span class="eventTabs"></span></div> -->
        <a href="" class="groupy-more event-more"><span>MORE</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_3.png"></a>
      </div>
      <!-- NEWS -->
      <div class="news" id="news">
        <h2 class="groupy-h2"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"><span>NEWS</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_1.png"></h2>
        <h3 class="groupy-h3"><span>大事记</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_2.png"></h3>
        <ul class="news-list">
          <li><a href=""><time>2018/01/03</time><span>在Groupy爱豆新年祭见学真正的打call</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></a></li>
          <li><a href=""><time>2018/01/03</time><span>在Groupy爱豆新年祭见学真正的打call</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></a></li>
          <li><a href=""><time>2018/01/03</time><span>在Groupy爱豆新年祭见学真正的打call</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></a></li>
        </ul>
        <a href="" class="groupy-more"><span>MORE</span><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_2.png"></a>
      </div>
      <!-- download -->
      <div class="download" id="download">
        <div class="download-content width1200">
          <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_6.png" class="product-img">
          <div class="site-content">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_groupy.png" class="icon_groupy">
            <div class="site-desc">日系少女偶像的<br>梦想应援平台<img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_star_1.png" class="img_star img_star_1"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_star_2.png" class="img_star img_star_2"></div>
          </div>
          <div class="download-qr">
            <div class="download-qr-content">
              <div class="apps">
                <a href="" class="app ios"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_download_1.png"></a>
                <a href="" class="app android"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/btn_download_2.png"></a>
              </div>
              <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_download.png" class="qr-groupy">
            </div>
            <p class="download-qr-tips">下载和小偶像互动</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {
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
        grabCursor: true,
        speed:500,
        loop: true,
        slidesPerView: 2,
        autoplay: true,
        paginationClickable: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination2',
          // dynamicBullets: true,
          clickable :true,
        },
        on:{
          transitionStart(){
            $('.eventTabs').removeClass('active')
            if (this.activeIndex%2 == 0) {
              $('.eventTabs').eq(1).addClass('active');
            }else {
              $('.eventTabs').eq(0).addClass('active');
            }
          }
        }
      },
    }
  },
  methods: {
    changeSwipers(val) {
      let tabs = $('.bannerTabs');
      tabs.removeClass('active');
      tabs.eq(val).addClass('active');
      // this.swiper.slideTo(val,500,false)
      // this.swiper2.slideTo(val,500,false)
    },
  },
  computed: {
    swiper() {
      return this.$refs.bannerSwiper.swiper
    },
    swiper2() {
      return this.$refs.eventSwiper.swiper
    }
  },
}
</script>
