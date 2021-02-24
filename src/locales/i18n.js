import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ko from './ko'
import en from './en'

Vue.use(VueI18n)

const messages = {
  en: en,
  ko: ko
}

export const i18n = new VueI18n({
  locale: 'ko',
  messages
})
