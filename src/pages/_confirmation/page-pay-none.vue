<template>
  <!--=================================================   확인용   =================================================-->
  <div class="wrap">
    <Header type="back" :title="$t('my.pay-list')"></Header>
    <div class="contents my-booking" ref="contents">
      <div class="my-pay">
        <section class="row pay-inquiry">
          <h2 class="blind">구매 내역 조회</h2>
          <div class="input-box inquiry">
            <ui-select
              :data="[
                {text: '최근 3개월', value: 'value0', selected: true},
                {text: '최근 6개월', value: 'value1'},
                {text: '최근 1년', value: 'value2'}
              ]"
            ></ui-select>
            <ui-select
              :data="[
                {text: '구매상태 전체', value: 'value0', selected: true},
                {text: '구매완료', value: 'value1'},
                {text: '구매취소', value: 'value2'}
              ]"
            ></ui-select>
            <button type="button" class="btn-line">조회</button>
          </div>
        </section>

        <section class="row">
          <p class="no-content">구매 내역이 없습니다.</p>
        </section>

        <div class="row">
          <h4 class="tit-refund">환불 안내</h4>
          <ul class="texts-info">
            <li>* 단순 변심에 의한 상품의 교환/환불은 포장 및 박스 미개봉 상품에 한하여 14일 이내 영수증을 지참한 경우 방문 시 신청 가능</li>
            <li>* 포장 및 박스 개봉 시 상품 불량인 경우에 한하여 14일 이내 영수증을 지참하여 방문 시 신청 가능</li>
            <li>{{ text }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import UiSelect from '../../ui/UiSelect'

export default {
  name: 'page-pay-none',
  components: {
    Header,
    UiSelect
  },
  data () {
    return {
      text: '※ 단, 제조사(애플/삼성/LG) 정품 액세서리는 제조사 A/S 센터 통하여 교환/환불 가능'
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
