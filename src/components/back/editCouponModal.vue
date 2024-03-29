<template>
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
           aria-hidden="true">
        <v-form  class="modal-dialog modal-xl" @submit="submitBtn" ref="form" v-slot="{ errors }">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew">新增優惠券</span>
                <span v-else>編輯優惠券</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">優惠券名稱</label>
            <v-field id="name" name="名稱" type="text" class="form-control" :class="{ 'is-invalid': errors['名稱'] }"
                      placeholder="請輸入優惠卷名稱" rules="required" v-model="coupon.title"></v-field>
            <error-message name="名稱" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">折扣碼</label>
            <v-field id="tel" name="折扣碼" type="text" class="form-control" :class="{ 'is-invalid': errors['折扣碼'] }"
                      placeholder="請輸入折扣碼"  rules="required" v-model="coupon.code"></v-field>
            <error-message name="折扣碼" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">折扣%數</label>
            <v-field id="address" name="折扣數" type="number" class="form-control" :class="{ 'is-invalid': errors['折扣數'] }"
                      placeholder="折扣數" rules="required"  v-model="coupon.percent"></v-field>
            <error-message name="折扣數" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">到期日</label>
            <VueDatePicker
                id="due_date"
                text-input
                :format="'yyyy/MM/dd HH:mm'"
                v-model="coupon.due_date"
                :min-date="new Date()"
                :clearable="false"
              />

          </div>
          <div class="mb-3">
            <div class="form-check">
                        <input id="is_enabled" class="form-check-input" type="checkbox"
                              :true-value="1" :false-value="0" v-model="coupon.is_enabled">
                        <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
          </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="submit" class="btn btn-primary">
                確認
              </button>
            </div>
          </div>
        </v-form >
      </div>
</template>

<script>
import axios from 'axios'
import * as bootstrap from 'bootstrap'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  props: ['tempCoupon'],
  data () {
    return {
      isLoding: true,
      productModal: null,
      products: [],
      isNew: true,
      coupon: {
        title: '132',
        is_enabled: 1,
        percent: '',
        due_date: '',
        code: ''
      }
    }
  },
  mounted () {
    this.productModal = new bootstrap.Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: 'static'
    })
    console.log(this.productModal)
    // this.delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
    //   keyboard: false
    // })
    // 取出token
    // const token = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
    //   '$1'
    // )
    // axios.defaults.headers.common.Authorization = token
    // console.log(token)
    // this.checkLogin()
  },
  methods: {
    checkLogin () {
      axios.post(`${VITE_API}/api/user/check`)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.dir(err)
        })
    },

    openModal (isNew, item) {
      console.log(333)
      if (isNew === 'new') {
        this.isNew = true
        this.coupon = {
          is_enabled: 0
        }
        this.productModal.show()
      } else if (isNew === 'edit') {
        console.log(444)
        this.isNew = false
        console.log(this.isNew)
        this.coupon = { ...item }
        this.productModal.show()
        console.log(this.tempProduct)
      } else if (isNew === 'delete') {
        this.isNew = false
        this.tempProduct = { ...item }
        this.delProductModal.show()
      }
    },
    submitBtn () {
      console.log('submitBtn')
      if (this.isNew) {
        console.log('this.isNew', this.isNew)
        this.coupon.due_date = new Date(this.coupon.due_date).getTime()
        axios.post(`${VITE_API}/api/${VITE_PATH}/admin/coupon/`, { data: this.coupon })
          .then(res => {
            console.log(res.data)
            this.$emit('update')
            this.productModal.hide()
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      } else {
        axios.put(`${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.coupon.id}`, { data: this.coupon })
          .then(res => {
            console.log(res.data)
            this.$emit('update')
            this.productModal.hide()
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      }
    },
    deletBtn () {
      axios.delete(`${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.coupon.id}`)
        .then(res => {
          console.log(res.data)
          this.delProductModal.hide()
          alert('刪除成功')
        })
        .catch(err => {
          console.dir(err)
        })
    }

  }
}
</script>
<style>

</style>
