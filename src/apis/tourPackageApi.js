const API_URL = import.meta.env.VITE_API_URL;
export async function createTour(token, formData) {
    const response = await fetch(`${API_URL}/tours`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData

    })
    const result = await response.json();
    if (!response.ok) {
        const error = new Error(result.message);
        error.status = response.status;
        throw error;
    }
    return result;
}