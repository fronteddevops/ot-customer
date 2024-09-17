export default {
  GET_USER_DETAIL: (id) => `/userdetails/${id}`,
  UPDATE_USER_DETAIL: (id) => `/userdetails/${id}`,
  ADD_ADDRESS: () => `/address`,
  GET_ADDRESS: () => `/address`,
  GET_ADDRESS_DETAIL: (id) => `/address/${id}`,
  GET_SUBSCRIBED_AMBASADDORS: (search) => `/users/subscription${search ? '?search=' + search : ''
    }`,
  GET_AMBASSADORS_LIST: () => `/ users / ambassador`,

};
