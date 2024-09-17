
export default {
  GET_SUB_CATEGORY : () => '/subcategories',
  ADD_SUB_CATEGORY : () => '/subcategories',
  DELETE_SUB_CATEGORY : () => '/subcategories/',
  UPDATE_SUB_CATEGORY:() => '/subcategories/',
  GET_SUB_CATEGORY_DETAILS:(id) => `/subcategories/${id}`,
  GET_SUB_CATEGORY_BY_CATEGORY : (id) => `/subcategories?categoryId=${+id}`

}