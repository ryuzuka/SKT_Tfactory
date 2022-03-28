<template>
	<div class="lineup">
		<ul>
			<li v-for="(program, idx) in programList" :key="idx">
				<div class="date">
					<span>{{ program.date }}<br>{{ program.day }}</span>
				</div>
				<div class="card">
					<a :href="program['PROGRAM_CLASS_LINK_URL'] + '?classId=' + program['PROGRAM_CLASS_ID']">
						<div class="text">
							<p class="name">{{ program.name }}</p>
							<em v-if="program['APPLY_PROGRESS'] === 'ONGOING'" class="flag-solid8">모집중</em>
							<em v-else-if="program['APPLY_PROGRESS'] === 'OVER'" class="flag-solid9">모집마감</em>
							<em v-else-if="program['APPLY_PROGRESS'] === 'NOT_STARTED'" class="flag-solid10">모집예정</em>
							<p class="time">{{ program.time }}</p>
						</div>
						<div class="image">
							<img :src="program['PROGRAM_CLASS_THUMBNAIL_IMAGE_URL']" :alt="program.name">
						</div>
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import _ from 'lodash'
import * as STORE from '../../../../js/store'

export default {
  name: 'ProgramLineupNew',
  components: {},
  props: {
    lineList: {
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
  mounted: function () {
    let count = 0
    _.forEach(this.lineList, (lineList, index) => {
      STORE.getProgramClass(lineList.classId).then(result => {
        count++
        if (result['PROGRAM_CLASS']) {
          this.isProgramNull = false
          this.programList[index] = result['PROGRAM_CLASS']
        }
        if (count === this.lineList.length) {
          this.$forceUpdate()
          if (this.isProgramNull) {
            this.$parent.$emit('program-null')
          }
          _.merge(this.programList, this.lineList)
        }
      })
    })
  },
  methods: {}
}
</script>

<style lang="scss">
</style>
