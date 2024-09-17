/* eslint-disable no-async-promise-executor */
import Axios from 'axios'
import constant from '../../constant'
import api from '../api'

export default {

  GET_SUBSCRIBED_POST: (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.get(constant.BASE_URL + api.Post.GET_SUBSCRIBED_POST(query))
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  }
}
