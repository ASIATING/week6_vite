<template>
  <div id="app">
    <div class="container">
      <h3 class="fw-bold mt-5">後台產品列表</h3>
      <div class="d-flex mt-4 justify-content-between">
        <div>
          <div class="d-flex align-items-center">
            <!-- 添加 align-items-center 类 -->
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="tempCategory"
            >
              <option disabled selected hidden>選擇商品分類</option>
              <option value="">所有商品</option>
              <option value="貓飼料">貓咪糧食</option>
              <option value="狗飼料">狗狗糧食</option>
              <option value="贊助貓">贊助貓貓</option>
              <option value="贊助狗">贊助狗狗</option>
            </select>
          </div>
        </div>
        <button
          class="btn btn-primary ms-2 me-auto"
          @click="serchBtn(tempCategory)"
        >
          <!-- 添加 ml-2 类 -->
          搜尋分類
        </button>
        <div class="ml-auto">
          <button class="btn btn-primary" @click="openModal('new')">
            建立新的產品
          </button>
        </div>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-end">
              {{ item.origin_price }}
            </td>
            <td class="text-end">
              {{ item.price }}
            </td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit', item)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分頁元件 -->
      <PaginationArea :pagination="pagination" @emit-pages="getData"></PaginationArea>
      <!-- 分頁元件 -->
    </div>
    <!-- Modal -->
    <edit-product-modal
      ref="editProductModal"
      :product="tempProduct"
      :is-new="isNew"
      @update="getData"
    ></edit-product-modal>
    <del-product-modal
      ref="delProductModal"
      :item="tempProduct"
      :apiMethod="'product'"
      @update="getData"
    ></del-product-modal>
    <!-- Modal -->
  </div>
</template>

<script>
import axios from 'axios'
import PaginationArea from '@/components/PaginationArea.vue'
import editProductModal from '@/components/back/editProductModal.vue'
import delProductModal from '@/components/back/delProductModal.vue'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  components: {
    PaginationArea,
    editProductModal,
    delProductModal
  },
  data () {
    return {
      tempCategory: '',
      category: '',
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      pagination: {},
      isNew: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    checkAdmin () {
      const url = `${VITE_API}/api/user/check`
      axios
        .post(url)
        .then(() => {
          this.getData()
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    getData (page = 1) {
      let url = `${VITE_API}/api/${VITE_PATH}/admin/products`

      if (this.category) {
        url += `?category=${this.category}&page=${page}`
      } else {
        url += `?page=${page}`
      }

      axios
        .get(url)
        .then((response) => {
          const { products, pagination } = response.data
          this.products = products
          this.pagination = pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    openModal (isNew, item) {
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.$refs.editProductModal.openModal(isNew, item)
      } else if (isNew === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        this.$refs.editProductModal.openModal(isNew, item)
      } else if (isNew === 'delete') {
        this.tempProduct = { ...item }
        // delProductModal.show()
        this.$refs.delProductModal.openModal(isNew, item)
      }
    },
    serchBtn (tempCategory) {
      this.category = tempCategory
      this.getData()
    }
  }
}
</script>
