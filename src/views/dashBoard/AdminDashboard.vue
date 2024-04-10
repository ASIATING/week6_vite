<template>
<div class="container-fluid">
  <div class="row">
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/products">後台</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">回到前台</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/products" class="nav-link">後台產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/orders" class="nav-link">後台訂單</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/coupons" class="nav-link">優惠卷管理</RouterLink>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="mainArea">
    <!-- 主内容区域 -->
    <main class=" container">
      <!-- 在这里放置主要内容 -->
      <RouterView v-if="checkSuccess" />
    </main>
  </div>
</div>
</template>

<script>
import axios from 'axios'
const { VITE_API } = import.meta.env

export default {
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    this.checkLogin()
  },
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        axios.post(`${VITE_API}/api/user/check`)
          .then(res => {
            this.checkSuccess = true
            this.$router.push('/admin/products')
          })
          .catch(err => {
            alert(err.response.data.message)
            this.$router.push('/login')
          })
      } else {
        alert('請先登入')
        this.$router.push('/login')
      }
    },
    logout () {
      axios.post(`${VITE_API}/logout`)
        .then(res => {
          document.cookie = 'hexToken=;expires=;'
          alert('已登出')
          this.$router.push('/login')
        })
        .catch(err => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>
.mainArea{
  margin-top: 80px;
}
</style>
