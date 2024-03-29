<template>
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="orderModal"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">產品詳情</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row border-bottom mb-3">
            <div class="col-6">
              <h5 class="mb-3 fw-bold">訂購人資訊</h5>
              <div class="mb-3">
                <p class="mb-1">訂購人</p>
                <input
                  type="text"
                  class="form-control"
                  v-model="tempOrderData.user.name"
                  :readonly="!editMode"
                  :disabled="!editMode"
                />
              </div>
              <div class="mb-3">
                <p class="mb-1">訂購信箱</p>
                <input
                  type="text"
                  class="form-control"
                  v-model="tempOrderData.user.email"
                  :readonly="!editMode"
                  :disabled="!editMode"
                />
              </div>
              <div class="mb-3">
                <p class="mb-1">訂購電話</p>
                <input
                  type="text"
                  class="form-control"
                  v-model="tempOrderData.user.tel"
                  :readonly="!editMode"
                  :disabled="!editMode"
                />
              </div>
              <div class="mb-3">
                <p class="mb-1">訂購地址</p>
                <input
                  type="text"
                  class="form-control"
                  v-model="tempOrderData.user.address"
                  :readonly="!editMode"
                  :disabled="!editMode"
                />
              </div>
              <div class="mb-3">
                <p class="mb-1">訂購人訊息</p>
                <input
                  type="text"
                  class="form-control"
                  v-model="tempOrderData.message"
                  readonl
                  disabled
                />
              </div>
            </div>
            <div class="col-6">
              <h5 class="mb-3 fw-bold">訂單資訊</h5>
              <div class="mb-3">
                <p class="mb-1">訂單編號</p>
                <p class="mb-1">{{ tempOrderData.id }}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂單時間</p>
                <p class="mb-1">{{ formatDate(tempOrderData.create_at) }}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂單金額</p>
                <p class="mb-1">{{ tempOrderData.total }}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂單付款狀態</p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="tempOrderData.is_paid"
                  />
                  <label
                    class="form-check-label text-success"
                    for="flexCheckDefault"
                    v-if="tempOrderData.is_paid"
                  >
                    已付款
                  </label>
                  <label class="form-check-label" for="flexCheckDefault" v-else>
                    未付款
                  </label>
                </div>
              </div>
            </div>
          </div>
          <h5 class="mb-3 fw-bold">訂單內容</h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">產品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(orderData, index) in tempOrderData.products"
                :key="orderData.id"
              >
                <td>{{ index }}</td>
                <td>{{ orderData.product.title }}</td>
                <td>{{ orderData.qty }}</td>
                <td>{{ orderData.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="delOrder(tempOrderData.id)"
          >
            刪除
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="editOrder(tempOrderData.id)"
          >
            {{ editMode ? "保存" : "編輯" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as bootstrap from 'bootstrap'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      tempOrderData: {
        user: {}
      },
      orderModal: null,
      editMode: false // 编辑模式
    }
  },
  mounted () {
    this.orderModal = new bootstrap.Modal(this.$refs.orderModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    openModal (item) {
      this.editMode = false
      this.tempOrderData = { ...item }
      console.log(item)
      this.orderModal.show()
      console.log(333)
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
    },
    editOrder (id) {
      if (!this.editMode) {
        // 切换为编辑模式时，可以在这里执行一些准备操作，比如获取订单数据等
      } else {
        axios
          .put(`${VITE_API}/api/${VITE_PATH}/admin/order/${id}`, {
            data: this.tempOrderData
          })
          .then((res) => {
            console.log(res.data)
            this.$emit('update')
            this.orderModal.hide()
          })
          .catch((err) => {
            alert(err)
          }) // 保存修改后的订单信息
      }
      this.editMode = !this.editMode // 切换编辑模式状态
    },
    delOrder (id) {
      axios.delete(`${VITE_API}/api/${VITE_PATH}/admin/order/${id}`)
    }
  }
}
</script>
