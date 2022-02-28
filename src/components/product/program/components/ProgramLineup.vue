<template>
  <ul class="list-program wide">
    <li v-if="program" v-for="(program, index) in programList" :key="index">
	    <a :href="parseInt(program['PROGRAM_CLASS_ID']) === 151 ? '#none' : program['PROGRAM_CLASS_LINK_URL'] + '?classId=' + program['PROGRAM_CLASS_ID']">
		    <div class="thumb">
			    <img :src="program['PROGRAM_CLASS_THUMBNAIL_IMAGE_URL']" :alt="program['PROGRAM_CLASS_NAME']">
		    </div>
		    <div class="info">
			    <span v-if="program['APPLY_PROGRESS'] === 'ONGOING'" class="flag-solid8">모집중</span>
			    <span v-else-if="program['APPLY_PROGRESS'] === 'OVER'" class="flag-solid9">모집마감</span>
			    <span v-else-if="program['APPLY_PROGRESS'] === 'NOT_STARTED'" class="flag-solid10">모집예정</span>
			    <p class="tit"><em>{{ program['PROGRAM_CLASS_NAME'] }}</em></p>
			    <p class="subtext">{{ program['PROGRAM_CLASS_SCHEDULE_GUIDE'] }}</p>
		    </div>
	    </a>
    </li>
  </ul>
</template>

<script>
import _ from 'lodash'
import * as STORE from '../../../../js/store'

export default {
  name: 'ProgramLineup',
  components: {},
  props: {
    classIdList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      programList: [],
      isProgramNull: true
    }
  },
  mounted () {
    let count = 0
    _.forEach(this.classIdList, (classId, index) => {
      STORE.getProgramClass(classId).then(result => {
        count++
        if (result['PROGRAM_CLASS']) {
          this.isProgramNull = false
          this.programList[index] = result['PROGRAM_CLASS']
        }
        if (count === this.classIdList.length) {
          this.$forceUpdate()
          if (this.isProgramNull) {
            this.$parent.$emit('program-null')
          }
        }
      })
    })
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
