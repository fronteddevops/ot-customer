/* eslint-disable no-async-promise-executor */
import Axios from 'axios'
import constant from '../../constant'
import api from '../api'

export default {



    ADD_NEWS_LETTER_SUBSCRIBE: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await Axios.post(constant.BASE_URL + api.NewsLetterSubscriber.ADD_NEWS_LETTER_SUBSCRIBE(), data)

                resolve(response)
            } catch (err) {
                reject(err)
            }
        })
    },

    ADD_CONTACT_FORM: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await Axios.post(constant.BASE_URL + api.NewsLetterSubscriber.ADD_CONTACT_FORM(), data)

                resolve(response)
            } catch (err) {
                reject(err)
            }
        })
    },


}
