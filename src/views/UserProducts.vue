<template>
  <div class="productsContainer pt-lg-5 pt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <!-- <h3 class="fw-bold">我是使用者</h3> -->
          <div class="sideBar">
            <!-- <h3 class="fw-bold">搜尋您要的商品</h3>
            <input type="text" class="form-control mb-3" placeholder="搜尋關鍵字"> -->
            <h3 class="fw-bold">商品分類</h3>
            <ul class="list-group">
              <li class="list-group-item" @click="serchBtn('')">
                <input type="radio" name="options" id="option1">
                <label for="option1">全部商品</label>
                <img src="/catFoot.png" alt="導覽圖">
              </li>
              <li class="list-group-item" @click="serchBtn('贊助狗')">
                <input type="radio" name="options" id="option2">
                <label for="option2">捐贈浪狗品項</label>
                <img src="/catFoot.png" alt="導覽圖">
              </li>
              <li class="list-group-item" @click="serchBtn('贊助貓')">
                <input type="radio" name="options" id="option3">
                <label for="option3">捐贈浪貓品項</label>
                <img src="/catFoot.png" alt="導覽圖">
              </li>
              <li class="list-group-item" @click="serchBtn('狗飼料')">
                <input type="radio" name="options" id="option4">
                <label for="option4">狗飼料</label>
                <img src="/catFoot.png" alt="導覽圖">
              </li>
              <li class="list-group-item" @click="serchBtn('貓飼料')">
                <input type="radio" name="options" id="option5">
                <label for="option5">貓飼料</label>
                <img src="/catFoot.png" alt="導覽圖">
              </li>
              <!-- <li class="list-group-item">
                <input type="radio" name="options" id="option4">
                <label for="option4">最新上架</label>
                <img src="../../public/catFoot.png" alt="導覽圖">
              </li> -->
            </ul>
            <div class="d-none d-md-block">
          <h5 class="fw-bold mt-5">近期熱賣</h5>
          <swiper
          :spaceBetween="10"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
            :slidesPerView="1"
            :modules="modules"
            class="mySwiper mb-5 container">
            <swiper-slide v-for="product in products" :key="product.id">
              <div class="cardOuter">
                  <router-link
                    class="card-hotProduct card--lg"
                    v-if="products && products.length > 0"
                    :style="`background-image: url(${product.imageUrl})`"
                    :to="`/product/${product.id}`"
                  >
                  <h5>{{ product.title }}</h5>
                  <div>{{ product.category }}</div>
                  <div>{{ `${product.price}/${product.unit}`}}</div>
                  </router-link>
            </div>
            </swiper-slide>
          </swiper>
          </div>
          </div>
        </div>
        <div class="col-md-8">
            <h3 class="fw-bold">全部商品</h3>
            <div  v-if="isLoading" class="loading-container vh-100">
         <vue-loading :active="isLoading"></vue-loading>
      </div>
            <div v-else v-for="product in products" :key="product.id" class="card productCard mb-3">
              <div class="row g-0">
                <div class="col-4">
                  <img :src="product.imageUrl" class="img-fluid rounded-start" alt="商品照片">
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">{{ product.title }}</h5>
                    <p class="card-text d-none d-md-block">{{ product.description }}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div>
                        <div><del>建議售價:{{ product.origin_price }}</del></div>
                        <div class="fw-bold text-danger fz-3">優惠價格:{{ product.price }}</div>
                      </div>
                      <div class="d-flex flex-column flex-md-row align-items-md-center mt-md-0 mt-3">
                          <router-link :to="`/product/${product.id}`">
                            <div class="btn btn-primary cardBtn moreBtn mb-2 mb-md-0 mr-md-3">查看更多</div>
                          </router-link>
                          <div class="btn btn-outline-primary cardBtn addToCartBtn ms-md-3" @click="addToCart(product.id)">加入購物車</div>
                      </div>
                    </div>
                    <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                  </div>
                </div>
              </div>

          </div>
          <div class="d-flex justify-content-end">
            <paginationArea :pagination="pagination" @emit-pages="getProducts"></paginationArea>
          </div>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import paginationArea from '@/components/PaginationArea.vue'
import cartStore from '@/stores/cartStore'
import productStore from '@/stores/productStore'
import { mapState, mapActions } from 'pinia'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  components: {
    paginationArea,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      products: [],
      cart: {
      },
      qty: 1,
      productModal: null,
      loadingItem: '',
      pagination: {},
      selectedOption: '',
      modules: [Autoplay, Navigation, Pagination]
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'serchBtn']),
    ...mapActions(cartStore, ['addToCart']),
    getProducts (page) {
      this.isLoading = true
      let url = `${VITE_API}/api/${VITE_PATH}/products?page=${page || 1}`
      if (this.selectedOption !== '') {
        url = `${VITE_API}/api/${VITE_PATH}/products?category=${this.selectedOption}&page=${page || 1}`
      }
      axios.get(url)
        .then(res => {
          this.isLoading = false
          this.pagination = res.data.pagination
          console.log(this.pagination)
          this.products = res.data.products
        })
        .catch(err => {
          this.isLoading = false
          alert(err.response.data.message)
        })
    },
    serchBtn (tempCategory) {
      this.selectedOption = tempCategory
      this.getProducts()
    },
    addToCart (id, qty = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      axios.post(url, { data: { product_id: id, qty } })
        .then(res => {
          console.log(res)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
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
    }
  },
  computed: {
    ...mapState(productStore, [
      'products',
      'pagination',
      'isLoading'
    ])
  }
}
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 調整高度以填滿整個視窗 */
}
.productsContainer{
  background-color: #fff3e0;
}
</style>
