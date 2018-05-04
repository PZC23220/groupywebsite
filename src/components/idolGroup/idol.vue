<template>
  <div class="idolGroup_idol">
    <p class="page-desc width1200"><router-link to="/">首页</router-link>&nbsp;&gt;&nbsp;<router-link to="/idolGroup">入驻爱豆</router-link>&nbsp;&gt;&nbsp;<span>爱豆详情</span></p>
    <!-- content -->
    <div class="idol-content">
      <h3 class="group-title scrollReveal">naorin<span>(solo)</span></h3>
      <a href="" class="idol-sns idol-sns-desc"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
      <p class="group-title2 scrollReveal">Groupyのメインステージの利用時間はなんと90分！そこで、日本アイドルがFFACGに初登場！<br>推しメンと共にこの記念すべき一日を盛り上げましょう。</p>
      <img src="http://upload.groupy.vip/avatar/DE5FAA6E-8D3F-48C9-AE12-BB58222F2C14.jpg" class="group-img idol-avatar scrollReveal">
      <div class="group-relative scrollReveal">
        <h5>日本爱豆</h5>
        <div class="group-btns group-translateX"><router-link to="/idolGroup_group" data-hover="放課後プリンセス"><span>放課後プリンセス</span></router-link><router-link to="/idolGroup_group" data-hover="Kiss me Chopitto"><span>Kiss me Chopitto</span></router-link></div>
        <h5>国内爱豆</h5>
        <div class="group-btns group-translateX"><router-link to="/idolGroup_group" data-hover="DOKIDOKI48"><span>DOKIDOKI48</span></router-link><router-link to="/idolGroup_group" data-hover="pink so"><span>pink so</span></router-link></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"scoped>
  @import "../../styles/idolGroup.scss";
</style>
<script>
import scrollReveal from  'scrollreveal'
export default {
  name: 'idolGroup_idol',
  data () {
    return {
      scrollReveal:scrollReveal(),
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
  mounted() {
    this.scrollReveal.reveal('.scrollReveal', {
      duration: 600,
    });
  },
  computed: {
  },
  created: function() {
  }
}
</script>
