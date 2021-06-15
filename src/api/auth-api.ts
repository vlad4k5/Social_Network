import { LoginDataType, PhotosType, ProfileInfoType, UserType } from "../store/types/types";
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
    isUserAuthorized() {
        return instance.get<ResponseWithDataType<TUserAuthorizedData>>("/auth/me").then(res => res.data)
    },
    logout() {
        return instance.delete<BasicResponseType>("/auth/login").then(res => res.data)
    },
    login(loginData: LoginDataType) {
        return instance.post<ResponseWithDataType<TLoginData>>("/auth/login", loginData).then(res => res.data)
    },
    getCaptcha() {
        return instance.get<TgetCaptcha>("/security/get-captcha-url").then(res => res.data)
    }
}
