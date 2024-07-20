import axiosInstance from "../axios-instance";

// register new user, sends their details to /register endpoint by Post req. to the backend
export const Signup = async (data) => {
  return await axiosInstance.post(`/register`, data);
};

// Authentication on existing user by sending their credentials to the /login endpoint
export const Login = async (data) => {
  return await axiosInstance.post(`/login`, data);
};

// Accesses a protected resource by sending get request to the protected endpoint
export const Protected = async () => {
  return await axiosInstance.get(`/protected`);
};
