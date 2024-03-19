<template>
  <div  v-if="isLoading" class="loading-container vh-100">
    <vue-loading :active="isLoading"></vue-loading>
  </div>
<div v-else class="homebg">
  <section class="index-hero">
      <img
        src="https://cdn.discordapp.com/attachments/1216979871138320384/1216999349775503401/still-life-domestic-animal-food-composition_23-2148982410.png?ex=66026df7&is=65eff8f7&hm=effb4583cba8a24e810f0f22ce088db7b947d309e244abf2ec65be33ac58e6e1&"
        class="index-hero-img"
      />
        <div class="index-hero-txt">
          <h2 class="fw-bold">loves dog&amp;cat</h2>
          <h3 class="fw-bold">
            換迎來到愛狗貓
            <span class="fw-bold">寵物有您真好</span>
          </h3>
          <div class="index-hero-btn-wrap">
            <RouterLink to="/products" exact>產品頁面</RouterLink> |
            <RouterLink to="/products" exact>幫助浪浪</RouterLink>
          </div>
        </div>
    </section>
    <div class="container aboutArea">
      <div class="row align-items-center" data-aos="fade-right">
        <div class="col-md-6 p-3">
          <img src="https://images.unsplash.com/photo-1519150268069-c094cfc0b3c8?q=80&w=2102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="aboutImg" alt="...">
        </div>
        <div class="col-md-6 p-3 aboutTxt" >
          <h1 class="fw-bold">「溫馨家園，流浪貓狗的專屬天地」</h1>
          <p>「這裡是溫馨家園，我們是一個專為流浪貓狗而設的網上商店。在這裡，您可以找到各種周邊用品，從貼心的食品到舒適的寢具，都能滿足您對愛寵的所有需求。同時，透過您的每一次購買，我們也將捐贈飼料給中途浪浪之家，幫助無家可歸的小生命找到溫暖的家。感謝您的支持，讓我們攜手為這些可愛的生命帶來更多的關愛和希望。」</p>
        </div>
      </div>
      <div class="row align-items-center flex-row-reverse" data-aos="fade-left">
        <div class="col-md-6 p-3">
          <img src="https://cdn.discordapp.com/attachments/836255942999146530/1214411809411432448/photo-1548595152-f556f2d0fde5.png?ex=65f90422&is=65e68f22&hm=9296f5216ccccdec06f91b442673656f11f15abc8c0c81b58a2c52da736367ca&" class="aboutImg" alt="...">
        </div>
        <div class="col-md-6 p-3">
          <h1 class="fw-bold">購買寵物週邊&捐贈飼料</h1>
          <p>「我們的平台，在這裡，您將找到各種貓狗週邊用品，從時尚的衣物到舒適的床鋪，滿足您對愛寵的一切需求。我們精心挑選的商品，不僅品質可靠，更能為您和您的寵物帶來無限的歡樂和幸福，讓您與愛寵共享無盡的快樂時光。」</p>
          <p>「您的每一次購買，都將是流浪貓狗的一絲希望和溫暖。通過我們的平台，您不僅可以為自己的寵物購買高品質的商品，還可以選擇購買捐贈飼料給中途浪浪之家。讓我們攜手為這些無家可歸的小生命帶去溫暖和愛心，讓他們也能擁有一個溫暖的家。感謝您的支持和善心，您的愛心將助力我們一起為流浪貓狗們打造一個更美好的未來！」</p>
        </div>
      </div>
    </div>
    <div class="container infoArea mt-5">
      <h1 class="fw-bold">在這邊你可以...</h1>
      <h1 class="fw-bold">幫助浪浪</h1>
      <div class="row"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div class="col-lg-12 col-12 p-3" >
          <div class="row flex-wrap">
            <div class="col-lg-6 col-12 mb-lg-0 mb-4">
            <router-link
                class="card-hotProduct card-lg"
                v-if="donateProducts && donateProducts.length > 0"
                :style="`background-image: url(${donateProducts[0].imageUrl})`"
                :to="`/product/${donateProducts[0].id}`"
              >
              <h5>{{ donateProducts[0].title }}</h5>
              <div>{{ donateProducts[0].category }}</div>
              <div>{{ `${donateProducts[0].price}/${donateProducts[0].unit}`}}</div>
              </router-link>
            </div>
            <div class="col-lg-6 col-12">
              <div class="row gx-4 gy-4">
             <div v-for="donateProduct in filteredDonateProducts" class="col-md-6 col-12" :key="donateProduct.id" >
              <router-link
                class="card-hotProduct card--lg"
                v-if="donateProducts && donateProducts.length > 0"
                :style="`background-image: url(${donateProduct.imageUrl})`"
                :to="`/product/${donateProduct.id}`"
              >
              <h5>{{ donateProduct.title }}</h5>
              <div>{{ donateProduct.category }}</div>
              <div>{{ `${donateProduct.price}/${donateProduct.unit}`}}</div>
              </router-link>
             </div>
            </div>
          </div>
            </div>
        </div>
    </div>

      <h1 class="mt-5 fw-bold">挑選毛孩商品</h1>
      <div class="row"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <div class="col-lg-12 col-12 p-3" >
          <div class="row flex-wrap">
            <div class="col-lg-6 col-12 mb-lg-0 mb-4">
              <router-link
                class="card-hotProduct card-lg"
                v-if="products && products.length > 0"
                :style="`background-image: url(${products[0].imageUrl})`"
                :to="`/product/${products[0].id}`"
              >
              <h5>{{ products[0].title }}</h5>
              <div>{{ products[0].category }}</div>
              <div>{{ `${products[0].price}/${products[0].unit}`}}</div>
              </router-link>
            </div>
            <div class="col-lg-6 col-12">
              <div class="row gx-4 gy-4">
                <div v-for="products in filteredProducts" class="col-md-6 col-12" :key="products.id" >
              <router-link
                class="card-hotProduct card--lg"
                v-if="products"
                :style="`background-image: url(${products.imageUrl})`"
                :to="`/product/${products.id}`"
              >
              <h5>{{ products.title }}</h5>
              <div>{{ products.category }}</div>
              <div>{{ `${products.price}/${products.unit}`}}</div>
              </router-link>
             </div>
            </div>
          </div>
            </div>
        </div>
    </div>
    </div>

    <hr>

      <div class="container customerFeedback">
        <h3 class="mt-5 fw-bold">客戶評價</h3>
        <div  v-for="i in 1" :key="i" class="row mt-5 pb-5 personInfo" data-aos="zoom-in"  data-aos-anchor-placement="bottom-bottom">
          <div class="col-md-3 col-12">
            <div class=" d-flex justify-content-center">
                <div class="personImg">
                <img src="https://cdn.discordapp.com/attachments/836255942999146530/1214795867194789898/240_F_289993382_QJID0KDhWhwp8JX3llcoD8V9jDKAZnpq.png?ex=65fa69d0&is=65e7f4d0&hm=19bf926cbe891769e841319e047b46549669ba576dde5f73761fec048f9faa98&" alt="">
              </div>
              </div>
              </div>
              <div class="col-md-9 col-12">
                <h5 class="fw-bold">clair</h5>
                <p>"我很感激這個網站提供的服務！我家的貓咪是從流浪生活中救出來的，所以我很支持他們的理念。我在這裡買了好多寵物用品，每次都很滿意，而且物品的品質都很好。再也不用擔心找不到合適的商品了！"</p>
              </div>
        </div>
      </div>
    <div class="container">
      <h5 class="fw-bold mt-3">近期熱銷</h5>
      <swiper
      :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }"
    :spaceBetween="10"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper mb-5 container">
        <swiper-slide v-for="donateProduct in filteredDonateProducts" :key="donateProduct.id">
          <div class="cardOuter">
              <router-link
                class="card-hotProduct card--lg"
                v-if="donateProducts && donateProducts.length > 0"
                :style="`background-image: url(${donateProduct.imageUrl})`"
                :to="`/product/${donateProduct.id}`"
              >
              <h5>{{ donateProduct.title }}</h5>
              <div>{{ donateProduct.category }}</div>
              <div>{{ `${donateProduct.price}/${donateProduct.unit}`}}</div>
              </router-link>
        </div>
        </swiper-slide>
      </swiper>
    </div>
    <div>.</div>
  </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// aos
import AOS from 'aos'
import 'aos/dist/aos.css'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      isLoading: true,
      products: [],
      donateProducts: [],
      modules: [Autoplay, Navigation, Pagination]
    }
  },
  mounted () {
    AOS.init()
    this.getProducts()
  },
  methods: {
    getProducts (page) {
      this.isLoading = true
      const donateUrl = `${VITE_API}/api/${VITE_PATH}/products?page=${page || 1}&category=贊助貓`
      const productUrl = `${VITE_API}/api/${VITE_PATH}/products?page=${page || 1}&category=狗飼料`
      axios.get(donateUrl)
        .then(res => {
          this.isLoading = false
          console.log(res)
          this.donateProducts = res.data.products
        })
        .catch(err => {
          this.isLoading = false
          alert(err.response.data.message)
        })
      axios.get(productUrl)
        .then(res => {
          this.isLoading = false
          console.log(res)
          this.products = res.data.products
        })
        .catch(err => {
          this.isLoading = false
          alert(err.response.data.message)
        })
    }
  },
  computed: {
    filteredDonateProducts () {
      // 这里你可以实现过滤逻辑，例如只取前4个
      return this.donateProducts.slice(1, 5)
    },
    filteredProducts () {
      return this.products.slice(1, 5)
    }
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
.cardOuter{
  padding: 15px;
}
.footer{
  background-color: #ddb66e;
}
.homebg{
  background-color: #fff3e0;
}
</style>
