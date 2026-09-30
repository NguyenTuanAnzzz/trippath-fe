const API_URL = import.meta.env.VITE_API_URL;
export async function register(data) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }

    return result;
}

export async function verifyEmail(data) {
    const response = await fetch(`${API_URL}/auth/verify-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }

    return result;
}

export async function login(data){
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data)
    })
    const result = await response.json();
    if(!response.ok){
        throw new Error(result.message);
    }
    return result;
}

export async function refreshToken() {
    const response = await fetch(`${API_URL}/auth/refresh`, {
        method: "POST",
        credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }

    return result;
}