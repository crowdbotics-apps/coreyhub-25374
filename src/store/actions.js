import * as types from "./constants"
export const useraccountconnector_post_registration_create = data => ({
  type: types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE,
  data
})
export const useraccountconnector_post_registration_createSucceeded = (
  response,
  starter
) => ({
  type: types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const useraccountconnector_post_registration_createFailed = (
  response,
  starter
) => ({
  type: types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE_FAILED,
  response,
  starter
})
export const api_v1_category_list = () => ({ type: types.API_V1_CATEGORY_LIST })
export const api_v1_category_listSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_listFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_LIST_FAILED,
  response,
  starter
})
export const api_v1_category_create = data => ({
  type: types.API_V1_CATEGORY_CREATE,
  data
})
export const api_v1_category_createSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_createFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_FAILED,
  response,
  starter
})
export const api_v1_category_read = () => ({ type: types.API_V1_CATEGORY_READ })
export const api_v1_category_readSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_readFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_READ_FAILED,
  response,
  starter
})
export const api_v1_category_update = data => ({
  type: types.API_V1_CATEGORY_UPDATE,
  data
})
export const api_v1_category_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_updateFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_category_partial_update = data => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE,
  data
})
export const api_v1_category_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_category_delete = () => ({
  type: types.API_V1_CATEGORY_DELETE
})
export const api_v1_category_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_deleteFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_FAILED,
  response,
  starter
})
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  response,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  response,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_faq_list = () => ({ type: types.API_V1_FAQ_LIST })
export const api_v1_faq_listSucceeded = (response, starter) => ({
  type: types.API_V1_FAQ_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_faq_listFailed = (response, starter) => ({
  type: types.API_V1_FAQ_LIST_FAILED,
  response,
  starter
})
export const api_v1_faq_create = data => ({
  type: types.API_V1_FAQ_CREATE,
  data
})
export const api_v1_faq_createSucceeded = (response, starter) => ({
  type: types.API_V1_FAQ_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_faq_createFailed = (response, starter) => ({
  type: types.API_V1_FAQ_CREATE_FAILED,
  response,
  starter
})
export const api_v1_faq_read = () => ({ type: types.API_V1_FAQ_READ })
export const api_v1_faq_readSucceeded = (response, starter) => ({
  type: types.API_V1_FAQ_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_faq_readFailed = (response, starter) => ({
  type: types.API_V1_FAQ_READ_FAILED,
  response,
  starter
})
export const api_v1_faq_update = data => ({
  type: types.API_V1_FAQ_UPDATE,
  data
})
export const api_v1_faq_updateSucceeded = (response, starter) => ({
  type: types.API_V1_FAQ_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_faq_updateFailed = (response, starter) => ({
  type: types.API_V1_FAQ_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_faq_partial_update = data => ({
  type: types.API_V1_FAQ_PARTIAL_UPDATE,
  data
})
export const api_v1_faq_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_FAQ_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_faq_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_FAQ_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_faq_delete = () => ({ type: types.API_V1_FAQ_DELETE })
export const api_v1_faq_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_FAQ_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_faq_deleteFailed = (response, starter) => ({
  type: types.API_V1_FAQ_DELETE_FAILED,
  response,
  starter
})
export const api_v1_favorites_list = () => ({
  type: types.API_V1_FAVORITES_LIST
})
export const api_v1_favorites_listSucceeded = (response, starter) => ({
  type: types.API_V1_FAVORITES_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_favorites_listFailed = (response, starter) => ({
  type: types.API_V1_FAVORITES_LIST_FAILED,
  response,
  starter
})
export const api_v1_favorites_create = data => ({
  type: types.API_V1_FAVORITES_CREATE,
  data
})
export const api_v1_favorites_createSucceeded = (response, starter) => ({
  type: types.API_V1_FAVORITES_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_favorites_createFailed = (response, starter) => ({
  type: types.API_V1_FAVORITES_CREATE_FAILED,
  response,
  starter
})
export const api_v1_favorites_read = () => ({
  type: types.API_V1_FAVORITES_READ
})
export const api_v1_favorites_readSucceeded = (response, starter) => ({
  type: types.API_V1_FAVORITES_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_favorites_readFailed = (response, starter) => ({
  type: types.API_V1_FAVORITES_READ_FAILED,
  response,
  starter
})
export const api_v1_favorites_update = data => ({
  type: types.API_V1_FAVORITES_UPDATE,
  data
})
export const api_v1_favorites_updateSucceeded = (response, starter) => ({
  type: types.API_V1_FAVORITES_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_favorites_updateFailed = (response, starter) => ({
  type: types.API_V1_FAVORITES_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_favorites_partial_update = data => ({
  type: types.API_V1_FAVORITES_PARTIAL_UPDATE,
  data
})
export const api_v1_favorites_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_FAVORITES_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_favorites_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_FAVORITES_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_favorites_delete = () => ({
  type: types.API_V1_FAVORITES_DELETE
})
export const api_v1_favorites_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_FAVORITES_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_favorites_deleteFailed = (response, starter) => ({
  type: types.API_V1_FAVORITES_DELETE_FAILED,
  response,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  response,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  response,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_location_list = () => ({ type: types.API_V1_LOCATION_LIST })
export const api_v1_location_listSucceeded = (response, starter) => ({
  type: types.API_V1_LOCATION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_location_listFailed = (response, starter) => ({
  type: types.API_V1_LOCATION_LIST_FAILED,
  response,
  starter
})
export const api_v1_location_create = data => ({
  type: types.API_V1_LOCATION_CREATE,
  data
})
export const api_v1_location_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOCATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_location_createFailed = (response, starter) => ({
  type: types.API_V1_LOCATION_CREATE_FAILED,
  response,
  starter
})
export const api_v1_location_read = () => ({ type: types.API_V1_LOCATION_READ })
export const api_v1_location_readSucceeded = (response, starter) => ({
  type: types.API_V1_LOCATION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_location_readFailed = (response, starter) => ({
  type: types.API_V1_LOCATION_READ_FAILED,
  response,
  starter
})
export const api_v1_location_update = data => ({
  type: types.API_V1_LOCATION_UPDATE,
  data
})
export const api_v1_location_updateSucceeded = (response, starter) => ({
  type: types.API_V1_LOCATION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_location_updateFailed = (response, starter) => ({
  type: types.API_V1_LOCATION_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_location_partial_update = data => ({
  type: types.API_V1_LOCATION_PARTIAL_UPDATE,
  data
})
export const api_v1_location_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_LOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_location_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_LOCATION_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_location_delete = () => ({
  type: types.API_V1_LOCATION_DELETE
})
export const api_v1_location_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_LOCATION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_location_deleteFailed = (response, starter) => ({
  type: types.API_V1_LOCATION_DELETE_FAILED,
  response,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const api_v1_myschedule_list = () => ({
  type: types.API_V1_MYSCHEDULE_LIST
})
export const api_v1_myschedule_listSucceeded = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_myschedule_listFailed = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_LIST_FAILED,
  response,
  starter
})
export const api_v1_myschedule_create = data => ({
  type: types.API_V1_MYSCHEDULE_CREATE,
  data
})
export const api_v1_myschedule_createSucceeded = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_myschedule_createFailed = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_myschedule_read = () => ({
  type: types.API_V1_MYSCHEDULE_READ
})
export const api_v1_myschedule_readSucceeded = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_myschedule_readFailed = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_READ_FAILED,
  response,
  starter
})
export const api_v1_myschedule_update = data => ({
  type: types.API_V1_MYSCHEDULE_UPDATE,
  data
})
export const api_v1_myschedule_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_myschedule_updateFailed = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_myschedule_partial_update = data => ({
  type: types.API_V1_MYSCHEDULE_PARTIAL_UPDATE,
  data
})
export const api_v1_myschedule_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_MYSCHEDULE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_myschedule_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_myschedule_delete = () => ({
  type: types.API_V1_MYSCHEDULE_DELETE
})
export const api_v1_myschedule_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_myschedule_deleteFailed = (response, starter) => ({
  type: types.API_V1_MYSCHEDULE_DELETE_FAILED,
  response,
  starter
})
export const api_v1_presenter_list = () => ({
  type: types.API_V1_PRESENTER_LIST
})
export const api_v1_presenter_listSucceeded = (response, starter) => ({
  type: types.API_V1_PRESENTER_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_presenter_listFailed = (response, starter) => ({
  type: types.API_V1_PRESENTER_LIST_FAILED,
  response,
  starter
})
export const api_v1_presenter_create = data => ({
  type: types.API_V1_PRESENTER_CREATE,
  data
})
export const api_v1_presenter_createSucceeded = (response, starter) => ({
  type: types.API_V1_PRESENTER_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_presenter_createFailed = (response, starter) => ({
  type: types.API_V1_PRESENTER_CREATE_FAILED,
  response,
  starter
})
export const api_v1_presenter_read = () => ({
  type: types.API_V1_PRESENTER_READ
})
export const api_v1_presenter_readSucceeded = (response, starter) => ({
  type: types.API_V1_PRESENTER_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_presenter_readFailed = (response, starter) => ({
  type: types.API_V1_PRESENTER_READ_FAILED,
  response,
  starter
})
export const api_v1_presenter_update = data => ({
  type: types.API_V1_PRESENTER_UPDATE,
  data
})
export const api_v1_presenter_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PRESENTER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_presenter_updateFailed = (response, starter) => ({
  type: types.API_V1_PRESENTER_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_presenter_partial_update = data => ({
  type: types.API_V1_PRESENTER_PARTIAL_UPDATE,
  data
})
export const api_v1_presenter_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PRESENTER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_presenter_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_PRESENTER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_presenter_delete = () => ({
  type: types.API_V1_PRESENTER_DELETE
})
export const api_v1_presenter_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PRESENTER_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_presenter_deleteFailed = (response, starter) => ({
  type: types.API_V1_PRESENTER_DELETE_FAILED,
  response,
  starter
})
export const api_v1_schedule_list = () => ({ type: types.API_V1_SCHEDULE_LIST })
export const api_v1_schedule_listSucceeded = (response, starter) => ({
  type: types.API_V1_SCHEDULE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_schedule_listFailed = (response, starter) => ({
  type: types.API_V1_SCHEDULE_LIST_FAILED,
  response,
  starter
})
export const api_v1_schedule_create = data => ({
  type: types.API_V1_SCHEDULE_CREATE,
  data
})
export const api_v1_schedule_createSucceeded = (response, starter) => ({
  type: types.API_V1_SCHEDULE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_schedule_createFailed = (response, starter) => ({
  type: types.API_V1_SCHEDULE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_schedule_read = () => ({ type: types.API_V1_SCHEDULE_READ })
export const api_v1_schedule_readSucceeded = (response, starter) => ({
  type: types.API_V1_SCHEDULE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_schedule_readFailed = (response, starter) => ({
  type: types.API_V1_SCHEDULE_READ_FAILED,
  response,
  starter
})
export const api_v1_schedule_update = data => ({
  type: types.API_V1_SCHEDULE_UPDATE,
  data
})
export const api_v1_schedule_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SCHEDULE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_schedule_updateFailed = (response, starter) => ({
  type: types.API_V1_SCHEDULE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_schedule_partial_update = data => ({
  type: types.API_V1_SCHEDULE_PARTIAL_UPDATE,
  data
})
export const api_v1_schedule_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SCHEDULE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_schedule_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_SCHEDULE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_schedule_delete = () => ({
  type: types.API_V1_SCHEDULE_DELETE
})
export const api_v1_schedule_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_SCHEDULE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_schedule_deleteFailed = (response, starter) => ({
  type: types.API_V1_SCHEDULE_DELETE_FAILED,
  response,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  response,
  starter
})
export const api_v1_sponsor_list = () => ({ type: types.API_V1_SPONSOR_LIST })
export const api_v1_sponsor_listSucceeded = (response, starter) => ({
  type: types.API_V1_SPONSOR_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_sponsor_listFailed = (response, starter) => ({
  type: types.API_V1_SPONSOR_LIST_FAILED,
  response,
  starter
})
export const api_v1_sponsor_create = data => ({
  type: types.API_V1_SPONSOR_CREATE,
  data
})
export const api_v1_sponsor_createSucceeded = (response, starter) => ({
  type: types.API_V1_SPONSOR_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_sponsor_createFailed = (response, starter) => ({
  type: types.API_V1_SPONSOR_CREATE_FAILED,
  response,
  starter
})
export const api_v1_sponsor_read = () => ({ type: types.API_V1_SPONSOR_READ })
export const api_v1_sponsor_readSucceeded = (response, starter) => ({
  type: types.API_V1_SPONSOR_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_sponsor_readFailed = (response, starter) => ({
  type: types.API_V1_SPONSOR_READ_FAILED,
  response,
  starter
})
export const api_v1_sponsor_update = data => ({
  type: types.API_V1_SPONSOR_UPDATE,
  data
})
export const api_v1_sponsor_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SPONSOR_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_sponsor_updateFailed = (response, starter) => ({
  type: types.API_V1_SPONSOR_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_sponsor_partial_update = data => ({
  type: types.API_V1_SPONSOR_PARTIAL_UPDATE,
  data
})
export const api_v1_sponsor_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SPONSOR_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_sponsor_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_SPONSOR_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_sponsor_delete = () => ({
  type: types.API_V1_SPONSOR_DELETE
})
export const api_v1_sponsor_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_SPONSOR_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_sponsor_deleteFailed = (response, starter) => ({
  type: types.API_V1_SPONSOR_DELETE_FAILED,
  response,
  starter
})
export const api_v1_vendor_list = () => ({ type: types.API_V1_VENDOR_LIST })
export const api_v1_vendor_listSucceeded = (response, starter) => ({
  type: types.API_V1_VENDOR_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendor_listFailed = (response, starter) => ({
  type: types.API_V1_VENDOR_LIST_FAILED,
  response,
  starter
})
export const api_v1_vendor_create = data => ({
  type: types.API_V1_VENDOR_CREATE,
  data
})
export const api_v1_vendor_createSucceeded = (response, starter) => ({
  type: types.API_V1_VENDOR_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendor_createFailed = (response, starter) => ({
  type: types.API_V1_VENDOR_CREATE_FAILED,
  response,
  starter
})
export const api_v1_vendor_read = () => ({ type: types.API_V1_VENDOR_READ })
export const api_v1_vendor_readSucceeded = (response, starter) => ({
  type: types.API_V1_VENDOR_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendor_readFailed = (response, starter) => ({
  type: types.API_V1_VENDOR_READ_FAILED,
  response,
  starter
})
export const api_v1_vendor_update = data => ({
  type: types.API_V1_VENDOR_UPDATE,
  data
})
export const api_v1_vendor_updateSucceeded = (response, starter) => ({
  type: types.API_V1_VENDOR_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendor_updateFailed = (response, starter) => ({
  type: types.API_V1_VENDOR_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_vendor_partial_update = data => ({
  type: types.API_V1_VENDOR_PARTIAL_UPDATE,
  data
})
export const api_v1_vendor_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_VENDOR_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendor_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_VENDOR_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_vendor_delete = () => ({ type: types.API_V1_VENDOR_DELETE })
export const api_v1_vendor_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_VENDOR_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendor_deleteFailed = (response, starter) => ({
  type: types.API_V1_VENDOR_DELETE_FAILED,
  response,
  starter
})
export const api_v1_vendordetail_list = () => ({
  type: types.API_V1_VENDORDETAIL_LIST
})
export const api_v1_vendordetail_listSucceeded = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendordetail_listFailed = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_LIST_FAILED,
  response,
  starter
})
export const api_v1_vendordetail_create = data => ({
  type: types.API_V1_VENDORDETAIL_CREATE,
  data
})
export const api_v1_vendordetail_createSucceeded = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendordetail_createFailed = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_CREATE_FAILED,
  response,
  starter
})
export const api_v1_vendordetail_read = () => ({
  type: types.API_V1_VENDORDETAIL_READ
})
export const api_v1_vendordetail_readSucceeded = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendordetail_readFailed = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_READ_FAILED,
  response,
  starter
})
export const api_v1_vendordetail_update = data => ({
  type: types.API_V1_VENDORDETAIL_UPDATE,
  data
})
export const api_v1_vendordetail_updateSucceeded = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendordetail_updateFailed = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_vendordetail_partial_update = data => ({
  type: types.API_V1_VENDORDETAIL_PARTIAL_UPDATE,
  data
})
export const api_v1_vendordetail_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_VENDORDETAIL_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendordetail_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_VENDORDETAIL_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_vendordetail_delete = () => ({
  type: types.API_V1_VENDORDETAIL_DELETE
})
export const api_v1_vendordetail_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vendordetail_deleteFailed = (response, starter) => ({
  type: types.API_V1_VENDORDETAIL_DELETE_FAILED,
  response,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  response,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  response,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  response,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
