import actionTypes from "../actions/actionTypes";
// import { logger } from "redux-logger";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  position: [],
  users: [],
  topDoctors: [],
  doctorsArr: [],
  detailDoctor: [],
  dataSchedule: [],
  dataScheduleDate: [],
  AllInfoState: [],
  AllInfoDoctor: [],
};
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;

      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      state.genders = [];
      state.isLoadingGender = false;

      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.position = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      state.position = [];

      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      state.roles = [];

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      state.users = action.users;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILED:
      state.users = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_SUCCESS:
      state.topDoctors = action.dataDoctor;
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_FAILED:
      state.topDoctors = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
      state.doctorsArr = action.dataDoctors;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTORS_FAILED:
      state.doctorsArr = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_DETAIL_DOCTORS_SUCCESS:
      state.detailDoctor = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_DETAIL_DOCTORS_FAILED:
      state.detailDoctor = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTORS_SCHEDULE_SUCCESS:
      state.dataSchedule = action.dataSchedule;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTORS_SCHEDULE_FAILED:
      state.dataSchedule = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DATE_SCHEDULE_SUCCESS:
      state.dataScheduleDate = action.dataScheduleDate;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DATE_SCHEDULE_FAILED:
      state.dataScheduleDate = [];
      return {
        ...state,
      };
    //! require all information doctor
    case actionTypes.FETCH_ALL_REQUIRED_INFO_DOCTOR_SUCCESS:
      state.AllInfoDoctor = action.AllInfoDoctor;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_REQUIRED_INFO_DOCTOR_FAILED:
      state.AllInfoDoctor = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_REQUIRED_INFO_SUCCESS:
      state.AllInfoState = action.AllInfo;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_REQUIRED_INFO_FAILED:
      state.AllInfoState = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
