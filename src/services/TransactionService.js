import http from "../http-common";

// get Periods distinct
const getPeriods = () => {
  return http.get("/periods");
};

// get Periods distinct
const getCategorySumary = (period) => {
  return http.get(`/category/${period}`);
};

// listPeriod
const getAllTransactions = (period) => {
  return http.get(`/transaction/period/${period}`);
};

// findOne
const get = (id) => {
  return http.get(`/transaction/${id}`);
};

// insert
const create = (data) => {
  return http.post("/transaction/", data);
};

// deleteOne
const remove = (id) => {
  return http.delete(`/transaction/${id}`);
};

export default {
  getPeriods,
  getCategorySumary,
  getAllTransactions,
  get,
  create,
  remove,
};
