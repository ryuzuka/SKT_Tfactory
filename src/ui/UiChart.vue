<template>
  <div class="chart-donut" :id="id" ref="chart"></div>
</template>

<script>
export default {
  name: 'UiChart',
  props: {
    id: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 300
    },
    innerWidth: {
      type: Number,
      default: 108
    },
    height: {
      type: Number,
      default: 300
    },
    data: {
      type: Array,
      default: () => []
    },
    size: {
      type: Array,
      default: () => [29, 29, 22, 22]
    },
    color: {
      type: Array,
      default: () => ['url(#grad)', '#787878', '#d0d0d0', '#e8e8e8']
    }
  },
  data () {
    return {
      svg: null,
      arc: null,
      pie: null
    }
  },
  computed: {
    innerRadius () {
      return Math.min(this.width, this.height) / 2 - this.innerWidth
    }
  },
  watch: {
    data (v) {
      this.$d3.select('svg').remove()
      this.init()
      this.start()
    }
  },
  methods: {
    init () {
      this.svg = this.$d3.select('#' + this.id)
        .append('svg').attr('width', this.width).attr('height', this.height).attr('style', 'transform: rotate(180deg)')
        .append('g').attr('transform', 'translate(' + (this.width / 2) + ',' + (this.height / 2) + ')')
      this.arc = this.$d3.arc().innerRadius(this.innerRadius).outerRadius((d, i) => this.innerRadius + this.size[i])
      this.pie = this.$d3.pie().sort(null).value(d => d)
    },
    start () {
      this.svg.selectAll('path')
        .data(this.pie(this.data))
        .enter().append('path')
        .attr('fill', (d, i) => this.color[i])
        .attr('d', this.arc)

      let grads = this.svg.append('defs').append('linearGradient').attr('cx', 0).attr('cy', 0).attr('id', 'grad').attr('gradientTransform', 'rotate(30)')
      grads.append('stop').attr('offset', '0%').style('stop-color', '#3617CE')
      grads.append('stop').attr('offset', '100%').style('stop-color', '#3617CE')

      let filter = this.svg.append('defs').append('filter').attr('id', 'shadow').attr('x', '-40%').attr('y', '-40%').attr('width', '180%').attr('height', '180%')
      filter.append('feDropShadow').attr('dx', '10').attr('dy', '-10').attr('stdDeviation', '10').attr('flood-color', 'rgba(0,0,0,.28)').attr('flood-opacity', '.7')
    }
  },
  mounted () {
    this.init()
    this.start()
  }
}
</script>
