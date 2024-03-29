<template>
  <div class="pageColor pt-3">
  <div class="container">
    <div v-if="cartEmpty" class="text-center">
      <h1 class=" fw-bold">目前購物車沒有東西哦</h1>
      <button type="button" class="btn btn-primary" @click="this.$router.push('/products')">點我逛逛</button>
      <img src="https://github.com/ASIATING/image-repository/blob/main/head%20(7).png?raw=true" class="m-auto d-block w-50" alt="購物車為空">
    </div>
    <div v-else>
  <h3 class="fw-bold">購物車</h3>
  <v-stepper class="stepper-transparent">
    <v-stepper-header>
      <v-stepper-item title="購物車確認" value="1"></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="填寫訂購資料" value="2"></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="確認付款" value="3"></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
    <div class="text-end">
            <button class="btn clearCart" type="button" @click="clearCart()">清空購物車</button>
          </div>
  <table class="table align-middle mt-3">
    <thead>
      <tr>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="(item) in cart.carts" :key="item.id">
          <td>
            <div class="d-flex align-items-center">
              <div class="d-none d-md-block">
                <img :src="item.product.imageUrl" :alt="`${item.product.title}圖片`" :title="item.product.title" width="180px">
              </div>
              <div>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </div>
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <input min="1" type="number" class="form-control" v-model.number="item.qty" @input="handleInput($event, item)" @blur="updateCart(item)">
              <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
            </div>
          </td>
          <td class="text-end">
            <small class="text-success" v-if="cart.final_total !== cart.total">折扣價：</small>
            {{ item.final_total.toLocaleString() }}
          </td>
          <td class="text-center">
            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
              <!-- <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i> -->
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loadingItem === item.id"></span>
              <div v-else>刪除</div>
            </button>
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-center">{{ cart && cart.total ? cart.total.toLocaleString() : ''  }}</td>
      </tr>
      <tr v-if="cart.final_total !== cart.total">
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{cart && cart.final_total ?cart.final_total.toLocaleString() : '' }}</td>
      </tr>
    </tfoot>
  </table>
  <div class="input-group couponInput mb-3 ml-auto">
  <input type="text" class="form-control" placeholder="輸入優惠碼" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="coupon">
  <div class="input-group-append">
    <button type="button" class="btn btn-primary" @click="sendCoupon(coupon)">
            套用優惠券
          </button>
  </div>
</div>
<!-- <form class="text-md-start text-center">
          <input type="text" class="teat-start p-2 w-50" placeholder="請輸入優惠代碼" v-model="coupon" />
          <button type="button" class="btn btn-primary p-3" @click="sendCoupon(coupon)">
            送出優惠券
          </button>
        </form> -->
<div class="text-end">
  <RouterLink to="/order" class="nav-link d-inline-block">
    <button type="button" class="btn btn-primary">結帳去</button>
  </RouterLink>
</div>
<div class="">
    <h3>購物車消費注意事項</h3>
    <ul>
      <li><strong>付款方式：</strong>我們接受所有主要信用卡和 PayPal 作為付款方式。訂單處理前需要付款。</li>
      <li><strong>運輸方式：</strong>我們提供標準和加急運輸選項。運輸費用和交貨時間可能因您的位置和選擇的運輸方式而異。</li>
      <li><strong>退換政策：</strong>如果您對購買的商品不完全滿意，您可以在 30 天內退貨或換貨。請注意，退回的商品必須保持原樣和包裝。</li>
      <li><strong>稅費：</strong>我們網站上列出的所有價格均為美元，並且不含稅。適用地點的訂單將加收銷售稅。</li>
      <li><strong>隱私：</strong>我們致力於保護您的隱私。您提供給我們的任何個人信息將僅用於處理您的訂單，並不會與第三方共享。</li>
    </ul>
</div>
</div>
  </div>
  <div>.</div>
</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      coupon: ''
    }
  },
  mounted () {
    this.getCart()
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'addToCart', 'updateCart', 'removeCartItem', 'clearCart']),
    sendCoupon (coupon) {
      const sendCouponUrl = `${VITE_API}/api/${VITE_PATH}/coupon`
      const sendData = {
        data: {
          code: coupon
        }
      }
      axios
        .post(sendCouponUrl, sendData)
        .then((res) => {
          if (res.data.data.final_total === this.rawTotal) {
            Swal.fire({
              title: '優惠券有誤，請重新輸入',
              confirmButtonColor: '#ffb300',
              icon: 'warning'
            })
          }
          this.coupon = ''
          this.getCart()
        })
        .catch((err) => {
          Swal.fire({
            title: '優惠券有誤，請重新輸入',
            confirmButtonColor: '#ffb300',
            icon: 'warning'
          })
          console.log(err)
        })
    },
    handleInput (event, item) {
      if (event.target.value < 1 || event.target.value === '') {
        event.target.value = 1 // 将输入值设为1
      }
    }
  },
  computed: {
    ...mapState(cartStore, [
      'cartEmpty',
      'cart',
      'productModal',
      'loadingItem'
    ])
  }
}
</script>

<style scoped>
.clearCart {
  background-color: #4e4e4e;
  color:white;
}
.couponInput{
  /* width: 150px; */
  max-width: 400px;
}
.v-sheet {
  background-color: transparent;
  box-shadow: none;
}
.btn-primary{
  color: #4e4e4e !important;
}
.pageColor{
  min-height: 85vh;
  background-color: #fff3e0;
}
</style>
