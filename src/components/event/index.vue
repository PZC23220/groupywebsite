<template>
  <div class="event_index">
    <!-- content -->
    <div class="eventcontent">
      <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.eventTitle}}</span></p>
      <ul class="event-list">
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgContent"><img v-lazy="text.event1Img"></router-link>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgTitle" v-html="text.event1Title"></router-link><br>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgDesc">{{text.event1Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgContent"><img v-lazy="text.event2Img"></router-link>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgTitle" v-html="text.event2Title"></router-link><br>
          <router-link :to="'/event_desc?id=3&lan='+lan" class="event-imgDesc">{{text.event2Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img v-lazy="text.event3Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event3Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event3Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img v-lazy="text.event4Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event4Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event4Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img v-lazy="text.event5Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event5Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event5Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgContent"><img v-lazy="text.event6Img"></router-link>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgTitle" v-html="text.event6Title"></router-link><br>
          <router-link :to="'/event_desc?id=4&lan='+lan" class="event-imgDesc">{{text.event6Time}}</router-link>
        </li>
        <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgContent"><img v-lazy="text.event7Img"></router-link>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgTitle" v-html="text.event7Title"></router-link><br>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgDesc">{{text.event7Time}}</router-link>
        </li>
         <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgContent"><img v-lazy="text.event8Img"></router-link>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgTitle" v-html="text.event7Title"></router-link><br>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgDesc">{{text.event7Time}}</router-link>
        </li>
         <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgContent"><img v-lazy="text.event9Img"></router-link>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgTitle" v-html="text.event7Title"></router-link><br>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgDesc">{{text.event7Time}}</router-link>
        </li>
         <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgContent"><img v-lazy="text.event10Img"></router-link>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgTitle" v-html="text.event7Title"></router-link><br>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgDesc">{{text.event7Time}}</router-link>
        </li>
         <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgContent"><img v-lazy="text.event11Img"></router-link>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgTitle" v-html="text.event7Title"></router-link><br>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgDesc">{{text.event7Time}}</router-link>
        </li>
         <li class="scrollreveal animated fadeIn">
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgContent"><img v-lazy="text.event12Img"></router-link>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgTitle" v-html="text.event7Title"></router-link><br>
          <router-link :to="'/event_desc?id=5&lan='+lan" class="event-imgDesc">{{text.event7Time}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../styles/event.scss";
</style>
<script>
import scrollReveal from  'scrollreveal'
export default {
  name: 'event_index',
  data () {
    return {
      scrollReveal:scrollReveal(),
      text: {
        index: 'ホーム',
        eventTitle: 'イベント現場',
        event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
        event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event1Time: '2017/12/30',
        event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
        event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event2Time: '2017/12/30',
        event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
        event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
        event3Time: '2017/12/30',
        event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
        event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event4Time: '2017/12/31',
        event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
        event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event5Time: '2017/12/31',
        event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
        event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
        event6Time: '2017/12/31',
        event7Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
        event7Time: '2018/05/01',
        event7Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%881.jpg',
        event8Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%882.jpg',
        event9Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%883.jpg',
        event10Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%884.jpg',
        event11Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%885.jpg',
        event12Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%886.jpg',
      }
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          index: '首页',
          eventTitle: '活动现场',
          event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
          event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event1Time: '2017/12/30',
          event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
          event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event2Time: '2017/12/30',
          event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
          event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event3Time: '2017/12/30',
          event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
          event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event4Time: '2017/12/31',
          event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
          event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event5Time: '2017/12/31',
          event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
          event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event6Time: '2017/12/31',
          event7Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
          event7Time: '2018/05/01',
          event7Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%881.jpg',
          event8Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%882.jpg',
          event9Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%883.jpg',
          event10Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%884.jpg',
          event11Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%885.jpg',
          event12Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%886.jpg',
        }
      }else {
        this.text = {
          index: 'ホーム',
          eventTitle: 'イベント現場',
          event1Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-1.jpg',
          event1Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event1Time: '2017/12/30',
          event2Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-2.jpg',
          event2Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event2Time: '2017/12/30',
          event3Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-3.jpg',
          event3Title: 'Groupy&nbsp;&middot;&nbsp;in 17th FFACG',
          event3Time: '2017/12/30',
          event4Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-4.jpg',
          event4Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event4Time: '2017/12/31',
          event5Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-5.jpg',
          event5Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event5Time: '2017/12/31',
          event6Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/index-event-6.jpg',
          event6Title: 'Groupy&nbsp;&middot;&nbsp;New Year Live',
          event6Time: '2017/12/31',
          event7Title: 'Groupy&nbsp;&middot;&nbsp;in 18th FFACG',
          event7Time: '2018/05/01',
          event7Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%881.jpg',
          event8Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%882.jpg',
          event9Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%883.jpg',
          event10Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%884.jpg',
          event11Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%885.jpg',
          event12Img: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20180501/%E4%BA%94%E6%9C%886.jpg',
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
  mounted() {
    this.scrollReveal.reveal('.scrollReveal', {
      duration: 600,
    });
  },
  computed: {

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
