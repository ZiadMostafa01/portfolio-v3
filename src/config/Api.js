const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const CONFIG = {
    PROJECTS_API: `${API_BASE_URL}/projects`,
    CERTIFICATES_API: `${API_BASE_URL}/certificates`,
    // لو احتجت مستقبلاً تضيف أي روابط تانية بتضيفها هنا
};