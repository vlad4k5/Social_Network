import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': "59cbca27-652d-4a07-9bc2-6419916cee9e"
    }
})

export type BasicResponseType = {
    resultCode: number
    messages: Array<string>
}

export type ResponseWithDataType<D> = {
    data: D
    resultCode: number
    messages: Array<string>
}