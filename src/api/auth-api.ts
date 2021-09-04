import { LoginDataType } from "../store/types/types";
import { BasicResponseType, instance, ResponseWithDataType } from "./instance-api";

type TUserAuthorizedData = {
    id: number
    email: string
    login: string
}
type TLoginData = {
    userId: number
}
type TgetCaptcha = {
    url: string
}

export const authAPI = {
    async isUserAuthorized (){
        const res = await instance.get<ResponseWithDataType<TUserAuthorizedData>>("/auth/me")
        return res.data
    },
    async logout() {
        const res = await instance.delete<BasicResponseType>("/auth/login")
        return res.data
    },
    async login(loginData: LoginDataType) {
        const res = await instance.post<ResponseWithDataType<TLoginData>>("/auth/login", loginData)
        return res.data
    },
    async getCaptcha() {
        const res = await instance.get<TgetCaptcha>("/security/get-captcha-url")
        return res.data
    }
}