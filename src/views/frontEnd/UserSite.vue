<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbarColor fixed-top">
      <div class="container">
        <a class="navbar-brand d-flex align-center" href="#"
          >
          <img src="/pawprint_1076928.png" alt="貓狗電商"/>
          <div class="fs-6 fw-bold ms-1">浪浪小舖</div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <!-- <li class="nav-item active">
              <RouterLink to="/" class="nav-link">首頁</RouterLink>
            </li> -->
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link">產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/cart" class="nav-link  position-relative">
                購物車
                <span class="badge bgInit">
                  {{ cart.carts?cart.carts.length:0 }}
                </span>
                </RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink to="/admin/products" class="nav-link"
                >後台商品列表</RouterLink
              >
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <RouterView class="marginTop50" />
  <FooterArea />
</template>

<script>
import { mapState, mapActions } from 'pinia'
import FooterArea from '@/components/front/FooterArea.vue'
import cartStore from '@/stores/cartStore'
export default {
  components: {
    FooterArea
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted () {
    this.getCart()
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  }
}
</script>

<style scoped>
.bgInit{
  position: absolute;
  top: 10px;
  color: black;
  background-color: #ffb300;
}
.navbarColor {
  background-color: #ffe0b2;
}
.marginTop50{
  margin-top: 58px;
}
</style>
