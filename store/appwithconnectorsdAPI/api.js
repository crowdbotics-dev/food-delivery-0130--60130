import axios from "axios"
const appwithconnectorsdAPI = axios.create({
  baseURL: "https://appwithconnectors-d-60849-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return appwithconnectorsdAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_store_list(payload) {
  return appwithconnectorsdAPI.get(`/api/v1/store/`)
}
function api_v1_store_create(payload) {
  return appwithconnectorsdAPI.post(`/api/v1/store/`, payload.data)
}
function api_v1_signup_create(payload) {
  return appwithconnectorsdAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_product_list(payload) {
  return appwithconnectorsdAPI.get(`/api/v1/product/`)
}
function api_v1_product_create(payload) {
  return appwithconnectorsdAPI.post(`/api/v1/product/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return appwithconnectorsdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return appwithconnectorsdAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return appwithconnectorsdAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return appwithconnectorsdAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return appwithconnectorsdAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return appwithconnectorsdAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return appwithconnectorsdAPI.post(`/rest-auth/logout/`)
}
function api_v1_store_retrieve(payload) {
  return appwithconnectorsdAPI.get(`/api/v1/store/${payload.id}/`)
}
function api_v1_store_update(payload) {
  return appwithconnectorsdAPI.put(`/api/v1/store/${payload.id}/`, payload.data)
}
function api_v1_store_partial_update(payload) {
  return appwithconnectorsdAPI.patch(
    `/api/v1/store/${payload.id}/`,
    payload.data
  )
}
function api_v1_store_destroy(payload) {
  return appwithconnectorsdAPI.delete(`/api/v1/store/${payload.id}/`)
}
function api_v1_product_retrieve(payload) {
  return appwithconnectorsdAPI.get(`/api/v1/product/${payload.id}/`)
}
function api_v1_product_update(payload) {
  return appwithconnectorsdAPI.put(
    `/api/v1/product/${payload.id}/`,
    payload.data
  )
}
function api_v1_product_partial_update(payload) {
  return appwithconnectorsdAPI.patch(
    `/api/v1/product/${payload.id}/`,
    payload.data
  )
}
function api_v1_product_destroy(payload) {
  return appwithconnectorsdAPI.delete(`/api/v1/product/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return appwithconnectorsdAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return appwithconnectorsdAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return appwithconnectorsdAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return appwithconnectorsdAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return appwithconnectorsdAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_store_list,
  api_v1_store_create,
  api_v1_signup_create,
  api_v1_product_list,
  api_v1_product_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_store_retrieve,
  api_v1_store_update,
  api_v1_store_partial_update,
  api_v1_store_destroy,
  api_v1_product_retrieve,
  api_v1_product_update,
  api_v1_product_partial_update,
  api_v1_product_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
