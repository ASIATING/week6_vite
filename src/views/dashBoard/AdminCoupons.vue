<template>

    <div id="app">
      <div class="container">
        <h3 class="fw-bold mt-5">
          後台優惠卷列表
        </h3>
        <div class="d-flex mt-4 justify-content-between">
    <div>
    </div>
    <div class="ml-auto">
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新優惠券
      </button>
    </div>
  </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">優惠券名稱</th>
              <th width="120">折扣碼</th>
              <th width="120">
                到期日
              </th>
              <th width="60">
                優惠折數(%)
              </th>
              <th width="60">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in coupons" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.code }}</td>
              <td class="text-center">
                {{ item.due_date }}
              </td>
              <td class="text-center">
                {{ item.percent }}
              </td>
              <td>
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分頁元件 -->
        <pagination :pagination="pagination" @emit-pages="getData"></pagination>
        <!-- 分頁元件 -->
      </div>
      <!-- Modal -->
      <edit-coupon-modal ref="editCouponModal" :coupon="tempCoupon" :is-new="isNew" @update="getData"></edit-coupon-modal>
      <del-product-modal ref="delProductModal" :item="tempCoupon" :apiMethod="'coupon'" @update="getData"></del-product-modal>
      <!-- Modal -->
    </div>

  </template>

<script>
import axios from 'axios'
import pagination from '@/components/PaginationArea.vue'
import editCouponModal from '@/components/back/editCouponModal.vue'
import delProductModal from '@/components/back/delProductModal.vue'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  components: {
    pagination,
    editCouponModal,
    delProductModal
  },
  data () {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'ting-hexschool',
      coupons: [],
      tempCoupon: {
      },
      pagination: {},
      isNew: false
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    // this.checkAdmin()
    this.getData()
  },
  methods: {
    checkAdmin () {
      const url = `${this.apiUrl}/api/user/check`
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
      const url = `${VITE_API}/api/${VITE_PATH}/admin/coupons`
      axios.get(url)
        .then((response) => {
          console.log(222, response.data)
          const { coupons, pagination } = response.data
          this.coupons = coupons
          this.pagination = pagination
        }).catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    openModal (isNew, item) {
      if (isNew === 'new') {
        this.tempCoupon = {

        }
        this.isNew = true
        this.$refs.editCouponModal.openModal(isNew, item)
      } else if (isNew === 'edit') {
        this.tempCoupon = { ...item }
        this.isNew = false
        this.$refs.editCouponModal.openModal(isNew, item)
      } else if (isNew === 'delete') {
        this.tempCoupon = { ...item }
        // delProductModal.show()
        this.$refs.delProductModal.openModal(isNew, item)
      }
    }
  }

}
</script>
