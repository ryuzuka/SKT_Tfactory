<template>
  <div>
    <header class="header">
      <h1 class="logo"></h1></header>
  <div class="contents" v-if="verify === false">
    <p class="tit">체크인 키오스크</p>
    <p class="nottit">빠른 체크인을 통해 <br> 오프라인 매장을 편리하게 이용해 보세요!</p>
    <br>
    <img src="../assets/images/dummy/faceid.jpeg">
    <button @click="callNativeScheme" class="btn-wrap">빠른 체크인</button>
  </div>
    <div class="contents" v-if="verify === true">
      <p class="tit">{{name}} 고객님 </p>
      <p class="nottit">반갑습
        니다. :)</p>
      <button @click="logOutButton" class="btn-wrap">체크아웃</button>
    </div>
    <div class="contents" v-if="verify === 'ERROR'">
      <p class="tit">얼굴을 못찾았어요ㅠㅠ</p>
      <p class="nottit">모바일에서 등록 후 이용해주세요.</p>
    <button @click="logOutButton" class="btn-wrap">체크아웃</button>
    </div>
  </div>
</template>

<script>
import * as NATIVE from '../js/native.js'
import * as USER from '../js/user.js'

export default {
  name: 'page-verify',
  data () {
    return {
      verify: false,
      name: ''
    }
  },
  methods: {
    verifyComplete (response) {
      USER.getMyInfo(response.ACCESS_TOKEN).then(result => {
        if (result.RET_CODE !== 0) {
          this.verify = 'ERROR'
          return
        }
        this.name = result.NAME
        this.verify = true
      })
    },
    callNativeScheme () {
      NATIVE.faceRecognize('A')
    },
    logOutButton () {
      this.verify = false
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
}
.logo {
  display: inline-block;
  width:112px;
  height:32px;
  margin: 12px 0;
  background-image: url(/static/img/ico_logo.93052b0.svg);
  background-size: 200px auto;
  background-repeat: no-repeat;
  background-position: 0 -120px;
}
.tit {
  margin: 48px 0 20px;
  color: #000;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -.22px;
}
.nottit {
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -.08px;
  color: #505050;
}
.contents {
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 56px 32px 32px;
}
.btn-wrap {
  font-size: 18px;
  position: absolute;
  left: 32px;
  bottom: 32px;
  width: calc(100% - 64px);
  text-align: center;
  line-height: 65px;
  display: inline-block;
  color: #505050;
  background-color: #00b0eb59; /* Green */
}
</style>
