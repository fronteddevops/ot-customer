
export default {
  GET_SUB_SUB_CATEGORY : () => '/subsubcategories',
  ADD_SUB_SUB_CATEGORY : () => '/subsubcategories',
  DELETE_SUB_SUB_CATEGORY : () => '/subsubcategories/',
  UPDATE_SUB_SUB_CATEGORY:() => '/subsubcategories/',
  GET_SUB_SUB_CATEGORY_DETAILS:(id) => `/subsubcategories/${id}`,
  GET_SUB_SUB_CATEGORY_BY_SUB_CATEGORY : (id) => `/subsubcategories?subCategoryId=${+id}`
}