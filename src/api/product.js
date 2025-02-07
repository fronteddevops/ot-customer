export default {
  GET_PRODUCT: (query) => `/products?${query ? query : ''}`,
  ADD_PRODUCT: () => '/products',
  CREATE_PRODUCT_REVIEW: () => '/productreview',
  GET_PRODUCT_REVIEW: (id, orderDetailId) => `/productreview/me/${id}${orderDetailId ? `?orderDetailId=${orderDetailId}` : ''}`,
  DELETE_PRODUCT: () => '/products/',
  UPDATE_PRODUCT: () => '/products/',
  GET_PRODUCT_DETAILS: (id) => `/products/${id}`,
  GET_WISHLIST: (id) => `/wishlist/${id}`,
  ADD_TO_CART: () => `/cart`,
  GET_CART: () => `/cart`,
  CHECKOUT: () => `/checkout`,
  APPLY_COUPON: () => `/applyDiscount`,
  GET_ORDER_LISTING: (query) => `/orderdetails/me?${query}`,
  GET_ORDER_DETAIL: (id) => `/orders/${id}`,
  GET_ORDER_PRODUCT_DETAIL: (id) => `/orderdetails/?orderId=${id}`,
  GET_WISHLIST_DETAILS: () => `/wishlist`,
  GET_PRODUCT_AND_AMBASSADOR: (query) => `/search/all?${query}`,
  ORDER_SUCCESS: (id) => `/orders/success/${id}`

}
