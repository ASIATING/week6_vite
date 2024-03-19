<template>
  <div class="container">
    <v-stepper-header model-value="3">
      <v-stepper-item title="購物車確認" value="1"></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="填寫訂購資料" value="2"></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="確認付款" value="3"></v-stepper-item>
    </v-stepper-header>
    <table class="table table-bordered table-hover align-middle">
          <tbody>
            <tr>
              <th>訂單時間</th>
              <td>{{ formatDate(orderInfo?.create_at) }}</td>
            </tr>
            <tr>
              <th>訂單編號</th>
              <td>{{ orderInfo?.id }}</td>
            </tr>
            <tr>
              <th>訂購人姓名</th>
              <td>{{ orderInfo?.user?.name }}</td>
            </tr>
            <tr>
              <th>聯絡信箱</th>
              <td>{{ orderInfo?.user?.email }}</td>
            </tr>
            <tr>
              <th>聯絡電話</th>
              <td>{{ orderInfo?.user?.tel }}</td>
            </tr>
            <tr>
              <th>地址</th>
              <td>{{ orderInfo?.user?.address }}</td>
            </tr>
            <tr>
              <th>商品清單</th>
                <td class="text-break">
                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>商品名稱</th>
                        <th>單價</th>
                        <th>數量</th>
                        <th>小計</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, productId) in orderInfo.products" :key="productId">
                        <td>{{ product.product.title }}</td>
                        <td>{{ product.product.price }}</td>
                        <td>{{ product.qty }}</td>
                        <td>{{ product.total }}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
            </tr>
            <tr>
              <th>訂單總計</th>
              <td>NT$ {{ orderInfo?.total }}</td>
            </tr>
            <!-- <tr>
              <th>折價卷</th>
              <td>{{ coupon === '' ? '未使用優惠卷' : coupon }}</td>
            </tr> -->
            <tr>
              <th>備註</th>
              <td>{{ orderInfo?.message }}</td>
            </tr>
            <tr>
              <th>付款方式</th>
              <td>{{ orderInfo?.user?.payment === 'credit-card' ? '信用卡付款' : '銀行轉帳' }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td :class="[orderInfo?.is_paid ? 'text-success' : 'text-danger' ]">
                {{ orderInfo?.is_paid ? '已完成付款' : '審核中...' }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">
                <div>
                  轉帳資訊:中華郵政(700)-1234567
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button" v-if="orderInfo?.is_paid"
                 class="btn btn-outline-success btn-lg rounded"
                 @click.prevent="this.$router.push('/');">返回首頁</button>
                  <button type="button" v-else
                 class="btn btn-outline-primary  btn-lg rounded "
                 @click.prevent="payOrder">完成訂單</button>

                </div>
              </th>
            </tr>
          </tfoot>
        </table>
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
      orderInfo: {
      },
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
    // this.getProductInfo(this.$route.params.id)
    this.getOrder(this.$route.params.id)
  },
  methods: {
    getOrder (id) {
      axios.get(`${VITE_API}/api/${VITE_PATH}/order/${id}`)
        .then((res) => {
          console.log(res.data)
          this.orderInfo = res.data.order
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      console.log('123')
    },
    payOrder () {
      const url = `${VITE_API}/api/${VITE_PATH}/pay/${this.$route.params.id}`
      axios.post(url)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          console.log(res.data)
          this.getOrder(this.$route.params.id)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    formatDate (timestamp) {
      // Convert timestamp to milliseconds
      const date = new Date(timestamp * 1000)
      // Get year, month, and day
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      // Construct the formatted date string
      const formattedDate = `${year}-${month}-${day}`
      return formattedDate
    }
  }
}
</script>

<style scoped>
.v-sheet {
  background-color: transparent;
  box-shadow: none;
}
.v-stepper-header{
  box-shadow: none;
}
.formClass{
  padding: 10px 20px;
  background-color: #ffcc80;
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
