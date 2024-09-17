export default {
  GET_AMBASSADORS: (query) => `/users/ambassador?${query ? query : ''}`,
  GET_AMBASSADORS_PAIDPOST: (id) => `/post/subscribed?ambassadorId=${id}`,
  GET_AMBASSADORS_DETAILS: (id) => `/users/ambassador/${id}`,
  ADD_SUBSCRIBER: () => `/subscribers`,
  PAYNOW: () => `/paidPost`,
  PAID_POST_SUCCESS: (id) => `/paidPost/success/${id}`,
  // ADD_SUBSCRIBER: (id) => `/stripe/subscribe/${id}`,
  REMOVE_SUBSCRIBER: (id) => `/subscribers/unsubscribe/${id}`,
  GET_SUBSCRIBER: (search, limit, page) => `/subscribers/myplans?${search ? 'search=' + search + '&' : ''}${limit ? 'limit=' + limit + '&' : ''}${page ? 'page=' + page : ''}`,
}
