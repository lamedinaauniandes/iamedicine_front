import {api} from "./client";

export function isAuthed() {
    return localStorage.getItem("token") !== null;
}

export async function login(email, password) {
    const form = new URLSearchParams();
    form.append("username", email);
    form.append("password", password);

    try {
        const response = await api.post("/login/", form, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        return response.data;
    } catch (error) {
        console.log("api error");
        console.log(error);
        throw error;
    }
}