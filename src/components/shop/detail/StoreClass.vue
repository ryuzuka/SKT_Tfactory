<template>
  <div class="row programs">
    <h3 class="subtit">{{ $t('shop.program-title') }} <strong class="point-text">Class</strong></h3>
    <div class="scroll-wrap">
      <ul class="list-program scroll">
        <li v-for="(crewClass, index) in classList" :key="index">
          <a :href="crewClass.LINK_URL + '?classId=' + crewClass.PROGRAM_CLASS_ID">
            <div class="lector">
              <span class="img"><img :src="crewClass.PROGRAM_TUTOR_IMAGE_URL" alt=""></span>
              <p class="cate"><span>{{crewClass.THUMBNAIL_TITLE}}</span>{{crewClass.THUMBNAIL_SUBTITLE}}</p>
            </div>
            <div class="thumb"><img :src="crewClass.THUMBNAIL_IMAGE_URL" alt=""></div>
            <p class="tit">{{crewClass.NAME}}</p>
            <p class="subtext">{{crewClass.SCHEDULE_GUIDE}}</p>
          </a>
        </li>
      </ul>
      <div class="btn-wrap" v-show="isClassMore">
        <router-link class="btn-more" to="/main/program"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import * as STORE from '../../../js/store.js'

export default {
  name: 'StoreClass',
  data () {
    return {
      classList: [],
      isClassMore: false
    }
  },
  methods: {},
  mounted () {
    STORE.getProgramClassList().then(result => {
      result = result['CLASSES']

      _.forEach(result, (program, index) => {
        if (program['DISPLAY_IN_CLASS'] === 1) {
          this.classList.push(program)
        }
      })
      this.classList.sort(function (a, b) {
        return a['ORDER_IN_TODAY'] - b['ORDER_IN_TODAY']
      })
      if (this.classList.length > 3) {
        this.isClassMore = true
        this.classList = this.classList.splice(0, 3)
      }
    })
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/shop';
@import 'src/assets/css/main';
</style>
