<template>
  <div class="productsContainer pt-lg-5 pt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="sideBar">
            <h3 class="fw-bold">搜尋您要的商品</h3>
            <input
              type="text"
              class="form-control mb-3"
              placeholder="搜尋關鍵字"
              v-model="serchKeyword"
            />
            <h3 class="fw-bold">商品分類</h3>
            <ul class="list-group cursor-pointer">
              <li class="list-group-item" @click="serchBtn('')">
                <input type="radio" name="options" id="option1" />
                <label class="cursor-pointer" for="option1">全部商品</label>
                <img src="/catFoot.png" alt="導覽圖" />
              </li>
              <li class="list-group-item" @click="serchBtn('贊助狗')">
                <input type="radio" name="options" id="option2" />
                <label class="cursor-pointer" for="option2">捐贈浪狗品項</label>
                <img src="/catFoot.png" alt="導覽圖" />
              </li>
              <li class="list-group-item" @click="serchBtn('贊助貓')">
                <input type="radio" name="options" id="option3" />
                <label class="cursor-pointer" for="option3">捐贈浪貓品項</label>
                <img src="/catFoot.png" alt="導覽圖" />
              </li>
              <li class="list-group-item" @click="serchBtn('狗飼料')">
                <input type="radio" name="options" id="option4" />
                <label class="cursor-pointer" for="option4">狗飼料</label>
                <img src="/catFoot.png" alt="導覽圖" />
              </li>
              <li class="list-group-item" @click="serchBtn('貓飼料')">
                <input type="radio" name="options" id="option5" />
                <label class="cursor-pointer" for="option5">貓飼料</label>
                <img src="/catFoot.png" alt="導覽圖" />
              </li>
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
                class="mySwiper mb-5 container"
              >
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
                      <div>{{ `${product.price}/${product.unit}` }}</div>
                    </router-link>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <h3 class="fw-bold">
            {{ selectedOption ? selectedOption : "全部商品" }}
          </h3>
          <div v-if="isLoading" class="loading-container vh-100">
            <vue-loading :active="isLoading"></vue-loading>
          </div>
          <div v-else-if="filteredProducts.length === 0">
            <h5 class="mt-5 fw-bold text-center">沒有符合條件的商品</h5>
            <img class=" w-100" src="https://github.com/ASIATING/image-repository/blob/main/noproduct.png?raw=true" alt="沒有符合條件的商品">
          </div>
          <div
            v-else
            v-for="product in filteredProducts"
            :key="product.id"
            class="card productCard mb-3"
          >
          <router-link :to="`/product/${product.id}`" class="card border-0 text-decoration-none">
            <div class="row g-0 cursor-pointer">
              <div class="col-md-4">
                <div
                  class="d-flex justify-content-center justify-content-md-start align-items-center h-100"
                >
                  <img
                    :src="product.imageUrl"
                    class="img-fluid rounded-start"
                    alt="商品照片"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <p class="card-text d-none d-md-block">
                    {{ product.description }}
                  </p>
                  <div class="d-flex justify-content-between align-items-end">
                    <div>
                      <div>
                        <del>建議售價:{{ product.origin_price.toLocaleString() }}</del>
                      </div>
                      <div class="fw-bold text-danger fz-3">
                        優惠價格:{{ product.price.toLocaleString() }}
                      </div>
                    </div>
                    <div
                      class="d-flex flex-column flex-md-row align-items-md-center mt-md-0 mt-3"
                    >
                      <!-- <router-link :to="`/product/${product.id}`">
                        <div
                          class="btn  btn-primary cardBtn  mb-2 mb-md-0 mr-md-3"
                        >
                          看商品詳情
                        </div>
                      </router-link> -->
                      <div
                        class="btn  btn-primary cardBtn  ms-md-3"
                        @click.prevent="addToCart(product.id)"
                      >
                        加入購物車
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          </div>
          <div v-if="!serchKeyword" class="d-flex justify-content-end">
            <PaginationArea
              :pagination="pagination"
              @emit-pages="getProducts"
            ></PaginationArea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationArea from '@/components/PaginationArea.vue'
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
export default {
  components: {
    PaginationArea,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      serchKeyword: '',
      cart: {},
      qty: 1,
      productModal: null,
      loadingItem: '',
      modules: [Autoplay, Navigation, Pagination]
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'serchBtn']),
    ...mapActions(cartStore, ['addToCart'])
  },
  computed: {
    ...mapState(productStore, ['products', 'pagination', 'isLoading', 'selectedOption']),
    filteredProducts () {
      return this.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.serchKeyword.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
.btn-primary {
  color:#4e4e4e !important
}
.addToCartBtn {
  border: #4e4e4e 1px solid !important;
  color:#4e4e4e !important
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 調整高度以填滿整個視窗 */
}
.productsContainer {
  min-height: 90vh;
  background-color: #fff3e0;
}

.swiper {
    --swiper-pagination-color: #ffb300;
}
</style>
