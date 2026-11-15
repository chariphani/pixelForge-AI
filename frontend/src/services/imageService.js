import api from "./api";

export const generateImage = async (prompt) =>
  (await api.post("/images/generate", { prompt }, { timeout: 150000 })).data;
export const fetchImages = async (page = 1) =>
  (await api.get(`/images?page=${page}&limit=12`)).data;
export const fetchImage = async (id) => (await api.get(`/images/${id}`)).data;
export const removeImage = async (id) =>
  (await api.delete(`/images/${id}`)).data;
