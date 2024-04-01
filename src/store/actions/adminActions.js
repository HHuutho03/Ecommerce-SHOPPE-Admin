import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

import {
  getAllCodeServices,
  createNewUserAdmin,
  getAllUsers,
  DeleteUserAdmin,
  EditUserAdmin,
  getTopDoctorService,
  getAllDoctorService,
  saveDoctorService,
  getDetailDoctorService,
  getScheduleDate,
  getAllSpecial,
  getAllClinic,
  getAllBrand,
  getAllTrademark,
} from "../../services/userService";

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeServices("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (error) {
      dispatch(fetchGenderFailed(error));
    }
  };
};

//* ACTION REDUX GENDER
export const fetchGenderSuccess = (dataGender) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: dataGender,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

//* ACTION REDUX POSITION
export const fetchPositionSuccess = (dataPosition) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: dataPosition,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

//* ACTION REDUX ROLE
export const fetchRoleSuccess = (dataRole) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: dataRole,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeServices("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (error) {
      dispatch(fetchPositionFailed(error));
    }
  };
};

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeServices("ROLE");

      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (error) {
      dispatch(fetchRoleFailed(error));
    }
  };
};
// FIRE ACTION SAVE USER
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserAdmin(data);
      if (res && res.errCode === 0) {
        toast.success("Create a new user successfully");
        dispatch(saveUserSuccess());
        dispatch(fellGetAllUser());
      } else {
        toast.error("Create a new user failed");
        dispatch(saveUserFailed());
      }
    } catch (error) {
      toast.error("Create a new user failed");
      dispatch(saveUserFailed(error));
      console.log("SaveUserFailed error", error);
    }
  };
};
export const saveUserSuccess = () => ({
  type: "CREATE_SAVE_SUCCESS",
});
export const saveUserFailed = () => ({
  type: "CREATE_SAVE_FAILED",
});

// FIRE ACTION GET USER
export const fellGetAllUser = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fellGetAllUserSuccess(res.users.reverse()));
      } else {
        dispatch(fellGetAllUserFailed());
      }
    } catch (error) {
      dispatch(fellGetAllUserFailed(error));
      console.log("SaveUserFailed error", error);
    }
  };
};
export const fellGetAllUserSuccess = (data) => ({
  type: "FETCH_ALL_USER_SUCCESS",
  users: data,
});
export const fellGetAllUserFailed = () => ({
  type: "FETCH_ALL_USER_FAILED",
});

// FIRE ACTION DELETE USER
export const fetchDeleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await DeleteUserAdmin(userId);
      if (res && res.errCode === 0) {
        toast.success("Delete user successfully");
        dispatch(deleteUserSuccess());
        dispatch(fellGetAllUser());
      } else {
        toast.error("Delete user Failed");
        dispatch(deleteUserFailed());
      }
    } catch (error) {
      toast.error("Delete user Failed");
      dispatch(deleteUserFailed(error));
      console.log("SaveUserFailed error", error);
    }
  };
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const fetchEditUser = (inputData) => {
  return async (dispatch, getState) => {
    try {
      let res = await EditUserAdmin(inputData);
      if (res && res.errCode === 0) {
        toast.success("edit user successfully");
        dispatch(editUserSuccess());
        dispatch(fellGetAllUser());
      } else {
        toast.error("edit user Failed");
        console.log(res);
        dispatch(editUserFailed());
      }
    } catch (error) {
      toast.error("edit user Failed");
      dispatch(editUserFailed(error));
      console.log("editUserFailed error", error);
    }
  };
};

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});
export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});

//get top doctor service
export const fetchTopDoctorStart = (limit) => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorService("8");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
          dataDoctor: res.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_TOP_DOCTOR_FAILED });
      }
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_TOP_DOCTOR_FAILED });
      console.log("editUserFailed error", error);
    }
  };
};

//get all doctor service
export const fetchAllDoctorStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctorService();
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_FAILED });
      }
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_FAILED });
      console.log("editUserFailed error", error);
    }
  };
};
//? save doctor
export const fetchSaveDoctorStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDoctorService(data);
      if (res && res.errCode === 0) {
        toast.success("save information doctor successfully");
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
        });
      } else {
        toast.error("save information doctor failed");
        dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_FAILED });
      }
    } catch (error) {
      toast.error("save information doctor failed");
      dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_FAILED });
      console.log("save doctor Failed error", error);
    }
  };
};
//? get detail doctor
export const fetchDetailDoctorStart = (inputId) => {
  return async (dispatch, getState) => {
    try {
      let res = await getDetailDoctorService(inputId);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_DETAIL_DOCTORS_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_DETAIL_DOCTORS_FAILED });
      }
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_DETAIL_DOCTORS_FAILED });
      console.log("save doctor Failed error", error);
    }
  };
};

//? get all schedule doctor service
export const fetchScheduleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeServices("TIME");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SCHEDULE_SUCCESS,
          dataSchedule: res.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_SCHEDULE_FAILED });
      }
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_SCHEDULE_FAILED });
    }
  };
};

export const fetchAllDateSchedule = (doctorId, date) => {
  return async (dispatch, getState) => {
    try {
      let res = await getScheduleDate(doctorId, date);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DATE_SCHEDULE_SUCCESS,
          dataScheduleDate: res.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_ALL_DATE_SCHEDULE_FAILED });
      }
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ALL_DATE_SCHEDULE_FAILED });
      console.log("editUserFailed error", error);
    }
  };
};
//? require all information doctor (address ,name,price,description )

export const fetchAllInfoDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let resPrice = await getAllCodeServices("PRICE");
      let resPayment = await getAllCodeServices("PAYMENT");
      let resProvince = await getAllCodeServices("PROVINCE");
      let resSpecialty = await getAllSpecial();
      let resClinic = await getAllClinic();
      if (
        resPrice &&
        resPrice.errCode === 0 &&
        resPayment &&
        resPayment.errCode === 0 &&
        resProvince &&
        resProvince.errCode === 0 &&
        resSpecialty.errCode === 0 &&
        resClinic &&
        resClinic.errCode === 0
      ) {
        let data = {
          resPrice: resPrice.data,
          resProvince: resProvince.data,
          resPayment: resPayment.data,
          resSpecialty: resSpecialty.data,
          resClinic: resClinic.data,
        };
        dispatch({
          type: actionTypes.FETCH_ALL_REQUIRED_INFO_DOCTOR_SUCCESS,
          AllInfoDoctor: data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_ALL_REQUIRED_INFO_DOCTOR_FAILED });
      }
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ALL_REQUIRED_INFO_DOCTOR_FAILED });
      console.log("get all info doctor error", error);
    }
  };
};
export const fetchAllInfo = () => {
  return async (dispatch, getState) => {
    try {
      let resBrand = await getAllBrand("NONE");

      let resTrademark = await getAllTrademark("NONE");
      if (resBrand && resBrand.errCode === 0 && resTrademark && resTrademark.errCode === 0) {
        let data = {
          resBrand: resBrand.data,
          resTrademark: resTrademark.data,
        };
        dispatch({
          type: actionTypes.FETCH_ALL_REQUIRED_INFO_SUCCESS,
          AllInfo: data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_ALL_REQUIRED_INFO_FAILED });
      }
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ALL_REQUIRED_INFO_FAILED });
      console.log("get all info doctor error", error);
    }
  };
};
