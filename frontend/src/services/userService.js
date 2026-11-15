import api from "./api";

export const updateProfile = async (name) =>
  (await api.patch("/users/profile", { name })).data;
export const updatePassword = async (data) =>
  (await api.patch("/users/password", data)).data;
