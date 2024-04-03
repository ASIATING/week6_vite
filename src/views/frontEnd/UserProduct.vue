<template>
    <div class="container pt-2">
      <ul class="breadcrumb d-flex mt-3">
        <li>  <router-link to="/"  class="nav-link ">首頁   /</router-link> </li>
        <li>  <router-link to="/products"  class="nav-link ">產品首面   /</router-link> </li>
        <li>   <router-link :to="`/products?category=${productInfo.category}`" class="nav-link">   {{ productInfo.category }}</router-link></li>
      </ul>
      <div class="row productProfile">
        <div class="col-md-6">
          <img :src="productInfo.imageUrl" class="img-fluid" :alt="productInfo.title">
        </div>
        <div class="col-md-6">
          <h1 class="fw-bold">{{ productInfo.title }}</h1>
          <h5 class="mt-3">商品分類:{{ productInfo.category }}</h5>
          <p>{{ productInfo.description }}</p>
          <p>{{ productInfo.content }}</p>
          <select class="form-select" aria-label="Default select example" v-model="selectedNum">
            <option disabled value="">請選擇數量</option>
            <option v-for="(index) in 20" :key="index" :value="index">
              {{ index }}
            </option>
          </select>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <div class="text-decoration-line-through">原價:{{ productInfo.origin_price }}元</div>
            <div class="fw-bold text-danger h5">優惠價格:{{ productInfo.price }}元</div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <button type="button" class="btn  cardBtn" :class="{ disabled: !selectedNum }" @click="addToCart(productInfo.id, selectedNum)">點我加入購物車</button>
            <button type="button" class="btn btn-primary" @click="addToCart(productInfo.id)">立即購買</button>
          </div>
        </div>
      </div>
      <br>
      <div class="rules">
        <h3 class="fw-bold">購買須知</h3>
        <ul class="rules-list ps-0">
          <li><i class="bi bi-balloon-fill text-Warning"></i> 商品品質：所有寵物商品均符合品質標準，確保安全可靠。</li>
          <li><i class="bi bi-balloon-fill text-Warning"></i> 產品說明：每個商品都有清晰的產品說明，包括用途、材質、尺寸等訊息，以幫助客戶做出明智的選擇。</li>
          <li><i class="bi bi-balloon-fill text-Warning"></i> 價格透明：商品價格明確顯示，不存在隱性費用。</li>
          <li><i class="bi bi-balloon-fill text-Warning"></i> 客戶服務：提供優質客戶服務，及時回答客戶疑問並解決問題。</li>
          <li><i class="bi bi-balloon-fill text-Warning"></i> 退換政策：提供合理的退換貨政策，確保顧客權益。</li>
          <li><i class="bi bi-balloon-fill text-Warning"></i> 保障措施：採取必要措施保障客戶隱私和交易安全。</li>
          <li><i class="bi bi-balloon-fill text-Warning"></i> 使用者回饋：歡迎客戶提供回饋和建議，以持續改善我們的服務和產品。</li>
        </ul>
      </div>
      <div class="similarArea">
        <h3 class="fw-bold">類似商品</h3>
         <!-- 商品1 -->
         <swiper
         :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
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

</template>
<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import productStore from '@/stores/productStore'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Autoplay, Navigation, Pagination],
      selectedNum: ''
    }
  },
  mounted () {
    console.log(this.$route)
    this.getProducts()
    this.getProductInfo(this.$route.params.id)
    console.log(this.$route.params.id) // this.$route.params.id
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'getProductInfo']),
    ...mapActions(cartStore, ['addToCart'])
  },
  watch: {
    $route: {
      handler () {
        this.getProductInfo(this.$route.params.id)
      },
      deep: true
    }
  },
  computed: {
    ...mapState(productStore, [
      'products',
      'pagination',
      'isLoading',
      'productInfo'
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
.swiper {
    --swiper-pagination-color: #ffb300;
}
</style>
