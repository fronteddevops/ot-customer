/* eslint-disable no-async-promise-executor */
import Axios from 'axios'
import constant from '../../constant'
import api from '../api'

export default {

  GET_CATEGORY: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Category.GET_CATEGORY())
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_CATEGORY_DETAILS: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Category.GET_CATEGORY_DETAILS(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  ADD_CATEGORY: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Category.ADD_CATEGORY(), data)
        resolve(response)
      } catch (err) {
        reject(err)

      }
    })
  },

  UPDATE_CATEGORY: (data, id) => {
    return new Promise(async (resolve, reject) => {
      try {

        const response = await Axios.put(constant.BASE_URL + api.Category.UPDATE_CATEGORY() + id, data)
        resolve(response)
      } catch (err) {
        reject(err)

      }
    })
  },
  DELETE_CATEGORY: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.delete(constant.BASE_URL + api.Category.DELETE_CATEGORY() + id)
        resolve(response)
      } catch (err) {
        reject(err)

      }
    })
  }


}
