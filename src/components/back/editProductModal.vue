<template>
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
           aria-hidden="true">
        <form  class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯商品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">主要圖片</label>
                    <input v-model="tempProduct.imageUrl" type="text" class="form-control mb-2" placeholder="請輸入圖片連結">
                    <img class="img-fluid" :src="tempProduct.imageUrl">
                  </div>
                  <h3>多圖</h3>
                  <div v-if="Array.isArray(tempProduct.imagesUrl)">
                    <div class="mb-2" v-for="(item, index) in tempProduct.imagesUrl" :key="index">
                        <div class="mb-3">
                            <label for="imageUrl" class="form-label">輸入圖片網址</label>
                            <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="tempProduct.imagesUrl[index]">
                        </div>
                        <div class="image-container">
                        <img class="img-fluid img-thumbnail" :src="item" :alt="`多圖${index+1}`">
                        <button class="btn btn-outline-danger btn-sm" @click="deleteImage(index)">刪除圖片</button>
                      </div>
                    </div>
                    <div>
                        <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImage()">新增圖片</button>
                    </div>
                </div>
                <div v-else>
                  <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImage()">
                    新增圖片
                  </button>
                </div>
                </div>
                  <div class="col-sm-8">
                    <div class="mb-3">
                      <label for="title" class="form-label">標題</label>
                      <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title" required>
                    </div>

                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label for="category" class="form-label">分類</label>
                        <select id="category" class="form-select" v-model="tempProduct.category" required>
                          <option disabled selected value="">請選擇分類</option>
                          <option value="貓飼料">貓飼料</option>
                          <option value="狗飼料">狗飼料</option>
                          <option value="贊助貓">贊助貓</option>
                          <option value="贊助狗">贊助狗</option>
                        </select>
                      </div>
                      <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">單位</label>
                        <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="tempProduct.unit" required>
                      </div>
                    </div>

                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label for="origin_price" class="form-label">原價</label>
                        <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="tempProduct.origin_price" required>
                      </div>
                      <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">售價</label>
                        <input id="price" type="number" min="0" class="form-control"
                              placeholder="請輸入售價" v-model="tempProduct.price" required>
                      </div>
                    </div>
                    <hr>

                    <div class="mb-3">
                      <label for="description" class="form-label">產品描述</label>
                      <textarea id="description" type="text" class="form-control"
                                placeholder="請輸入產品描述" v-model="tempProduct.description">
                      </textarea>
                    </div>
                    <div class="mb-3">
                      <label for="content" class="form-label">說明內容</label>
                      <textarea id="description" type="text" class="form-control"
                                placeholder="請輸入說明內容" v-model="tempProduct.content">
                      </textarea>
                    </div>
                    <div class="mb-3">
                      <div class="form-check">
                        <input id="is_enabled" class="form-check-input" type="checkbox"
                              :true-value="1" :false-value="0" v-model="tempProduct.is_enabled">
                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="submit" class="btn btn-primary" @click="submitBtn()">
                確認
              </button>
            </div>
          </div>
        </form >
      </div>
</template>

<script>
import axios from 'axios'
import * as bootstrap from 'bootstrap'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      isLoding: true,
      productModal: null,
      products: [],
      isNew: true,
      tempProduct: {
        imagesUrl: []
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
          this.getProduct()
        })
        .catch(err => {
          console.dir(err)
        })
    },
    getProduct () {
      this.isLoding = true
      const url = `${VITE_API}/api/${VITE_PATH}/admin/products/all`
      axios.get(url)
        .then(res => {
          console.log(res.data)
          this.products = res.data.products
          this.isLoding = false
        })
        .catch(err => {
          console.dir(err)
        })
    },

    openModal (isNew, item) {
      console.log(333)
      if (isNew === 'new') {
        this.isNew = true
        this.tempProduct = {
          imagesUrl: []
        }
        this.productModal.show()
      } else if (isNew === 'edit') {
        console.log(444)
        this.isNew = false
        console.log(this.isNew)
        this.tempProduct = { ...item }
        this.productModal.show()
        console.log(this.tempProduct)
      } else if (isNew === 'delete') {
        this.isNew = false
        this.tempProduct = { ...item }
        this.delProductModal.show()
      }
    },
    submitBtn () {
      if (this.isNew) {
        console.log('this.isNew', this.isNew)
        axios.post(`${VITE_API}/api/${VITE_PATH}/admin/product/`, { data: this.tempProduct })
          .then(res => {
            console.log(res.data)
            this.$emit('update')
            this.productModal.hide()
            this.getProduct()
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      } else {
        axios.put(`${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`, { data: this.tempProduct })
          .then(res => {
            console.log(res.data)
            this.$emit('update')
            this.productModal.hide()
            this.getProduct()
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      }
    },
    deletBtn () {
      axios.delete(`${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`, { data: this.tempProduct })
        .then(res => {
          console.log(res.data)
          this.delProductModal.hide()
          alert('刪除成功')
          this.getProduct()
        })
        .catch(err => {
          console.dir(err)
        })
    },
    addImage () {
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
        this.tempProduct.imagesUrl.push('')
      } else {
        console.log(this.tempProduct.imagesUrl)
        this.tempProduct.imagesUrl.push('')
      }
    },
    deleteImage (index) {
      this.tempProduct.imagesUrl.splice(index, 1)
    }

  }
}
</script>
<style>

</style>
