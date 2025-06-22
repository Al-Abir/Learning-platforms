import axiosInstance from "../api/axiosInstance";


export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}


export async function loginService(formData) {
  const { data } = await axiosInstance.post("/auth/login", formData);

  return data;
}

export async function checkAuthService() {
  const token = JSON.parse(sessionStorage.getItem("accessToken"));

  try {
    const response = await axios.get("/api/check-auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { success: false };
  }
}