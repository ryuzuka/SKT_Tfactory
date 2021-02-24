<template>
  <div class="dropdown">
    <button type="button" class="btn-dropdown" @click="toggleList" @blur="onBlur($event)">
      <span>{{ selectedText || placeholderText }}</span>
    </button>

    <ul class="list-dropdown" style="display: block" v-show="isOpen">
      <li v-for="(list, index) in data" :key="index" :class="{'active': isActive[index], 'disabled': list.disabled}">
        <button class="list-button" v-if="tag === 'button'" :disabled="list.disabled" @click="clickList(list.value)">{{ list.text }}</button>
        <a class="list-button" v-else-if="tag === 'a'" href="#" :disabled="list.disabled" @click.prevent="clickList(list.value)">{{ list.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'UiSelect',
  props: {
    value: {
      type: [Number, String, Object],
      default: ''
    },
    tag: {
      type: String,
      default: 'button'
    },
    data: {
      type: Array
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      placeholderText: this.placeholder || this.$t('comm.please-select'),
      isOpen: false,
      isActive: [],
      localValue: '',
      selectedText: ''
    }
  },
  methods: {
    onBlur (e) {
      if (e.relatedTarget) {
        if (e.relatedTarget.className.indexOf('list-button') < 0) {
          this.toggleList()
        }
      } else {
        this.toggleList()
      }
    },
    toggleList () {
      this.isOpen = this.isOpen ? Boolean(false) : Boolean(true)
    },
    clickList (value) {
      this.selectValue(value)
      this.$emit('change', this.localValue)
    },
    selectValue (value) {
      this.localValue = value
      this.selectedText = _.find(this.data, {'value': value}).text
      _.forEach(this.data, (val, idx) => {
        if (val.value === value) {
          this.isActive[idx] = true
        } else {
          this.isActive[idx] = false
        }
      })
      this.toggleList()
      this.$emit('input', this.localValue)
    }
  },
  watch: {
    value (value) {
      if (!value) {
        this.isOpen = false
        this.selectedText = ''
        this.localValue = ''
      }
    }
  },
  mounted () {
  },
  created () {
    this.isActive = this.data.map((val) => { return false })

    if (this.value) {
      this.isOpen = true
      this.selectValue(this.value)
    } else {
      _.forEach(this.data, (val) => {
        if (val.selected) {
          this.isOpen = true
          this.selectValue(val.value)
        }
      })
    }
  }
}
</script>
