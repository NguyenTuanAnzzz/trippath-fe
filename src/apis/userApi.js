const API_URL = import.meta.env.VITE_API_URL;
export async function getMe(token) {
    const response = await fetch(`${API_URL}/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message);
    }
    return result;
}

export async function updateMe(token, formData) {
    const response = await fetch(`${API_URL}/me`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData
        
    })
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message);
    }
    return result;
}