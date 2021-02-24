<template>
  <section class="popup-full shop-inner">
    <header>
      <h1 v-html="$t('sev.select-shop')"></h1>
      <a href="#" class="btn-close" @click.prevent="$emit('close')"><span class="blind">{{ $t('comm.close') }}</span></a>
    </header>
    <div class="layer-cont">
      <div class="row">
        <div class="input-box search">
          <input
            ref="input"
            type="search"
            :placeholder="$t('comm.search-placeholder')"
            v-model="searchText"
            @keyup="inputEvent($event)"
            @keypress="inputEvent($event)"
            @focusin="inputEvent($event)"
            @focusout="inputEvent($event)"
          >
          <button type="button" class="btn-del" v-show="hasSearchText" @click="clickDelete">
            <span class="blind">{{ $t('comm.delete') }}</span>
          </button>
          <button class="btn-search" @click="clickSearch(searchText)" :disabled="!hasSearchText">
            <span class="blind">{{ $t('comm.search') }}</span>
          </button>
        </div>
      </div>
      <shop :booking-type="bookingType" :select-type="selectType" :is-filter="isFilter" :selected-service="selectedService" ></shop>
    </div>
  </section>
</template>

<script>
import Shop from '../../../components/shop/Shop'
import Header from '../../common/Header'

export default {
  name: 'FindShop',
  components: {
    Shop
  },
  mixins: [Header],
  props: {
    bookingType: {
      type: String,
      default: ''
    },
    selectType: {
      type: String,
      default: ''
    },
    isFilter: {
      type: Boolean,
      default: true
    },
    selectedService: {
      type: Number
    },
    selectedCounseling: {
      type: String
    }
  }
}
</script>
