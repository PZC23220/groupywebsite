<template>
  <div class="joinUs">
    <!-- content -->
    <div class="content">
      <h2 class="page-title"><b>加入我们 </b><br><small>Join Us</small></h2>
      <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">首页</router-link>&nbsp;&gt;&nbsp;<span>加入我们</span></p>
      <p class="join-centent width1000">
        我们的001号员工，曾经是微软进入中国后的早期员工，不甘心错过中国科技的高速发展期，放弃去美国拿绿卡的机会，进入某公司把国际业务部由几个人做到几百人的规模，功成名就后从头再来； <br><br>
        我们的某技术，在BAT深耕多年，在本可以选择优越生活的时候选择了连续创业，一票兄弟相随，他让大家尊重的，不仅仅是技术，还有心气，还有人品。<br><br>
        这样的人，so ordinary啦，我们还有一箩筐~ <br><br>
<br><br>
        <b>我们在做什么？</b> <br><br>
        Groupy团队秉着对日本市场一如既往的热情与坚持的态度，抓住日本粉丝对偶像高消费的市场。从强烈的爱豆应援文化切入，带着共同的目标，致力打造一个可以让爱豆在线上曝光，展示才艺，获得粉丝打赏和会费分成的社群平台。 <br><br>
        <b>我们需要怎样的你？ </b><br><br>
        不论你的出身，但求你有梦想； <br><br>
        恰如其分的两个字——靠谱，因为无论什么工作，你只要接手，我们希望能够安心； <br><br>
        Boss说，只和员工谈梦想的企业不是一家合格的企业，所以我们期待与一起创业的兄弟姐妹们分享战果，除了提供行业内强有竞争力的薪酬待遇，还有多方位的贴心福利保证。 <br><br>
<br><br>
        <b>薪资： </b><br><br>
        1. 月薪 <br><br>
        2. 年终奖金 <br><br>
        3. 鼓励快速成长：一年两次调薪评估<br> <br>
<br><br>
        <b>福利待遇： </b><br><br>
        1. 六险一金（按全额工资入职即买） <br><br>
        2. 公司实行五天、弹性工作制 <br><br>
        3. 每年五天带薪年假起，之后每一年增加一天 <br><br>
        4. 每月一天的带薪病假（真的不要病假条哦，你说不舒服我们就相信你 ^_^） <br><br>
        5. 公司集体年度体检，每周三定期体育运动（羽毛球、篮球、游泳等），健康生活，快乐工作 <br><br>
        6. 年会、生日会、下午茶、团建旅游等说有必须一定要有 <br><br><br><br>
        <b>这么Special的公司，期待你的加入！</b><br><br>
        招聘启事请戳：<a href="https://www.lagou.com/gongsi/258342.html" target="_black">https://www.lagou.com/gongsi/258342.html</a>
      </p>
      <div class="bottomDashed marginTop width1200"></div>
    </div>
  </div>
</template>
<style scoped>
 .join-centent {
    margin: 2rem auto 4rem;
    text-align: left;
    padding: 0 1rem;
 }
 .join-centent b {
  color: #151515;
 }
 .join-centent a {
  color: #4fb2dd;
 }
</style>
<script>
export default {
  name: 'joinUs',
  data () {
    return {
      lan: '',
      t
    }
  },
  methods: {
    changeInfo() {

    },
    routeChange() {
      this.lan = this.$route.query.lan;
      this.changeInfo();
    }
  },
  watch: {
    '$route': 'routeChange'
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
