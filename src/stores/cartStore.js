import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_API, VITE_PATH } = import.meta.env
export default defineStore('cartStore', {
  state: () => ({
    count: 0,
    cartsNum: 0,
    artEmpty: false,
    cart: {
    },
    productModal: null,
    loadingItem: ''
  }),
  actions: {
    increment () {
      this.count += 1
    },
    addToCart (id, qty = 1) {
      console.log('pinia')
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      axios.post(url, { data: { product_id: id, qty } })
        .then(res => {
          console.log(res)
          this.cartsNum = res.data.data.length
          console.log('this.cartsNum', this.cartsNum)
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
    },
    getCart () {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      axios.get(url)
        .then(res => {
          console.log('pinnacCarttt')
          console.log(res.data)
          this.cart = res.data.data
          if (this.cart.total === 0) {
            this.cartEmpty = true
          } else {
            this.cartEmpty = false
          }
        })
        .catch(err => {
          alert(err)
        })
    },
    updateCart (data) {
      console.log('pinnnnna')
      this.loadingItem = data.id
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${data.id}`
      axios.put(url, { data: { product_id: data.product_id, qty: data.qty } })
        .then(res => {
          this.loadingItem = ''
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          this.getCart()
        })
        .catch(err => {
          this.loadingItem = ''
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          // alert(err.response.data.message)
        })
    },
    removeCartItem (id) {
      console.log('pinnnnna')
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${id}`
      this.loadingItem = id
      axios.delete(url)
        .then(res => {
          this.loadingItem = ''
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          this.getCart()
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
    },
    clearCart () {
      console.log('pinnnnna')
      Swal.fire({
        title: '確定要清空購物車嗎?',
        text: ' 清空後無法復原! ',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定，我要清空購物車!',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${VITE_API}/api/${VITE_PATH}/carts`
          axios.delete(url)
            .then(res => {
              Swal.fire({
                title: '刪除成功!',
                text: res.data.message,
                icon: 'success'
              }).then(() => {
                this.getCart()
              })
            })
            .catch(err => {
              Swal.fire({
                title: 'Error!',
                text: err.response.data.message,
                icon: 'error'
              })
            })
        }
      })
    }
  }
})
