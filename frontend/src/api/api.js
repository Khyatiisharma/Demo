const API_URL = import.meta.env.VITE_API_URL ?? "";
const API_PATH = API_URL ? `${API_URL.replace(/\/$/, "")}/api` : "/api";

export const getHealth = async () => {
  const response = await fetch(API_PATH);

  return response.json();
};
