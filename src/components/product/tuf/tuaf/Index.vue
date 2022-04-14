<template>
	<div class="contents" ref="contents">
    <div class="details sticky">
      <div class="details-header" style="padding: 32px 32px 144px;">
        <h2 class="main-title">
          <span>대학생들의 작품으로<br>꾸며진 팝업 전시</span><br>
          <strong class="point-text">T University<br>Art Festival</strong>
        </h2>
        <p style="line-height: 24px; margin-top: 18px;">
          TUAF Part 1.  : 2022.04.11 ~ 5.06 (4주)<br>
          TUAF Part 2.  : 2022.05.07 ~ 5.31 (4주)
        </p>
      </div>
      <div class="button_area">
          <div class="btn-wrap">
	          <router-link class="btn-line big" to="/experience/tua/tuaf_part1">part 1</router-link>
          </div>
          <div class="btn-wrap">
            <router-link class="btn-line big" to="/experience/tua/tuaf_part2">part 2</router-link>
          </div>
      </div>
    </div>
	</div>
</template>

<script>
import Header from '../../../common/Header'

export default {
  name: 'TUAF',
  components: {
	  Header
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
<style lang="scss" scoped>
.main-title{
  margin-bottom: 0px;
  font-size: 30px;
  line-height: 44px;
  font-weight: bold;
  letter-spacing: -0.21px;
  span{
    color: #000;
  }
  .point-text {
    color: #3617ce;
    font-family: 'Noto Sans KR', sans-serif;
    &:after {
      content:'';
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 5px;
      border-radius: 100%;
      background-color: #ff404e;
    }
  }
}
.button_area{
  margin-bottom: 22px;
  .btn-wrap{
    padding: 0 32px;
    [class^="btn"].big {
      margin: 10px 0px;
      line-height: 20px;
    }
  }
}
</style>
