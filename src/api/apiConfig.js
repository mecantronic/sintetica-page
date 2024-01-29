import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response) {
      // La solicitud fue hecha y el servidor respondió con un estado de error
      console.error("Server error:", response.data);
      return Promise.reject(response.data);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta del servidor
      console.error("No response was received from the server");
      return Promise.reject("No response was received from the server");
    } else {
      // Algo sucedió en la configuración de la solicitud que desencadenó el error
      console.error(
        "Failed request:",
        error.message
      );
      return Promise.reject("Failed request");
    }
  }
);

export default api;
