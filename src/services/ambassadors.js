/* eslint-disable no-async-promise-executor */
import Axios from 'axios'
import constant from '../../constant'
import api from '../api'

export default {

  GET_AMBASSADORS: (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Ambassadors.GET_AMBASSADORS(query))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  ADD_SUBSCRIBER: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Ambassadors.ADD_SUBSCRIBER(), data)
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  PAYNOW: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Ambassadors.PAYNOW(), data)
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  PAID_POST_SUCCESS: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + api.Ambassadors.PAID_POST_SUCCESS(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  REMOVE_SUBSCRIBER: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.put(constant.BASE_URL + api.Ambassadors.REMOVE_SUBSCRIBER(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_AMBASSADORS_DETAILS: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Ambassadors.GET_AMBASSADORS_DETAILS(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_AMBASSADORS_PAIDPOST :(id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Ambassadors.GET_AMBASSADORS_PAIDPOST(id))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  GET_SUBSCRIBER: (search, limit, page) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(
          constant.BASE_URL + api.Ambassadors.GET_SUBSCRIBER(search, limit, page)
        )
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },






}
