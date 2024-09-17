import Axios from 'axios'
const initialiseInterceptor = () => {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

  // Add a request interceptor
  Axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // Add a response interceptor
  Axios.interceptors.response.use(
    (response) => {
      console.log('interceptor response ***********', response)
      return response
    },
    (error) => {
      console.log('error in interceptor ==>', error)
      if (error.response && (error.response.status == 401 || error.response.status == 403)) {
        localStorage.removeItem('email');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_Details');
        setTimeout(() => {
          window.location.replace("/login");
        }, 2000);
        return Promise.reject(error);
      } else {
        return Promise.reject(error)
      }
    }
  )
}

export default initialiseInterceptor
