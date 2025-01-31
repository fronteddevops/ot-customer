/* eslint-disable no-async-promise-executor */
import Axios from 'axios'
import constant from '../../constant'
import api from '../api'

export default {

  GET_PRODUCT: (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_PRODUCT(query))
        console.log(response,"2122")
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_PRODUCT_AND_AMBASSADOR: (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_PRODUCT_AND_AMBASSADOR(query))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_ORDER_LISTING: (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_ORDER_LISTING(query))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_ORDER_DETAIL: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_ORDER_DETAIL(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_ORDER_PRODUCT_DETAIL: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_ORDER_PRODUCT_DETAIL(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_PRODUCT_DETAILS: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_PRODUCT_DETAILS(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_WISHLIST: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.put(constant.BASE_URL + api.Product.GET_WISHLIST(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },

  GET_WISHLIST_DETAILS: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_WISHLIST_DETAILS())
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },





  ADD_TO_CART: (cartData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.put(constant.BASE_URL + api.Product.ADD_TO_CART(), cartData)
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  DELETE_CART: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.delete(constant.BASE_URL + api.Product.ADD_TO_CART())
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  APPLY_COUPON: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Product.APPLY_COUPON(), data)
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_CART: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_CART())
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  CHECKOUT: (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Product.CHECKOUT(), { userId: userId })
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },

  ADD_PRODUCT: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Product.ADD_PRODUCT(), data)

        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  CREATE_PRODUCT_REVIEW: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Product.CREATE_PRODUCT_REVIEW(), data)

        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_PRODUCT_REVIEW: (id, orderDetailId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Product.GET_PRODUCT_REVIEW(id, orderDetailId))

        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },

  DELETE_PRODUCT: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.delete(constant.BASE_URL + api.Product.DELETE_PRODUCT() + id)
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },

  ORDER_SUCCESS: ( id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Product.ORDER_SUCCESS(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  }
}
