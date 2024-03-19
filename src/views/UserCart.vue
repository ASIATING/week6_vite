<template>
  <div class="pageColor pt-3">
  <div class="container">
    <div v-if="cartEmpty" class="text-center">
      <h1 class="text-secondary fw-bold">目前購屋車沒有東西哦來去購物</h1>
      <button class="btn btn-primary" @click="this.$router.push('/products')">點我逛逛</button>
      <img src="https://cdn.discordapp.com/attachments/1216979871138320384/1217762666949378191/british-cat-with-shopping-cart-isolated-white-kitten-osolated_767502-1923.png?ex=660534dc&is=65f2bfdc&hm=729fdad49f07f58dbee1c1fd573e4803c73e520b71269c2712755819cf52e07f&" class="m-auto d-block" alt="">
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
            <button class="btn btn-outline-danger" type="button" @click="clearCart()">清空購物車</button>
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
                <img :src="item.product.imageUrl" alt="" width="180px">
              </div>
              <div>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </div>
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <input min="1" type="number" class="form-control" v-model.number="item.qty" @blur="updateCart(item)">
              <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
            </div>
          </td>
          <td class="text-end">
            <small class="text-success" v-if="cart.final_total !== cart.total">折扣價：</small>
            {{ item.final_total }}
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
        <td class="text-center">{{ cart.total }}</td>
      </tr>
      <tr v-if="cart.final_total !== cart.total">
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
<div class="text-end">
  <RouterLink to="/order" class="nav-link">
    <button class="btn btn-primary">結帳去</button>
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
export default {
  data () {
    return {
      cartEmpty: false,
      apiUrl: import.meta.env.VITE_API,
      apiPath: import.meta.env.VITE_PATH,
      isLoading: true,
      products: [],
      cart: {
      },
      qty: 1,
      tempProduct: {},
      productModal: null,
      loadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  mounted () {
    this.getCart()
  },
  methods: {
    getCart () {
      const url = `${this.apiUrl}/api/${this.apiPath}/cart`
      axios.get(url)
        .then(res => {
          console.log(res)
          this.cart = res.data.data
          if (this.cart.total === 0) {
            this.cartEmpty = true
          } else {
            this.cartEmpty = false
          }
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    addToCart (id, qty = 1) {
      this.loadingItem = id
      const url = `${this.apiUrl}/api/${this.apiPath}/cart`
      axios.post(url, { data: { product_id: id, qty } })
        .then(res => {
          this.loadingItem = ''
          alert(res.data.message)
          this.$refs.userProductModal.hideModal()
          this.getCart()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    updateCart (data) {
      this.loadingItem = data.id
      const url = `${this.apiUrl}/api/${this.apiPath}/cart/${data.id}`
      axios.put(url, { data: { product_id: data.product_id, qty: data.qty } })
        .then(res => {
          this.loadingItem = ''
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          this.getCart()
        })
        .catch(err => {
          this.loadingItem = ''
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          // alert(err.response.data.message)
        })
    },
    removeCartItem (id) {
      const url = `${this.apiUrl}/api/${this.apiPath}/cart/${id}`
      this.loadingItem = id
      axios.delete(url)
        .then(res => {
          this.loadingItem = ''
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          this.getCart()
        })
        .catch(err => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
        })
    },
    clearCart () {
      Swal.fire({
        title: '確定要清空購物車嗎?',
        text: ' 清空後無法復原! ',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定，我要清空購物車!',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${this.apiUrl}/api/${this.apiPath}/carts`
          axios.delete(url)
            .then(res => {
              Swal.fire({
                title: '刪除成功!',
                text: res.data.message,
                icon: 'success'
              }).then(() => {
                this.getCart()
              })
            })
            .catch(err => {
              Swal.fire({
                title: 'Error!',
                text: err.response.data.message,
                icon: 'error'
              })
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.v-sheet {
  background-color: transparent;
  box-shadow: none;
}
.btn-primary{
  color: white;
}
.pageColor{
  min-height: 85vh;
  background-color: #fff3e0;
}
</style>
