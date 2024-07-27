import {RegisterFormData} from './pages/Register'


// fetch requests
// formData captures the register form data when submitted


// API_BASE_URL should be replaced with your actual API URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || " ";


// API calls
export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        credentials: 'include', // Include cookies in requests
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
    } else {
        const errorBody = await response.text();
        throw new Error(errorBody);
    }
}

export const signin = async (formData: { email: string, password: string }) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        credentials: 'include', // Include cookies in requests
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
    } else {
        const errorBody = await response.text();
        throw new Error(errorBody);
    }
}

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        method: 'GET',
        credentials: 'include', // Include cookies in requests
    });

    if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
    } else {
        throw new Error('Invalid token');
    }
}

export const logout = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include', // Include cookies in requests
    });

    if (!response.ok) {
        throw new Error('Failed to log out');
    }
}