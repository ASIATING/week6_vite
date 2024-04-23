<template>
  <h3 class="fw-bold mt-5">
    後臺訂單列表
  </h3>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            訂單編號
          </th>
          <th width="90">購買人</th>
          <th width="90">
            email
          </th>
          <th width="90">
            購買日期
          </th>
          <th width="90">
            訂單金額
          </th>
          <th width="90">
            訂單狀態
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in ordersData" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.user.name }}</td>
          <td>{{ order.user.email }}</td>
          <td>{{ formatDate(order.create_at) }}</td>
          <td>{{ order.total }}</td>
          <td>
            <span class="text-success" v-if="order.is_paid">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <div class="d-grid gap-2 d-md-flex ">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(order, 'edit')">
                詳情
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"  @click="openModal(order, 'delete')">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <order-modal ref="EditOrderModal" :temp-order ="tempOrder"  @update="getData"></order-modal>
    <del-order-modal ref="DelOrderModal" :item="tempOrder" @update="getData"></del-order-modal>
    <Pagination :pagination="pagination" @emit-pages="getData"></Pagination>
  </div>
</template>

<script>
import axios from 'axios'
import OrderModal from '@/components/back/OrderModal.vue'
import DelOrderModal from '@/components/back/DelOrderModal.vue'
import Pagination from '@/components/PaginationArea.vue'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  components: {
    OrderModal,
    Pagination,
    DelOrderModal
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    // this.checkAdmin()
    this.getData()
  },
  data () {
    return {
      tempOrder: {

      },
      ordersData: [],
      pagination: {}
    }
  },
  methods: {
    checkAdmin () {
      const url = `${VITE_API}/api/user/check`
      axios.post(url)
        .then(() => {
          this.getData()
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    getData (page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`
      axios.get(url)
        .then((res) => {
          const { orders, pagination } = res.data
          this.ordersData = orders
          this.pagination = pagination
        }).catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    openModal (tempOrder, type) {
      this.tempOrder = { ...tempOrder }
      if (type === 'edit') {
        this.$refs.EditOrderModal.openModal(tempOrder)
      }
      if (type === 'delete') {
        this.$refs.DelOrderModal.openModal(tempOrder)
      }
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
