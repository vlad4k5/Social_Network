import axios from "axios";



export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': "43974699-a689-48d1-b548-063b532b4c9f"
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