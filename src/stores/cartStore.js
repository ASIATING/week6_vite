import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_API, VITE_PATH } = import.meta.env
export default defineStore('counter', {
  state: () => ({ count: 0 }),
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
  }
})
