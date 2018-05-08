<template>
  <div class="event_index">
    <!-- content -->
    <div class="eventcontent">
      <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">{{text.index}}</router-link>&nbsp;&gt;&nbsp;<router-link :to="'/news?lan='+lan">{{text.newsTitle}}</router-link>&nbsp;&gt;&nbsp;<span>{{text.desc}}</span></p>
      <article class="animated fadeIn">
        <h3>{{article.title}}</h3>
        <time>{{article.time}}</time>
        <p class="article-p"  v-html="article.content"></p>
      </article>
      <div class="bottomDashed marginTop width1200"></div>
    </div>
  </div>
</template>
<style type="text/css" scoped>
  .article-p {
    text-align: left;
  }
</style>
<script>
export default {
  name: 'event_index',
  data () {
    return {
      lan: '',
      text: {
        index: 'ホーム',
        newsTitle: 'お知らせ',
        desc: '詳細',
      },
      article: {
        title: '在Groupy爱豆新年祭见学真正的打call',
        time: '2017.12.30',
        content: `&nbsp;&nbsp;&nbsp;&nbsp;2017年网络流行语“为xx打call”，小编最初以为是打电话给某人，后经过网友的“扫盲”，大致理解成为喜欢的人加油打气。但真正理解到这一词的含义，还是在由日系爱豆短视频APP Groupy举办的Groupy爱豆新年祭上。<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;2017年12月30日， Groupy首度邀约日本女子偶像来到中国17th萤火虫漫展（FFACG）登台表演。小编也受邀来到现场取材，和主舞台栏杆外的吃瓜群众一样，都充满着好奇，从日本远道而来的女子偶像团体，会有什么不同之处呢？<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;开演后，小编立刻就找到了答案：日系女子偶像演出，不仅在于舞台上爱豆拼尽全力歌舞表演，台下观众的应援也是演出中非常重要的部分。内场的观众放弃了座席，拥挤在舞台前方的空地，喊着极具节奏感的日文口号，与舞台上的爱豆遥相呼应。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/1.jpg"/><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/2.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;小编拉住一个Groupy的工作人员了解到，这种根据歌曲的节奏点和歌词内容，由粉丝自发编出的统一应援口号和动作，俗称打call，日语为「コール」，是对台上偶像支持与喜爱情感的集中表达，看似疯狂，实则理性。<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;台上台下的互动气氛，即使是在外场看热闹的路人，都会被气氛所感染，情不自禁地挥起手跟着打call。这才是真正意义上的打call。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/3.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;此次应Groupy之邀登台FFACG主舞台的偶像团体有：<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、 来自香港的日系女子偶像团体Ariel Project，她们以纯日语偶像歌舞为利器，由于有着语言交流的便利，2017年里已经在中国网罗一票国内的忠实粉丝；<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/4.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、 每天下午4点准时由学生变身为公主的放学后princess，她们的歌舞优雅而又充满活力，结团7年，初次来中国表演，台下有不少追随她们远道而来的日本粉丝；<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/5.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、 由日本美少女评选Miss ID选拔出5位成员组成的Wi-Fi-5，凭借【妖怪公寓的幽雅日常】的主题曲「开始的College」出道。来自中国湖南的成员西蒙还担任了该团的中文MC。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/6.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、 担当数部著名PC游戏厂牌出品的游戏主题曲的鈴原知花，作为solo偶像，在舞台上的专注度和控场能力，不逊于其他3组团体。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/7.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;主舞台表演结束后，Groupy还组织了爱豆和粉丝们在主舞台进行了大合照。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/8.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;不少粉丝觉得意犹未尽，又纷纷跑到了Groupy展位排队，和爱豆们进行合影、握手、聊天。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/9.jpg"/><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/10.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;据了解主办方Groupy是一款国内唯一主打偶像粉丝互动的社交APP，具有短视频投稿功能及在线直播功能，令粉丝应援打call不再局限于现场舞台前，即使到不了现场，也可以在线云打call，为偶像加油喝彩。<br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;这一次在国内举办了为期两天的爱豆新年祭，特地邀请呼声最高的爱豆们来中国和粉丝共同度过最后的2017，给他们制造一个难忘的回忆。活动当天Groupy还在APP上实时现场直播，让没能来到场的粉丝也能享受这样美好时刻。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/11.jpg"/><br>
        &nbsp;&nbsp;&nbsp;&nbsp;这群热情又活泼的小偶像虽然只参加FFACG主舞台的第一天表演，但她们次日在Tu凸空间参加了Groupy爱豆新年祭第二弹一新年倒数狂欢LIVE，一天3场演出，和粉丝们一起倒数跨年，迎接2018。<br><br>
        <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/12.jpg"/><br>`
      }
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          index: '首页',
          newsTitle: '大事记',
          desc: '详情',
        }
        switch(Number(this.$route.query.id)) {
          case 1:
            this.article = {
              title: ' 新产品Groupy项目启动公告',
              time: '2017.06.06',
              content: '面向日系爱豆与粉丝提供的应援类短视频APP Groupy开发项目正式启动！<br><br>Groupy将致力于为爱豆和粉丝打造一个可以亲密互动的线上平台。<br><br>在Groupy，我们将为爱豆提供发布视频、与粉丝留言互动，物贩等具有强烈科技网络时代特色的功能。<br><br>在Groupy，粉丝可以随时随地与应援、近距离守护自己的爱豆。<br><br>更令人惊喜的是，Groupy将在中日两国同时提供服务！<br><br>开发时间预期需要两个月，敬请期待！'
            }
            break;
          case 2:
            this.article = {
              title: 'Groupy官方网站正式发布！',
              time: '2017.07.02',
              content: '伴随着面向日系爱豆、粉丝所提供的应援类短视频APP的盛大发布，Groupy官方网站从今天起正式对外公开。<br><br>URL：<a style="color:#fc6b9f;" href="http://groupy.vip/" target="_blank">http://groupy.vip</a><br><br>由于Groupy是一款面向中日两国提供服务的产品，我们在官网提供了中、日两种语言方便大家使用。<br><br>官网将用于公布Groupy最新资讯、定期更新高质量的爱豆短视频，欢迎随时点击查看！'
            }
            break;
          case 3:
            this.article = {
              title: '在Groupy爱豆新年祭见学真正的打call',
              time: '2017.12.30',
              content: `&nbsp;&nbsp;&nbsp;&nbsp;2017年网络流行语“为xx打call”，小编最初以为是打电话给某人，后经过网友的“扫盲”，大致理解成为喜欢的人加油打气。但真正理解到这一词的含义，还是在由日系爱豆短视频APP Groupy举办的Groupy爱豆新年祭上。<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;2017年12月30日， Groupy首度邀约日本女子偶像来到中国17th萤火虫漫展（FFACG）登台表演。小编也受邀来到现场取材，和主舞台栏杆外的吃瓜群众一样，都充满着好奇，从日本远道而来的女子偶像团体，会有什么不同之处呢？<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;开演后，小编立刻就找到了答案：日系女子偶像演出，不仅在于舞台上爱豆拼尽全力歌舞表演，台下观众的应援也是演出中非常重要的部分。内场的观众放弃了座席，拥挤在舞台前方的空地，喊着极具节奏感的日文口号，与舞台上的爱豆遥相呼应。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/1.jpg"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/2.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;小编拉住一个Groupy的工作人员了解到，这种根据歌曲的节奏点和歌词内容，由粉丝自发编出的统一应援口号和动作，俗称打call，日语为「コール」，是对台上偶像支持与喜爱情感的集中表达，看似疯狂，实则理性。<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;台上台下的互动气氛，即使是在外场看热闹的路人，都会被气氛所感染，情不自禁地挥起手跟着打call。这才是真正意义上的打call。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/3.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;此次应Groupy之邀登台FFACG主舞台的偶像团体有：<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、 来自香港的日系女子偶像团体Ariel Project，她们以纯日语偶像歌舞为利器，由于有着语言交流的便利，2017年里已经在中国网罗一票国内的忠实粉丝；<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/4.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、 每天下午4点准时由学生变身为公主的放学后princess，她们的歌舞优雅而又充满活力，结团7年，初次来中国表演，台下有不少追随她们远道而来的日本粉丝；<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/5.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、 由日本美少女评选Miss ID选拔出5位成员组成的Wi-Fi-5，凭借【妖怪公寓的幽雅日常】的主题曲「开始的College」出道。来自中国湖南的成员西蒙还担任了该团的中文MC。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/6.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、 担当数部著名PC游戏厂牌出品的游戏主题曲的鈴原知花，作为solo偶像，在舞台上的专注度和控场能力，不逊于其他3组团体。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/7.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;主舞台表演结束后，Groupy还组织了爱豆和粉丝们在主舞台进行了大合照。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/8.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;不少粉丝觉得意犹未尽，又纷纷跑到了Groupy展位排队，和爱豆们进行合影、握手、聊天。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/9.jpg"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/10.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;据了解主办方Groupy是一款国内唯一主打偶像粉丝互动的社交APP，具有短视频投稿功能及在线直播功能，令粉丝应援打call不再局限于现场舞台前，即使到不了现场，也可以在线云打call，为偶像加油喝彩。<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;这一次在国内举办了为期两天的爱豆新年祭，特地邀请呼声最高的爱豆们来中国和粉丝共同度过最后的2017，给他们制造一个难忘的回忆。活动当天Groupy还在APP上实时现场直播，让没能来到场的粉丝也能享受这样美好时刻。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/11.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;这群热情又活泼的小偶像虽然只参加FFACG主舞台的第一天表演，但她们次日在Tu凸空间参加了Groupy爱豆新年祭第二弹一新年倒数狂欢LIVE，一天3场演出，和粉丝们一起倒数跨年，迎接2018。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/12.jpg"/><br>`
            }
            break;
          case 4:
            this.article = {
              title: '[Groupy · 新年祭] 与小偶像的跨年狂欢趴',
              time: '2017.12.31',
              content: `2017年12月31号，Groupy爱豆新年祭活动主场由萤火虫漫展转到了广州tu凸空间。在这里，我们一同为心仪的爱豆们打call应援，一同在旧年倒数声中翻开了新年新篇章的扉页。<br><br>
              相比萤火虫主舞台，tu凸空间虽稍显“迷你”，但比起空旷的舞台，小型舞台更有日本秋叶原地下偶像Live的感觉，不仅拉近了爱豆与粉丝的距离，更拉近了彼此的心。<br><br>
              本次跨年派对，爱豆们同样为我们带来了精彩纷呈的Live演出，下面请欣赏由G君为大家甄选的一些精彩片段吧！<br><br>
              <p style="text-align: center;">铃原知花</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-1.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-2.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-3.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-4.webp"/><br><br>
              <p style="text-align: center;">Wi-Fi-5</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-5.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-6.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-7.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-8.webp"/><br><br>
              <br><p style="text-align: center;">放学后Princess</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-9.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-10.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-11.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-12.webp"/><br><br>
              <p style="text-align: center;">Ariel Project</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-13.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-14.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-15.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-16.webp"/><br><br>
              如何说30号漫展Live的火爆，部分是蹭一些单纯为逛漫展而来的吃瓜群众的人气的话，那么，31号这天跨年Live现场的火爆，完全就是靠真爱粉用爱发电撑起来的了！<br><br>
             下面就让我们来感受下真爱粉的助力吧：<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/0.gif"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/1.gif"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/2.gif"/><br><br>
              都说人是一种氛围的动物，这话实在不假。平时走内秀路线的小G，受各位打call大佬和现场氛围的带动，也开始放飞自我，和大家一起尬起舞来了~~<br><br>
              最后，爱豆和我们共度跨年夜，在最后一秒欢闹的倒数声中，在快门按下的那一道闪光中，定格下了你我在2017最后一秒与2018最初一刻的样子，嘴角边一抹抹由衷绽开的微笑。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-17.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-18.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-19.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-20.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-21.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-22.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-23.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-24.webp"/><br><br>
              Groupy爱豆新年祭活动回顾到此也算是画上句点啦。2018，Groupy祝大家在新的一年里事事顺遂。新的一年，Groupy也会一直陪大家一同成长进步，努力举办更多精彩活动继续跟大家一起嗨！！！`
            }
            break;
          default:
            console.log(this.$route.query.id);
            break;
        }
      }else {
        this.text = {
          index: 'ホーム',
          newsTitle: 'お知らせ',
          desc: '詳細',
        }
        switch(Number(this.$route.query.id)) {
          case 1:
            this.article = {
              title: ' 新規アプリ「Groupy」開発開始！',
              time: '2017.06.06',
              content: 'アイドル・アイドルファン向けの新規アプリ「Groupy」の開発が決定しました。<br><br>Groupyはアイドルとアイドルファンを親密につなぐプラットフォームとして、動画・ライブ配信・掲示板・限定コンテンツ販売などのインターネット時代ならではの機能を搭載します。<br><br>いつでも、どこでも、マイアイドルを応援できるようになります。マイアイドルを身近に守りましょう。<br><br>しかも、日中同時配信予定！<br><br>開発期間は2ヶ月を予定しています。ぜひお楽しみにしてください。'
            }
            break;
          case 2:
            this.article = {
              title: '「Groupy」ホームページリリースのお知らせ',
              time: '2017.07.02',
              content: 'アイドル・アイドルファン向けサービス「Groupy」の開発に伴い、ホームページも本日から、初公開させていただきます。<br><br>URLはこちらです。<a style="color:#fc6b9f;" href="http://groupy.vip/" target="_blank">http://groupy.vip</a><br><br>アプリは日中配信のため、ホームページの言語も中国語と日本語二つを用意しました。<br><br>Groupyに関する情報や参加するアイドルの動画を定期的に更新しますので、ぜひご覧ください。'
            }
            break;
          case 3:
            this.article = {
              title: '【Groupy New Year Live】で「打call」を実感しました！',
              time: '2017.12.30',
              content: `&nbsp;&nbsp;&nbsp;&nbsp;2017年から、中国では「打call」という新しい単語がとても流行っています。<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;「打call」って、一見、「電話する」のように見えますが、違います。電話とは全く関係ありませんよ。「打call」は実はなんと、日本から来ています！<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;日本のライブ文化で、好きなアイドルを応援するために、ファンたちが一生懸命ペンライトを振ったり、リズム感の良い動きを揃ってやったり、応援の言葉を一斉に叫ぶなどの、「コール」のことを、中国語で「打call」と言います。つまり、「応援する」意味になります。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/1.jpg"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/2.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;これは、日本由来のアイドル文化が、中国でも形成・成長し始めていることを意味するのではないかと。<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;そして、中国最大級のアニメゲームのイベント第17回Firefly ACG Festival（以下FFACG）において、「アイドル応援アプリ」Groupyは日本の女子アイドルグループを招待し、【Groupy New Year Live】を開催しましたので、中国本土での正真正銘の「コール」が見られました！<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/3.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;この度、出演していただいたアイドルグループは以下の通りです。<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、香港を拠点とし、「人魚姫のように、歌声で皆の心を癒やすアイドル文化を世界にお届け」理念を持つダンス&ボーカルユニットであるAriel Project。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/4.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;２、16時を境にして、カチューシャはティアラ、制服衣装はプリンセス衣装に変わり、「放課後、プリンセスに変身」して活動する学園アイドル放課後プリンセス。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/5.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;３、講談社が主催するオーディションのミスiD2016、2017ファイナリスト５名によるアイドルWi-Fi-5。現場で、中国メンバーのさぃもんちゃんは中国語MCとして活躍しましたよ。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/6.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;４、人気PCゲームメーカーの主題曲やタイアップ曲歌手として活躍しているソロアイドル鈴原知花さん。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/7.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;ライブが終わってから、アイドルたちとファンが一緒に写真を撮りました！全員いい笑顔ですね。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/8.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;Groupyの専用ブースにはファンがいっぱい集まっています。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/9.jpg"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/10.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;Groupyはファンが共にアイドルを応援できるショート動画アプリ。アイドルとファンを親密につなぐプラットフォームとして、動画・ライブ配信・掲示板・限定コンテンツ販売などのインターネット時代ならではの機能を搭載します。ここでは、自分の推しメンのいつもと違うかわいい一面を発見できます！<br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;今回の二日間の【Groupy New Year Live】では、日本のアイドルと中国のファンが一緒に2017年の最後の忘れられない思い出を作りました。ライブ現場に参加できない方々も、Groupyアプリで生配信を楽しめました。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/11.jpg"/><br>
              &nbsp;&nbsp;&nbsp;&nbsp;FFACGイベントの翌日は、【Groupy New Year Live】第二弾、2018年カウントダウンライブの日になります。アイドルたちはライブハウス「Tu凸空间」でファンと盛り上がって新年を迎えました。<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/20171230/12.jpg"/><br>`
            }
            break;
          case 4:
            this.article = {
              title: '【Groupy New Year Live】第二弾　2018年カウントダウンライブ',
              time: '2017.12.31',
              content: `2017年12月31日から2018年１月１日にかけて、【Groupy New Year Live】第二弾としてのカウントダウンライブが広州にあるライブハウス「tu凸空间」で開催されました。アイドルたちの歌声とファンの歓声の中で、華々しく新年のはじまりを告げました。<br><br>
              それでは、当日素敵な時間を振り返りましょう！<br><br>
              ライブ写真集<br><br>
              <p style="text-align: center;">鈴原知花</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-1.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-2.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-3.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-4.webp"/><br><br>
              <p style="text-align: center;">Wi-Fi-5</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-5.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-6.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-7.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-8.webp"/><br><br>
              <br><p style="text-align: center;">放課後プリンセス</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-9.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-10.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-11.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-12.webp"/><br><br>
              <p style="text-align: center;">Ariel Project (アリエルプロジェクト)</p>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-13.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-14.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-15.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-16.webp"/><br><br>
              何時間も及ぶイベントですが、どこを切り取っても見応えたっぷり！ファンたちの反応もすごくよかったですよ！随分盛り上がりましたね。<br><br>
             年越しカウントダウン<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/0.gif"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/1.gif"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/2.gif"/><br><br>
              ライブのラストは全員でカウントダウンしました。2018年は皆さんにとって素敵な一年になりますように〜~~<br><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-17.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-18.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-19.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-20.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-21.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-22.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-23.webp"/><br>
              <img style="display: block;width: 100%;max-width: 800px;margin: 10px auto;box-sizing: border-box;" src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/live-24.webp"/>`
            }
            break;
          default:
            console.log(this.$route.query.id);
            break;
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
