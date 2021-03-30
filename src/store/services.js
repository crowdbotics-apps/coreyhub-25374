import axios from "axios"
const userAccountConnector = axios.create({
  baseURL: "https://tstcr2020102601-21976.botics.co/rest-auth",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const coreyHubAPI = axios.create({
  baseURL: "https://coreyhub-25374-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function useraccountconnector_post_registration_create(action) {
  return userAccountConnector.post(`/registration/`, null, {
    data: action.data
  })
}
function api_v1_category_list(action) {
  return coreyHubAPI.get(`/api/v1/category/`)
}
function api_v1_category_create(action) {
  return coreyHubAPI.post(`/api/v1/category/`, null, { data: action.data })
}
function api_v1_category_read(action) {
  return coreyHubAPI.get(`/api/v1/category/${action.id}/`)
}
function api_v1_category_update(action) {
  return coreyHubAPI.put(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_delete(action) {
  return coreyHubAPI.delete(`/api/v1/category/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return coreyHubAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return coreyHubAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return coreyHubAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_faq_list(action) {
  return coreyHubAPI.get(`/api/v1/faq/`)
}
function api_v1_faq_create(action) {
  return coreyHubAPI.post(`/api/v1/faq/`, null, { data: action.data })
}
function api_v1_faq_read(action) {
  return coreyHubAPI.get(`/api/v1/faq/${action.id}/`)
}
function api_v1_faq_update(action) {
  return coreyHubAPI.put(`/api/v1/faq/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_faq_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/faq/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_faq_delete(action) {
  return coreyHubAPI.delete(`/api/v1/faq/${action.id}/`)
}
function api_v1_favorites_list(action) {
  return coreyHubAPI.get(`/api/v1/favorites/`)
}
function api_v1_favorites_create(action) {
  return coreyHubAPI.post(`/api/v1/favorites/`, null, { data: action.data })
}
function api_v1_favorites_read(action) {
  return coreyHubAPI.get(`/api/v1/favorites/${action.id}/`)
}
function api_v1_favorites_update(action) {
  return coreyHubAPI.put(`/api/v1/favorites/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_favorites_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/favorites/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_favorites_delete(action) {
  return coreyHubAPI.delete(`/api/v1/favorites/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return coreyHubAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return coreyHubAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return coreyHubAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_location_list(action) {
  return coreyHubAPI.get(`/api/v1/location/`)
}
function api_v1_location_create(action) {
  return coreyHubAPI.post(`/api/v1/location/`, null, { data: action.data })
}
function api_v1_location_read(action) {
  return coreyHubAPI.get(`/api/v1/location/${action.id}/`)
}
function api_v1_location_update(action) {
  return coreyHubAPI.put(`/api/v1/location/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_location_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/location/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_location_delete(action) {
  return coreyHubAPI.delete(`/api/v1/location/${action.id}/`)
}
function api_v1_login_create(action) {
  return coreyHubAPI.post(`/api/v1/login/`)
}
function api_v1_myschedule_list(action) {
  return coreyHubAPI.get(`/api/v1/myschedule/`)
}
function api_v1_myschedule_create(action) {
  return coreyHubAPI.post(`/api/v1/myschedule/`, null, { data: action.data })
}
function api_v1_myschedule_read(action) {
  return coreyHubAPI.get(`/api/v1/myschedule/${action.id}/`)
}
function api_v1_myschedule_update(action) {
  return coreyHubAPI.put(`/api/v1/myschedule/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_myschedule_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/myschedule/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_myschedule_delete(action) {
  return coreyHubAPI.delete(`/api/v1/myschedule/${action.id}/`)
}
function api_v1_presenter_list(action) {
  return coreyHubAPI.get(`/api/v1/presenter/`)
}
function api_v1_presenter_create(action) {
  return coreyHubAPI.post(`/api/v1/presenter/`, null, { data: action.data })
}
function api_v1_presenter_read(action) {
  return coreyHubAPI.get(`/api/v1/presenter/${action.id}/`)
}
function api_v1_presenter_update(action) {
  return coreyHubAPI.put(`/api/v1/presenter/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_presenter_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/presenter/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_presenter_delete(action) {
  return coreyHubAPI.delete(`/api/v1/presenter/${action.id}/`)
}
function api_v1_schedule_list(action) {
  return coreyHubAPI.get(`/api/v1/schedule/`)
}
function api_v1_schedule_create(action) {
  return coreyHubAPI.post(`/api/v1/schedule/`, null, { data: action.data })
}
function api_v1_schedule_read(action) {
  return coreyHubAPI.get(`/api/v1/schedule/${action.id}/`)
}
function api_v1_schedule_update(action) {
  return coreyHubAPI.put(`/api/v1/schedule/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_schedule_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/schedule/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_schedule_delete(action) {
  return coreyHubAPI.delete(`/api/v1/schedule/${action.id}/`)
}
function api_v1_signup_create(action) {
  return coreyHubAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_sponsor_list(action) {
  return coreyHubAPI.get(`/api/v1/sponsor/`)
}
function api_v1_sponsor_create(action) {
  return coreyHubAPI.post(`/api/v1/sponsor/`, null, { data: action.data })
}
function api_v1_sponsor_read(action) {
  return coreyHubAPI.get(`/api/v1/sponsor/${action.id}/`)
}
function api_v1_sponsor_update(action) {
  return coreyHubAPI.put(`/api/v1/sponsor/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_sponsor_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/sponsor/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_sponsor_delete(action) {
  return coreyHubAPI.delete(`/api/v1/sponsor/${action.id}/`)
}
function api_v1_vendor_list(action) {
  return coreyHubAPI.get(`/api/v1/vendor/`)
}
function api_v1_vendor_create(action) {
  return coreyHubAPI.post(`/api/v1/vendor/`, null, { data: action.data })
}
function api_v1_vendor_read(action) {
  return coreyHubAPI.get(`/api/v1/vendor/${action.id}/`)
}
function api_v1_vendor_update(action) {
  return coreyHubAPI.put(`/api/v1/vendor/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_vendor_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/vendor/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_vendor_delete(action) {
  return coreyHubAPI.delete(`/api/v1/vendor/${action.id}/`)
}
function api_v1_vendordetail_list(action) {
  return coreyHubAPI.get(`/api/v1/vendordetail/`)
}
function api_v1_vendordetail_create(action) {
  return coreyHubAPI.post(`/api/v1/vendordetail/`, null, { data: action.data })
}
function api_v1_vendordetail_read(action) {
  return coreyHubAPI.get(`/api/v1/vendordetail/${action.id}/`)
}
function api_v1_vendordetail_update(action) {
  return coreyHubAPI.put(`/api/v1/vendordetail/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_vendordetail_partial_update(action) {
  return coreyHubAPI.patch(`/api/v1/vendordetail/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_vendordetail_delete(action) {
  return coreyHubAPI.delete(`/api/v1/vendordetail/${action.id}/`)
}
function rest_auth_login_create(action) {
  return coreyHubAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return coreyHubAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return coreyHubAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return coreyHubAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return coreyHubAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return coreyHubAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return coreyHubAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return coreyHubAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return coreyHubAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return coreyHubAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return coreyHubAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  useraccountconnector_post_registration_create,
  api_v1_category_list,
  api_v1_category_create,
  api_v1_category_read,
  api_v1_category_update,
  api_v1_category_partial_update,
  api_v1_category_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_faq_list,
  api_v1_faq_create,
  api_v1_faq_read,
  api_v1_faq_update,
  api_v1_faq_partial_update,
  api_v1_faq_delete,
  api_v1_favorites_list,
  api_v1_favorites_create,
  api_v1_favorites_read,
  api_v1_favorites_update,
  api_v1_favorites_partial_update,
  api_v1_favorites_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_location_list,
  api_v1_location_create,
  api_v1_location_read,
  api_v1_location_update,
  api_v1_location_partial_update,
  api_v1_location_delete,
  api_v1_login_create,
  api_v1_myschedule_list,
  api_v1_myschedule_create,
  api_v1_myschedule_read,
  api_v1_myschedule_update,
  api_v1_myschedule_partial_update,
  api_v1_myschedule_delete,
  api_v1_presenter_list,
  api_v1_presenter_create,
  api_v1_presenter_read,
  api_v1_presenter_update,
  api_v1_presenter_partial_update,
  api_v1_presenter_delete,
  api_v1_schedule_list,
  api_v1_schedule_create,
  api_v1_schedule_read,
  api_v1_schedule_update,
  api_v1_schedule_partial_update,
  api_v1_schedule_delete,
  api_v1_signup_create,
  api_v1_sponsor_list,
  api_v1_sponsor_create,
  api_v1_sponsor_read,
  api_v1_sponsor_update,
  api_v1_sponsor_partial_update,
  api_v1_sponsor_delete,
  api_v1_vendor_list,
  api_v1_vendor_create,
  api_v1_vendor_read,
  api_v1_vendor_update,
  api_v1_vendor_partial_update,
  api_v1_vendor_delete,
  api_v1_vendordetail_list,
  api_v1_vendordetail_create,
  api_v1_vendordetail_read,
  api_v1_vendordetail_update,
  api_v1_vendordetail_partial_update,
  api_v1_vendordetail_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
