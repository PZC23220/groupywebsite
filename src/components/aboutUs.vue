<template>
  <div class="aboutUs">
    <!-- content -->
    <div class="content">
      <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.aboutUs}}</span></p>
      <div class="pinkBg-content width1000"><span class="pinkBg">{{text.company}}</span></div>
      <table class="width1000 ">
        <tr class="scrollReveal">
          <td class="tr-title">{{text.headOffice}}</td>
          <td class="bigImg">{{text.headOfficeName}}</td>
        </tr>
        <tr class="scrollReveal">
          <td class="tr-title">{{text.address}}</td>
          <td class="bigImg">{{text.headOfficeAddress}}</td>
        </tr>
        <tr class="scrollReveal">
          <td class="tr-title"></td>
          <td class="bigImg"><a href="http://j.map.baidu.com/dQ-dP" target="_black"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/yundong.jpg"></a></td>
        </tr>
         <tr class="scrollReveal">
          <td class="tr-title">{{text.BranchOffice}}</td>
          <td class="bigImg"></td>
        </tr>
        <tr class="scrollReveal">
          <td class="tr-title">{{text.address}}</td>
          <td class="bigImg">{{text.BranchOfficeAddress}}</td>
        </tr>
        <tr class="scrollReveal">
          <td class="tr-title"></td>
          <td class="bigImg"><a href="https://goo.gl/maps/wn71pB72Zgp" target="_black"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/liangguo.jpg"></a></td>
        </tr>
      </table>
      <div class="bottomDashed width1200 scrollReveal"></div>
      <div class="pinkBg-content width1000"><span class="pinkBg">{{text.contact}}</span></div>
       <table class="width1000">
        <tr>
          <td class="tr-title">{{text.email}}</td>
          <td class="bigImg"><a :href="'mailto:'+text.emailNumber">{{text.emailNumber}}</a></td>
        </tr>
        <tr v-if="text.weibo">
          <td class="tr-title">{{text.weibo}}</td>
          <td class="bigImg"><a href="https://weibo.com/Groupy" class="weibo" target="_black">@GGroupy</a></td>
        </tr>
        <tr v-if="text.public">
          <td class="tr-title">{{text.public}}</td>
          <td class="bigImg">{{text.publicName}}</td>
        </tr>
      </table>
      <div class="bottomDashed marginTop width1200"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 @import "../styles/aboutUs.scss";
</style>
<script>
import scrollReveal from  'scrollreveal'
export default {
  name: 'aboutUs',
  data () {
    return {
      scrollReveal:scrollReveal(),
      lan: '',
      text: {
        index: '首页',
        aboutUs: '关于我们',
        company: '公司简介',
        headOffice: '总公司',
        BranchOffice: '分公司',
        headOfficeAddress: '广东省广州市天河区中山大道西89号华景软件园A栋16楼9-12',
        BranchOfficeAddress: '東京都墨田区両国2丁目2-10',
        headOfficeName: '广州市云动网络有限公司',
        BranchOfficeName: '株式会社Cloudtrons',
        address: '地址',
        contact: '联系方式',
        email: '邮箱',
        weibo: '微博',
        public: '公众号',
        publicName: 'Groupy三次元日系爱豆短视频',
        emailNumber: 'contact@groupy.vip'
      }
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          index: '首页',
          aboutUs: '关于我们',
          company: '公司简介',
          headOffice: '总公司',
          BranchOffice: '分公司',
          headOfficeAddress: '广东省广州市天河区中山大道西89号华景软件园A栋16楼9-12',
          BranchOfficeAddress: '东京都墨田区两国2丁目2-10',
          headOfficeName: '广州市云动网络有限公司',
          BranchOfficeName: '株式会社Cloudtrons',
          address: '地址',
          contact: '联系方式',
          email: '邮箱',
          weibo: '微博',
          public: '公众号',
          publicName: 'Groupy三次元日系爱豆短视频',
          emailNumber: 'contact@groupy.vip'
        }
      }else {
        this.text = {
          index: 'ホーム',
          aboutUs: '会社概要',
          company: '会社概要',
          headOffice: '本社',
          BranchOffice: '支社',
          headOfficeAddress: '中国広東省広州市天河区中山大道西89番天河ソフトウェアパークA#16F北9-12',
          BranchOfficeAddress: '東京都墨田区両国2丁目2-10',
          headOfficeName: '広州市雲動網絡有限公司',
          BranchOfficeName: '株式会社Cloudtrons',
          address: '地址',
          contact: 'お問合せ',
          email: 'Email',
          emailNumber: 'contact@cloudtrons.com'
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
