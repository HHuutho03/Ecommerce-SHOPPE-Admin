import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
//add user in admin
const createNewUserAdmin = (data) => {
  return axios.post("/api/create-new-user", data);
};

const DeleteUserAdmin = (userId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};
const EditUserAdmin = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};
const getAllCodeServices = (inputData) => {
  return axios.get(`/api/allcode?type=${inputData}`);
};

const getTopDoctorService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

const getAllDoctorService = (limit) => {
  return axios.get(`/api/get-all-doctor`);
};
const saveDoctorService = (inputData) => {
  return axios.post("/api/save-info-doctor", inputData);
};

const getDetailDoctorService = (inputId) => {
  return axios.get(`/api/get-detail-doctor?id=${inputId}`);
};

const bulkCreateSchedule = (inputData) => {
  return axios.post("/api/bulk-create-schedule", inputData);
};

const getScheduleDate = (doctorId, date) => {
  return axios.get(`/api/get-schedule-date?doctorId=${doctorId}&date=${date}`);
};

const getExtraDoctorInfo = (doctorId) => {
  return axios.get(`/api/get-extra-infoDoctor-id?doctorId=${doctorId}`);
};

const getDoctorProfileInfo = (doctorId) => {
  return axios.get(`/api/get-detail-doctor-profile?doctorId=${doctorId}`);
};

const postPatientAppointment = (data) => {
  return axios.post("/api/patient-book-appointment", data);
};
const postVerifyPatientAppointment = (data) => {
  return axios.post("/api/verify-appointment", data);
};
const postAddNewSpecial = (data) => {
  return axios.post("/api/add-new-special", data);
};
const getAllSpecial = () => {
  return axios.get(`/api/get-all-special`);
};
const getDetailSpecialById = (data) => {
  return axios.get(`/api/get-detail-special-id?id=${data.id}&location=${data.location}`);
};
const getAllClinic = () => {
  return axios.get(`/api/get-clinic`);
};
const getDetailClinicById = (data) => {
  console.log("check data", data.id);
  return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`);
};
const createNewClinic = (data) => {
  return axios.post("/api/create-new-clinic", data);
};

const getAllPatientForDoctor = (data) => {
  return axios.get(`/api/get-list-patient-for-doctor?doctorId=${data.doctorId} &date=${data.date}`);
};
const postSendRemedy = (data) => {
  return axios.post("/api/send-remedy", data);
};
//////!
const getAllUser = (inputData) => {
  return axios.get(`/api/allcode?type=${inputData}`);
};

//? soft delete category
const restoreCategory = (inputId) => {
  return axios.patch(`/api/restore-category?id=${inputId}`);
};
const deleteCategorySoft = (inputId) => {
  return axios.delete(`/api/delete-category-soft?id=${inputId}`);
};
const getAllCategoryDelete = () => {
  return axios.get(`/api/get-all-category-delete`);
};
//? save brand
const restoreBrand = (inputId) => {
  return axios.patch(`/api/restore-brand?id=${inputId}`);
};
const deleteBrandSoft = (inputId) => {
  return axios.delete(`/api/delete-brand-soft?id=${inputId}`);
};
const getAllBrandDelete = () => {
  return axios.get(`/api/get-all-brand-delete`);
};
const saveBrand = (data) => {
  return axios.post(`/api/save-brand`, data);
};
const saveTrademark = (data) => {
  return axios.post(`/api/save-trademark`, data);
};

const deleteBrand = (inputId) => {
  return axios.delete(`/api/delete-brand?id=${inputId}`);
};
const deleteTrademark = (inputId) => {
  return axios.delete(`/api/delete-Trademark?id=${inputId}`);
};
const getAllTrademark = (inputData) => {
  return axios.get(`/api/get-all-Trademark?type=${inputData}`);
};
const getAllBrand = (inputData) => {
  return axios.get(`/api/get-all-brand?type=${inputData}`);
};
//? product
const restoreProduct = (inputId) => {
  return axios.patch(`/api/restore-product?id=${inputId}`);
};
const deleteProductSoft = (inputId) => {
  return axios.delete(`/api/delete-product-soft?id=${inputId}`);
};
const getAllProductDelete = () => {
  return axios.get(`/api/get-all-product-delete`);
};
const getAllProduct = () => {
  return axios.get(`/api/get-all-product`);
};
const getAllProductTop = () => {
  return axios.get(`/products`);
};
const getAllProductTopRelation = (data) => {
  console.log("data", data);
  return axios.get(`/api/get-all-product-relation?productId=${data.productDetailId}&&categoryId=${data.category_id}`);
};
const saveProduct = (data) => {
  return axios.post(`/api/save-product`, data);
};

const deleteProduct = (inputId) => {
  return axios.delete(`/api/delete-product?id=${inputId}`);
};
const saveCustomer = (data) => {
  return axios.post(`/api/save-customer`, data);
};

//? Banner
const restoreBanner = (inputId) => {
  return axios.patch(`/api/restore-banner?id=${inputId}`);
};
const deleteBannerSoft = (inputId) => {
  return axios.delete(`/api/delete-banner-soft?id=${inputId}`);
};
const getAllBannerDelete = () => {
  return axios.get(`/api/get-all-banner-delete`);
};
const getAllBanner = () => {
  return axios.get(`/api/get-all-banner`);
};

const saveBanner = (data) => {
  return axios.post(`/api/save-banner`, data);
};

const deleteBanner = (inputId) => {
  return axios.delete(`/api/delete-banner?id=${inputId}`);
};

//? post

const deleteTopic = (inputId) => {
  return axios.delete(`/api/delete-topic?id=${inputId}`);
};
const deletePost = (inputId) => {
  return axios.delete(`/api/delete-post?id=${inputId}`);
};
const getAllTopic = () => {
  return axios.get(`/api/get-all-topic`);
};
const getAllPost = () => {
  return axios.get(`/api/get-all-post`);
};

const savePost = (data) => {
  return axios.post(`/api/save-post`, data);
};
const saveTopic = (data) => {
  return axios.post(`/api/save-topic`, data);
};

const saveContract = (data) => {
  return axios.post(`/api/save-contract`, data);
};
const getAllContact = () => {
  return axios.get(`/api/get-all-contact`);
};
const saveRemedy = (data) => {
  return axios.post(`/api/send-remedy`, data);
};
const getCustomer = (inputId) => {
  return axios.get(`/api/get-customer?id=${inputId}`);
};
export {
  getCustomer,
  postSendRemedy,
  getDetailClinicById,
  getAllClinic,
  createNewClinic,
  handleLoginApi,
  getAllUsers,
  createNewUserAdmin,
  DeleteUserAdmin,
  EditUserAdmin,
  getAllCodeServices,
  getTopDoctorService,
  getAllDoctorService,
  saveDoctorService,
  getDetailDoctorService,
  bulkCreateSchedule,
  getScheduleDate,
  getExtraDoctorInfo,
  getDoctorProfileInfo,
  postPatientAppointment,
  postVerifyPatientAppointment,
  postAddNewSpecial,
  getAllSpecial,
  getDetailSpecialById,
  getAllPatientForDoctor,
  saveRemedy,
  getAllContact,
  saveContract,
  saveBrand,
  getAllProductTopRelation,
  deleteProductSoft,
  restoreProduct,
  getAllProductDelete,
  deleteProduct,
  saveProduct,
  deletePost,
  getAllPost,
  savePost,
  deleteTopic,
  getAllTopic,
  saveTopic,
  deleteTrademark,
  getAllTrademark,
  getAllProduct,
  saveTrademark,
  getAllBrand,
  deleteBrand,
  saveCustomer,
  restoreBrand,
  deleteBrandSoft,
  getAllBrandDelete,
  getAllUser,
  restoreCategory,
  deleteCategorySoft,
  getAllCategoryDelete,
  restoreBanner,
  deleteBannerSoft,
  getAllBannerDelete,
  getAllBanner,
  saveBanner,
  deleteBanner,
  getAllProductTop,
};
