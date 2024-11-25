import { baseURL } from "../api-config";

export interface GetLoginProps {
    login: string;
    password: string;
}

export async function getLogin({ login, password }: GetLoginProps) {

    const response = await fetch(`${baseURL}/sessions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login,
            password
        })
    });

    return response.json();
}