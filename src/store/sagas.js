import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* useraccountconnector_post_registration_createWorker(action) {
  try {
    const result = yield call(
      apiService.useraccountconnector_post_registration_create,
      action
    )
    yield put(
      actions.useraccountconnector_post_registration_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.useraccountconnector_post_registration_createFailed(err, action)
    )
  }
}
function* useraccountconnector_post_registration_createWatcher() {
  yield takeEvery(
    types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE,
    useraccountconnector_post_registration_createWorker
  )
}
function* api_v1_category_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_list, action)
    yield put(actions.api_v1_category_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_listFailed(err, action))
  }
}
function* api_v1_category_listWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_LIST, api_v1_category_listWorker)
}
function* api_v1_category_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_create, action)
    yield put(actions.api_v1_category_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_createFailed(err, action))
  }
}
function* api_v1_category_createWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_CREATE, api_v1_category_createWorker)
}
function* api_v1_category_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_read, action)
    yield put(actions.api_v1_category_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_readFailed(err, action))
  }
}
function* api_v1_category_readWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_READ, api_v1_category_readWorker)
}
function* api_v1_category_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_update, action)
    yield put(actions.api_v1_category_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_updateFailed(err, action))
  }
}
function* api_v1_category_updateWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_UPDATE, api_v1_category_updateWorker)
}
function* api_v1_category_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_partial_update, action)
    yield put(actions.api_v1_category_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_partial_updateFailed(err, action))
  }
}
function* api_v1_category_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CATEGORY_PARTIAL_UPDATE,
    api_v1_category_partial_updateWorker
  )
}
function* api_v1_category_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_delete, action)
    yield put(actions.api_v1_category_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_deleteFailed(err, action))
  }
}
function* api_v1_category_deleteWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_DELETE, api_v1_category_deleteWorker)
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_faq_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_faq_list, action)
    yield put(actions.api_v1_faq_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_faq_listFailed(err, action))
  }
}
function* api_v1_faq_listWatcher() {
  yield takeEvery(types.API_V1_FAQ_LIST, api_v1_faq_listWorker)
}
function* api_v1_faq_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_faq_create, action)
    yield put(actions.api_v1_faq_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_faq_createFailed(err, action))
  }
}
function* api_v1_faq_createWatcher() {
  yield takeEvery(types.API_V1_FAQ_CREATE, api_v1_faq_createWorker)
}
function* api_v1_faq_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_faq_read, action)
    yield put(actions.api_v1_faq_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_faq_readFailed(err, action))
  }
}
function* api_v1_faq_readWatcher() {
  yield takeEvery(types.API_V1_FAQ_READ, api_v1_faq_readWorker)
}
function* api_v1_faq_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_faq_update, action)
    yield put(actions.api_v1_faq_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_faq_updateFailed(err, action))
  }
}
function* api_v1_faq_updateWatcher() {
  yield takeEvery(types.API_V1_FAQ_UPDATE, api_v1_faq_updateWorker)
}
function* api_v1_faq_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_faq_partial_update, action)
    yield put(actions.api_v1_faq_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_faq_partial_updateFailed(err, action))
  }
}
function* api_v1_faq_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_FAQ_PARTIAL_UPDATE,
    api_v1_faq_partial_updateWorker
  )
}
function* api_v1_faq_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_faq_delete, action)
    yield put(actions.api_v1_faq_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_faq_deleteFailed(err, action))
  }
}
function* api_v1_faq_deleteWatcher() {
  yield takeEvery(types.API_V1_FAQ_DELETE, api_v1_faq_deleteWorker)
}
function* api_v1_favorites_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_favorites_list, action)
    yield put(actions.api_v1_favorites_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_favorites_listFailed(err, action))
  }
}
function* api_v1_favorites_listWatcher() {
  yield takeEvery(types.API_V1_FAVORITES_LIST, api_v1_favorites_listWorker)
}
function* api_v1_favorites_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_favorites_create, action)
    yield put(actions.api_v1_favorites_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_favorites_createFailed(err, action))
  }
}
function* api_v1_favorites_createWatcher() {
  yield takeEvery(types.API_V1_FAVORITES_CREATE, api_v1_favorites_createWorker)
}
function* api_v1_favorites_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_favorites_read, action)
    yield put(actions.api_v1_favorites_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_favorites_readFailed(err, action))
  }
}
function* api_v1_favorites_readWatcher() {
  yield takeEvery(types.API_V1_FAVORITES_READ, api_v1_favorites_readWorker)
}
function* api_v1_favorites_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_favorites_update, action)
    yield put(actions.api_v1_favorites_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_favorites_updateFailed(err, action))
  }
}
function* api_v1_favorites_updateWatcher() {
  yield takeEvery(types.API_V1_FAVORITES_UPDATE, api_v1_favorites_updateWorker)
}
function* api_v1_favorites_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_favorites_partial_update,
      action
    )
    yield put(actions.api_v1_favorites_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_favorites_partial_updateFailed(err, action))
  }
}
function* api_v1_favorites_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_FAVORITES_PARTIAL_UPDATE,
    api_v1_favorites_partial_updateWorker
  )
}
function* api_v1_favorites_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_favorites_delete, action)
    yield put(actions.api_v1_favorites_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_favorites_deleteFailed(err, action))
  }
}
function* api_v1_favorites_deleteWatcher() {
  yield takeEvery(types.API_V1_FAVORITES_DELETE, api_v1_favorites_deleteWorker)
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_location_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_location_list, action)
    yield put(actions.api_v1_location_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_location_listFailed(err, action))
  }
}
function* api_v1_location_listWatcher() {
  yield takeEvery(types.API_V1_LOCATION_LIST, api_v1_location_listWorker)
}
function* api_v1_location_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_location_create, action)
    yield put(actions.api_v1_location_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_location_createFailed(err, action))
  }
}
function* api_v1_location_createWatcher() {
  yield takeEvery(types.API_V1_LOCATION_CREATE, api_v1_location_createWorker)
}
function* api_v1_location_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_location_read, action)
    yield put(actions.api_v1_location_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_location_readFailed(err, action))
  }
}
function* api_v1_location_readWatcher() {
  yield takeEvery(types.API_V1_LOCATION_READ, api_v1_location_readWorker)
}
function* api_v1_location_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_location_update, action)
    yield put(actions.api_v1_location_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_location_updateFailed(err, action))
  }
}
function* api_v1_location_updateWatcher() {
  yield takeEvery(types.API_V1_LOCATION_UPDATE, api_v1_location_updateWorker)
}
function* api_v1_location_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_location_partial_update, action)
    yield put(actions.api_v1_location_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_location_partial_updateFailed(err, action))
  }
}
function* api_v1_location_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_LOCATION_PARTIAL_UPDATE,
    api_v1_location_partial_updateWorker
  )
}
function* api_v1_location_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_location_delete, action)
    yield put(actions.api_v1_location_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_location_deleteFailed(err, action))
  }
}
function* api_v1_location_deleteWatcher() {
  yield takeEvery(types.API_V1_LOCATION_DELETE, api_v1_location_deleteWorker)
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_myschedule_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_myschedule_list, action)
    yield put(actions.api_v1_myschedule_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_myschedule_listFailed(err, action))
  }
}
function* api_v1_myschedule_listWatcher() {
  yield takeEvery(types.API_V1_MYSCHEDULE_LIST, api_v1_myschedule_listWorker)
}
function* api_v1_myschedule_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_myschedule_create, action)
    yield put(actions.api_v1_myschedule_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_myschedule_createFailed(err, action))
  }
}
function* api_v1_myschedule_createWatcher() {
  yield takeEvery(
    types.API_V1_MYSCHEDULE_CREATE,
    api_v1_myschedule_createWorker
  )
}
function* api_v1_myschedule_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_myschedule_read, action)
    yield put(actions.api_v1_myschedule_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_myschedule_readFailed(err, action))
  }
}
function* api_v1_myschedule_readWatcher() {
  yield takeEvery(types.API_V1_MYSCHEDULE_READ, api_v1_myschedule_readWorker)
}
function* api_v1_myschedule_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_myschedule_update, action)
    yield put(actions.api_v1_myschedule_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_myschedule_updateFailed(err, action))
  }
}
function* api_v1_myschedule_updateWatcher() {
  yield takeEvery(
    types.API_V1_MYSCHEDULE_UPDATE,
    api_v1_myschedule_updateWorker
  )
}
function* api_v1_myschedule_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_myschedule_partial_update,
      action
    )
    yield put(actions.api_v1_myschedule_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_myschedule_partial_updateFailed(err, action))
  }
}
function* api_v1_myschedule_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MYSCHEDULE_PARTIAL_UPDATE,
    api_v1_myschedule_partial_updateWorker
  )
}
function* api_v1_myschedule_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_myschedule_delete, action)
    yield put(actions.api_v1_myschedule_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_myschedule_deleteFailed(err, action))
  }
}
function* api_v1_myschedule_deleteWatcher() {
  yield takeEvery(
    types.API_V1_MYSCHEDULE_DELETE,
    api_v1_myschedule_deleteWorker
  )
}
function* api_v1_presenter_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_presenter_list, action)
    yield put(actions.api_v1_presenter_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_presenter_listFailed(err, action))
  }
}
function* api_v1_presenter_listWatcher() {
  yield takeEvery(types.API_V1_PRESENTER_LIST, api_v1_presenter_listWorker)
}
function* api_v1_presenter_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_presenter_create, action)
    yield put(actions.api_v1_presenter_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_presenter_createFailed(err, action))
  }
}
function* api_v1_presenter_createWatcher() {
  yield takeEvery(types.API_V1_PRESENTER_CREATE, api_v1_presenter_createWorker)
}
function* api_v1_presenter_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_presenter_read, action)
    yield put(actions.api_v1_presenter_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_presenter_readFailed(err, action))
  }
}
function* api_v1_presenter_readWatcher() {
  yield takeEvery(types.API_V1_PRESENTER_READ, api_v1_presenter_readWorker)
}
function* api_v1_presenter_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_presenter_update, action)
    yield put(actions.api_v1_presenter_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_presenter_updateFailed(err, action))
  }
}
function* api_v1_presenter_updateWatcher() {
  yield takeEvery(types.API_V1_PRESENTER_UPDATE, api_v1_presenter_updateWorker)
}
function* api_v1_presenter_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_presenter_partial_update,
      action
    )
    yield put(actions.api_v1_presenter_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_presenter_partial_updateFailed(err, action))
  }
}
function* api_v1_presenter_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PRESENTER_PARTIAL_UPDATE,
    api_v1_presenter_partial_updateWorker
  )
}
function* api_v1_presenter_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_presenter_delete, action)
    yield put(actions.api_v1_presenter_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_presenter_deleteFailed(err, action))
  }
}
function* api_v1_presenter_deleteWatcher() {
  yield takeEvery(types.API_V1_PRESENTER_DELETE, api_v1_presenter_deleteWorker)
}
function* api_v1_schedule_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_schedule_list, action)
    yield put(actions.api_v1_schedule_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_schedule_listFailed(err, action))
  }
}
function* api_v1_schedule_listWatcher() {
  yield takeEvery(types.API_V1_SCHEDULE_LIST, api_v1_schedule_listWorker)
}
function* api_v1_schedule_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_schedule_create, action)
    yield put(actions.api_v1_schedule_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_schedule_createFailed(err, action))
  }
}
function* api_v1_schedule_createWatcher() {
  yield takeEvery(types.API_V1_SCHEDULE_CREATE, api_v1_schedule_createWorker)
}
function* api_v1_schedule_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_schedule_read, action)
    yield put(actions.api_v1_schedule_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_schedule_readFailed(err, action))
  }
}
function* api_v1_schedule_readWatcher() {
  yield takeEvery(types.API_V1_SCHEDULE_READ, api_v1_schedule_readWorker)
}
function* api_v1_schedule_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_schedule_update, action)
    yield put(actions.api_v1_schedule_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_schedule_updateFailed(err, action))
  }
}
function* api_v1_schedule_updateWatcher() {
  yield takeEvery(types.API_V1_SCHEDULE_UPDATE, api_v1_schedule_updateWorker)
}
function* api_v1_schedule_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_schedule_partial_update, action)
    yield put(actions.api_v1_schedule_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_schedule_partial_updateFailed(err, action))
  }
}
function* api_v1_schedule_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_SCHEDULE_PARTIAL_UPDATE,
    api_v1_schedule_partial_updateWorker
  )
}
function* api_v1_schedule_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_schedule_delete, action)
    yield put(actions.api_v1_schedule_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_schedule_deleteFailed(err, action))
  }
}
function* api_v1_schedule_deleteWatcher() {
  yield takeEvery(types.API_V1_SCHEDULE_DELETE, api_v1_schedule_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_sponsor_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_sponsor_list, action)
    yield put(actions.api_v1_sponsor_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_sponsor_listFailed(err, action))
  }
}
function* api_v1_sponsor_listWatcher() {
  yield takeEvery(types.API_V1_SPONSOR_LIST, api_v1_sponsor_listWorker)
}
function* api_v1_sponsor_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_sponsor_create, action)
    yield put(actions.api_v1_sponsor_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_sponsor_createFailed(err, action))
  }
}
function* api_v1_sponsor_createWatcher() {
  yield takeEvery(types.API_V1_SPONSOR_CREATE, api_v1_sponsor_createWorker)
}
function* api_v1_sponsor_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_sponsor_read, action)
    yield put(actions.api_v1_sponsor_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_sponsor_readFailed(err, action))
  }
}
function* api_v1_sponsor_readWatcher() {
  yield takeEvery(types.API_V1_SPONSOR_READ, api_v1_sponsor_readWorker)
}
function* api_v1_sponsor_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_sponsor_update, action)
    yield put(actions.api_v1_sponsor_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_sponsor_updateFailed(err, action))
  }
}
function* api_v1_sponsor_updateWatcher() {
  yield takeEvery(types.API_V1_SPONSOR_UPDATE, api_v1_sponsor_updateWorker)
}
function* api_v1_sponsor_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_sponsor_partial_update, action)
    yield put(actions.api_v1_sponsor_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_sponsor_partial_updateFailed(err, action))
  }
}
function* api_v1_sponsor_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_SPONSOR_PARTIAL_UPDATE,
    api_v1_sponsor_partial_updateWorker
  )
}
function* api_v1_sponsor_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_sponsor_delete, action)
    yield put(actions.api_v1_sponsor_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_sponsor_deleteFailed(err, action))
  }
}
function* api_v1_sponsor_deleteWatcher() {
  yield takeEvery(types.API_V1_SPONSOR_DELETE, api_v1_sponsor_deleteWorker)
}
function* api_v1_vendor_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendor_list, action)
    yield put(actions.api_v1_vendor_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendor_listFailed(err, action))
  }
}
function* api_v1_vendor_listWatcher() {
  yield takeEvery(types.API_V1_VENDOR_LIST, api_v1_vendor_listWorker)
}
function* api_v1_vendor_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendor_create, action)
    yield put(actions.api_v1_vendor_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendor_createFailed(err, action))
  }
}
function* api_v1_vendor_createWatcher() {
  yield takeEvery(types.API_V1_VENDOR_CREATE, api_v1_vendor_createWorker)
}
function* api_v1_vendor_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendor_read, action)
    yield put(actions.api_v1_vendor_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendor_readFailed(err, action))
  }
}
function* api_v1_vendor_readWatcher() {
  yield takeEvery(types.API_V1_VENDOR_READ, api_v1_vendor_readWorker)
}
function* api_v1_vendor_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendor_update, action)
    yield put(actions.api_v1_vendor_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendor_updateFailed(err, action))
  }
}
function* api_v1_vendor_updateWatcher() {
  yield takeEvery(types.API_V1_VENDOR_UPDATE, api_v1_vendor_updateWorker)
}
function* api_v1_vendor_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendor_partial_update, action)
    yield put(actions.api_v1_vendor_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendor_partial_updateFailed(err, action))
  }
}
function* api_v1_vendor_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_VENDOR_PARTIAL_UPDATE,
    api_v1_vendor_partial_updateWorker
  )
}
function* api_v1_vendor_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendor_delete, action)
    yield put(actions.api_v1_vendor_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendor_deleteFailed(err, action))
  }
}
function* api_v1_vendor_deleteWatcher() {
  yield takeEvery(types.API_V1_VENDOR_DELETE, api_v1_vendor_deleteWorker)
}
function* api_v1_vendordetail_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendordetail_list, action)
    yield put(actions.api_v1_vendordetail_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendordetail_listFailed(err, action))
  }
}
function* api_v1_vendordetail_listWatcher() {
  yield takeEvery(
    types.API_V1_VENDORDETAIL_LIST,
    api_v1_vendordetail_listWorker
  )
}
function* api_v1_vendordetail_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendordetail_create, action)
    yield put(actions.api_v1_vendordetail_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendordetail_createFailed(err, action))
  }
}
function* api_v1_vendordetail_createWatcher() {
  yield takeEvery(
    types.API_V1_VENDORDETAIL_CREATE,
    api_v1_vendordetail_createWorker
  )
}
function* api_v1_vendordetail_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendordetail_read, action)
    yield put(actions.api_v1_vendordetail_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendordetail_readFailed(err, action))
  }
}
function* api_v1_vendordetail_readWatcher() {
  yield takeEvery(
    types.API_V1_VENDORDETAIL_READ,
    api_v1_vendordetail_readWorker
  )
}
function* api_v1_vendordetail_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendordetail_update, action)
    yield put(actions.api_v1_vendordetail_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendordetail_updateFailed(err, action))
  }
}
function* api_v1_vendordetail_updateWatcher() {
  yield takeEvery(
    types.API_V1_VENDORDETAIL_UPDATE,
    api_v1_vendordetail_updateWorker
  )
}
function* api_v1_vendordetail_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_vendordetail_partial_update,
      action
    )
    yield put(
      actions.api_v1_vendordetail_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_vendordetail_partial_updateFailed(err, action))
  }
}
function* api_v1_vendordetail_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_VENDORDETAIL_PARTIAL_UPDATE,
    api_v1_vendordetail_partial_updateWorker
  )
}
function* api_v1_vendordetail_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vendordetail_delete, action)
    yield put(actions.api_v1_vendordetail_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_vendordetail_deleteFailed(err, action))
  }
}
function* api_v1_vendordetail_deleteWatcher() {
  yield takeEvery(
    types.API_V1_VENDORDETAIL_DELETE,
    api_v1_vendordetail_deleteWorker
  )
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    useraccountconnector_post_registration_createWatcher,
    api_v1_category_listWatcher,
    api_v1_category_createWatcher,
    api_v1_category_readWatcher,
    api_v1_category_updateWatcher,
    api_v1_category_partial_updateWatcher,
    api_v1_category_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_faq_listWatcher,
    api_v1_faq_createWatcher,
    api_v1_faq_readWatcher,
    api_v1_faq_updateWatcher,
    api_v1_faq_partial_updateWatcher,
    api_v1_faq_deleteWatcher,
    api_v1_favorites_listWatcher,
    api_v1_favorites_createWatcher,
    api_v1_favorites_readWatcher,
    api_v1_favorites_updateWatcher,
    api_v1_favorites_partial_updateWatcher,
    api_v1_favorites_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_location_listWatcher,
    api_v1_location_createWatcher,
    api_v1_location_readWatcher,
    api_v1_location_updateWatcher,
    api_v1_location_partial_updateWatcher,
    api_v1_location_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_myschedule_listWatcher,
    api_v1_myschedule_createWatcher,
    api_v1_myschedule_readWatcher,
    api_v1_myschedule_updateWatcher,
    api_v1_myschedule_partial_updateWatcher,
    api_v1_myschedule_deleteWatcher,
    api_v1_presenter_listWatcher,
    api_v1_presenter_createWatcher,
    api_v1_presenter_readWatcher,
    api_v1_presenter_updateWatcher,
    api_v1_presenter_partial_updateWatcher,
    api_v1_presenter_deleteWatcher,
    api_v1_schedule_listWatcher,
    api_v1_schedule_createWatcher,
    api_v1_schedule_readWatcher,
    api_v1_schedule_updateWatcher,
    api_v1_schedule_partial_updateWatcher,
    api_v1_schedule_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_sponsor_listWatcher,
    api_v1_sponsor_createWatcher,
    api_v1_sponsor_readWatcher,
    api_v1_sponsor_updateWatcher,
    api_v1_sponsor_partial_updateWatcher,
    api_v1_sponsor_deleteWatcher,
    api_v1_vendor_listWatcher,
    api_v1_vendor_createWatcher,
    api_v1_vendor_readWatcher,
    api_v1_vendor_updateWatcher,
    api_v1_vendor_partial_updateWatcher,
    api_v1_vendor_deleteWatcher,
    api_v1_vendordetail_listWatcher,
    api_v1_vendordetail_createWatcher,
    api_v1_vendordetail_readWatcher,
    api_v1_vendordetail_updateWatcher,
    api_v1_vendordetail_partial_updateWatcher,
    api_v1_vendordetail_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
