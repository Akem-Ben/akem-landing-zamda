/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

/* ================= CONFIG ================= */

const BASE_URL = import.meta.env.VITE_API_URL as string;

/* ================= TOKEN HELPERS ================= */

const TOKEN_KEY = "access_token";

export const getAccessToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearTokens = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("userProfile");
};

/* ================= AXIOS INSTANCE ================= */

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= REQUEST INTERCEPTOR ================= */

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    // Attach token ONLY if it exists
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

/* ================= RESPONSE INTERCEPTOR ================= */

apiClient.interceptors.response.use(
  (response: any) => {
    const newToken = response.headers["x-access-token"];

    if (newToken) {
      setAccessToken(newToken);
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        clearTokens();
        // window.location.href = "/login";
      }

      if (status === 403) {
        console.warn("Forbidden request");
      }

      if (status >= 500) {
        console.error("Server error");
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
