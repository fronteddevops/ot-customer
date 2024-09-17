import Axios from 'axios'
import constant from '../../constant'
import api from '../api'
/* eslint-disable */

export default {
  ADD_SUB_CATEGORY : (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.SubCategory.ADD_SUB_CATEGORY(), data)
        resolve(resolve)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_SUB_CATEGORY_DETAILS: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.SubCategory.GET_SUB_CATEGORY_DETAILS(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_SUB_CATEGORY : () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.SubCategory.GET_SUB_CATEGORY())
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_SUB_CATEGORY_BY_CATEGORY : (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.SubCategory.GET_SUB_CATEGORY_BY_CATEGORY(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  UPDATE_SUB_CATEGORY : (data, id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.put(constant.BASE_URL + api.SubCategory.UPDATE_SUB_CATEGORY() + id, data)
        resolve(response)
      } catch (err) {
        reject(err)
      }

    })
  },
  DELETE_SUB_CATEGORY : (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.delete(constant.BASE_URL + api.SubCategory.DELETE_SUB_CATEGORY() + id)
        resolve(response)
      } catch (err) {
        reject(err)
      }

    })
  }
}