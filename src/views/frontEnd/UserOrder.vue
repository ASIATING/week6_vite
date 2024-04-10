<template>
  <div class="container mb-5">
    <div class="row mt-3">
      <v-stepper class="stepper-transparent" model-value="2">
    <v-stepper-header>
      <v-stepper-item title="購物車確認" value="1"></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="填寫訂購資料" value="2"></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="確認付款" value="3"></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
      <div class="col-md-6 mb-5">
        <h5 class="fw-bold">購物車內容</h5>
        <div class="tableClass">
          <table class="table align-middle">
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
                    <div>
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <input min="1" type="number" class="form-control" @input="handleInput($event, item)" v-model.number="item.qty" @blur="updateCart(item)">
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </td>
                <td class="text-end">
                  <small class="text-success" v-if="cart.final_total !== cart.total">折扣價：</small>
                  {{ Math.floor(item.final_total) }}
                </td>
                <td class="text-center">
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                    <!-- <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i> -->
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loadingItem === item.id"></span>
                    <div v-else>x</div>
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
              <td class="text-end text-success">{{ Math.floor(cart.final_total) }}</td>
            </tr>
          </tfoot>
          </table>
        </div>
      </div>
      <div class="justify-content-center col-md-6">
        <h5 class="fw-bold">填寫付款資料</h5>
        <v-form class="formClass" @submit="createOrder" ref="form" v-slot="{ errors }" >
          <div class="mb-3">
            <label for="email" class="form-label">*Email</label>
            <v-field id="email" name="email" type="email" class="form-control"
                      :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"
                    ></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">*收件人姓名</label>
            <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                      placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">*收件人電話</label>
            <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                      placeholder="請輸入電話"  rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">*收件人地址</label>
            <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                      placeholder="請輸入地址" rules="required"  v-model="form.user.address"></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-primary submitBtn" :disabled="cart.total === 0 || loadingItem === 'createOrder'"
                    >
            <i class="fas fa-spinner fa-pulse" v-if="loadingItem === 'createOrder'"></i>
              送出訂單
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
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
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      axios.get(url)
        .then(res => {
          this.cart = res.data.data
          if (this.cart.total === 0) {
            this.$router.push({ path: '/cart' })
          }
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    createOrder () {
      this.loadingItem = 'createOrder'
      const order = this.form
      const url = `${VITE_API}/api/${VITE_PATH}/order`
      axios.post(url, { data: order })
        .then(res => {
          this.$refs.form.resetForm()
          this.loadingItem = ''
          this.$router.push({ path: `./orderPay/${res.data.orderId}` })
        })
        .catch(err => {
          alert(err.response.data.message)
          this.loadingItem = ''
        })
    },
    updateCart (data) {
      this.loadingItem = data.id
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${data.id}`
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
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${id}`
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
    handleInput (event, item) {
      if (event.target.value < 1 || event.target.value === '') {
        event.target.value = 1 // 将输入值设为1
      }
    }
  }
}
</script>

<style scoped>
.submitBtn{
  color:#4e4e4e !important;
}
.v-sheet {
  background-color: transparent;
  box-shadow: none;
}
.v-stepper-header{
  box-shadow: none;
}
.formClass{
  padding: 10px 20px;
  border: 5px solid #ffcc80;
  border-radius: 10px;
}
.tableClass{
  padding: 10px 20px;
  border: 5px solid #ffcc80;
  border-radius: 10px;
}
.btnClass{
  background-color: #ffcc80;
  border-radius: 10px;
}
.btn-primary{
  color: white;
}
</style>
