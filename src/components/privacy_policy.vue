<template>
  <div class="rule">
    <!-- content -->
    <div class="content">
      <h2 class="page-title"><b>{{text.newsTitle}}</b><br><small>Privacy Policy</small></h2>
      <p class="page-desc width1200"><router-link :to="'/index?lan='+lan">首页</router-link>&nbsp;&gt;&nbsp;<span>加入我们</span></p>
      <section class="rules_desc width1000" v-html="text.html"></section>
      <div class="bottomDashed marginTop width1200"></div>
    </div>
  </div>
</template>
<style scoped>
 .rule {
    background: #f7f7f7;
    font-size: 0.7rem;
  }
  .rules_desc {
    color: #666666;
    text-align: left;
    padding-top: 30px;
    padding-bottom: 35px;
  }
</style>
<script>
export default {
  name: 'joinUs',
  data () {
    return {
      lan: '',
      text: {
        html: `
          <h3 style= 'font-size: 1.2rem;font-weight: 600;text-align: center;'>Groupy软件（网站）隐私政策</h3><br>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">一、请用户注意勿在使用Groupy服务中透露自己的各类财产帐户、银行卡、信用卡、第三方支付账户及对应密码等重要资料，否则由此带来的任何损失由用户自行承担。 </h4>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">二 、用户在使用Groupy服务时不可将自认为隐私的信息发表、上传至Groupy软件及网站，也不可将该等信息通过Groupy的服务传播给其他人，若用户的行为引起的隐私泄漏，由用户承担责任。</h4>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">三、Groupy在提供服务时可能会搜集用户信息，云动公司会明确告知用户，通常信息仅限于用户姓名、性别、年龄、出生日期、身份证号、家庭住址、教育程度、公司情况、所属行业、兴趣爱好等。</h4>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">四、 就下列相关事宜的发生，Groupy不承担任何法律责任：</h4>
          <p style="margin-bottom: 1rem;">1. 云动公司根据法律规定或相关政府、司法机关的要求提供您的个人信息；</p>
          <p style="margin-bottom: 1rem;">2. 由于用户将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人信息的泄漏，或其他非因云动公司原因导致的个人信息的泄漏；</p>
          <p style="margin-bottom: 1rem;">3.  任何由于黑客攻击、电脑病毒侵入造成的信息泄漏；</p>
          <p style="margin-bottom: 1rem;">4.  因不可抗力导致的信息泄漏；</p>
        `,
        newsTitle: '隐私政策'
      }
    }
  },
  methods: {
    changeInfo() {
      if(this.lan == 'zh-cn') {
        this.text = {
          html: `
            <h3 style= 'font-size: 1.2rem;font-weight: 600;text-align: center;'>Groupy软件（网站）隐私政策</h3><br>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">一、请用户注意勿在使用Groupy服务中透露自己的各类财产帐户、银行卡、信用卡、第三方支付账户及对应密码等重要资料，否则由此带来的任何损失由用户自行承担。 </h4>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">二 、用户在使用Groupy服务时不可将自认为隐私的信息发表、上传至Groupy软件及网站，也不可将该等信息通过Groupy的服务传播给其他人，若用户的行为引起的隐私泄漏，由用户承担责任。</h4>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">三、Groupy在提供服务时可能会搜集用户信息，云动公司会明确告知用户，通常信息仅限于用户姓名、性别、年龄、出生日期、身份证号、家庭住址、教育程度、公司情况、所属行业、兴趣爱好等。</h4>
          <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">四、 就下列相关事宜的发生，Groupy不承担任何法律责任：</h4>
          <p style="margin-bottom: 1rem;">1. 云动公司根据法律规定或相关政府、司法机关的要求提供您的个人信息；</p>
          <p style="margin-bottom: 1rem;">2. 由于用户将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人信息的泄漏，或其他非因云动公司原因导致的个人信息的泄漏；</p>
          <p style="margin-bottom: 1rem;">3.  任何由于黑客攻击、电脑病毒侵入造成的信息泄漏；</p>
          <p style="margin-bottom: 1rem;">4.  因不可抗力导致的信息泄漏；</p>
          `,
          newsTitle: '隐私政策'
        }
      }else {
        this.text = {
          html: `
            <h3 style= 'font-size: 1.2rem;font-weight: 600;text-align: center;'>プライバシーポリシー</h3>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">１．個人情報の利用目的について </h4>
            <p style="margin-bottom: 1rem;">当社は、お客様からご提供いただいた個人情報を以下の目的のために利用いたします。</p>
            <p style="margin-bottom: 1rem;padding-left:2rem;">(1)本サービス実施、提供のため<br>
             a.本サービスの拡充、改善、新規開発のための調査・分析のため<br>
             b.お問い合わせ、コイン対応のため<br>
             c.その他、お客様の同意を得た利用目的のため</p>
             <p style="margin-bottom: 1rem;padding-left:2rem;">(2)本サービスの利用状況等に係る統計情報の作成、本サービスまたは当社の運営するウェブサイト等における公表のため。</p>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">２．個人情報の提供について</h4>
            <p style="margin-bottom: 1rem;">当社は、以下に該当する場合、お客様の個人情報を第三者に提供することがあります。</p>
            <p style="margin-bottom: 1rem;padding-left:2rem;"><b>(1)法令に基づく場合など個人情報保護法に定める場合や、裁判所・警察等の公的機関から法律に基づく要請を受けた場合。</b></p>
            <p style="margin-bottom: 1rem;padding-left:2rem;"><b>(2)ユーザーの事前の承認、同意を得た場合。</b></p>
            <p style="margin-bottom: 1rem;padding-left:2rem;"><b>(3)本サービスを提供する上で必要となる業務委託先に開示する場合。</b></p>
            <p style="margin-bottom: 1rem;padding-left:2rem;"><b>(4)当社の合併、分社化、事業譲渡により事業が継承されユーザー情報を引き継ぐ場合。</b></p>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">３．個人情報の委託について</h4>
            <p style="margin-bottom: 1rem;">当社では、業務上必要な範囲で個人情報の取扱いを委託先へ委託することがあります。委託にあたり、十分な個人情報の保護水準を満たす委託先を選定、守秘義務を含む契約を締結いたします。<br>なお、現時点においては、個人情報の取扱いを委託先に委託しておりませんが、今後変更のある場合には、本案内にて開示してまいります。</p>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">４．個人情報の提供に関する任意性について</h4>
            <p style="margin-bottom: 1rem;">個人情報を当社にご提供いただくか否かは、お客様ご自身の任意です。ただし、当社が提供をお願いする個人情報をご提供いただけない場合や、ご提供いただいた個人情報に不備があった場合には、個人情報の取得目的通りのサービスがご提供できない場合があります。</p>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">５．個人情報の開示等について</h4>
            <p style="margin-bottom: 1rem;">当社は、お客様からご提供いただいた個人情報の利用目的の通知、開示、訂正、追加、削除、利用停止または第三者提供停止（以下、「開示等」という。）の請求に対応いたします。ご希望があるお客様は、本案内下部記載のGroupyユーザーサポート担当まで、ご連絡ください。</p>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">６．アクセス情報の収集について</h4>
            <p style="margin-bottom: 1rem;">本サービスにアクセスされた際に、インターネットに接続するときに使用されるIPアドレス、コンピュータに関する情報と接続情報（ブラウザの種類とバージョン、オペレーティングシステム、プラットフォームなど）、本サービスへのアクセス、ならびに当社サイトからのアクセスに関する、完全なURLの日付と時間を含む記録、表示した当社サイト内のページ情報を収集いたします。これらの情報は統計的に処理され、本サービスの各ページに表示する情報の制御や当社サイトの利便性の向上に利用いたします。</p>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">７．クッキーについて</h4>
            <p style="margin-bottom: 1rem;">本サービスでは、クッキーを使用する場合があります。これは本サービスの改善や利用状況の解析のため、ユーザーによるWEBサイト、アプリ、広告の閲覧状況を確認するもので、統計的なマーケティング情報として利用いたします。クッキー内に個人情報が含まれることはございません。また、個人情報の取得およびユーザー情報との関連付けを行うものではありません。</p>
            <h4 style="font-size: 0.9rem;font-weight: 600;margin-bottom: 0.6rem;">８．個人情報の開示等およびお問い合わせについて</h4>
            <p style="margin-bottom: 1rem;">個人情報の取り扱いに関するお問い合わせ、苦情などは以下のお問い合わせ先までお願いいたします。</p>
            <br><br>
            <p style="margin-bottom: 1rem;">ニュースジェット株式会社<br>〒130-0026　東京都墨田区両国2丁目2-10  702室<br>メール：contact@groupy.vip<br>個人情報保護管理者：Groupyユーザーサポート担当<br><br><br>制定日：平成29年06月10日</p>
          `,
          newsTitle: 'プライバシーポリシー'
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
