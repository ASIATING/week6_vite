<template>
  <div>
    <div class="container mt-5">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal text-center">
            請先登入
          </h1>
          <div class="col-8">
            <form id="form" class="form-signin">
              <div class="form-floating mb-3">
                <input type="email" class="form-control"
                  placeholder="name@example.com"  v-model="user.username" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="password"
                  placeholder="Password" v-model="user.password" required>
                <label for="password">Password</label>
              </div>
              <button type="button" class="btn btn-lg btn-primary w-100 mt-3" v-on:click="login">
                登入
              </button>
            </form>
          </div>
        </div>
        <p class="mt-5 mb-3 text-muted">
          &copy; 2024~∞ - 貓狗後台
        </p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${import.meta.env.VITE_API}/admin/signin`
      axios.post(api, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch(err => {
          alert(err)
        })
    }
  }

}
</script>

<style scoped>
  html,
    body {
      height: 100%;
      text-align: center;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .form-signin {
      width: 100%;
      max-width: 330px;
      padding: 15px;
      margin: auto;
    }
</style>
