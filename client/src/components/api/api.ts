import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND as string,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});
