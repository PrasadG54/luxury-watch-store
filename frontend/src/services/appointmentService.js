import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createAppointment = async (appointmentData, token) => {
  const response = await axios.post(
    `${API_URL}/appointments`,
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getMyAppointments = async (token) => {
  const response = await axios.get(
    `${API_URL}/appointments/my`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const sendAppointmentPdfEmail = async (
  appointmentId,
  token
) => {
  const response = await axios.post(
    `${API_URL}/appointments/${appointmentId}/send-pdf`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};