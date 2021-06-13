import axios from "axios";
import { LoginDataType, PhotosType, ProfileInfoType, UserType } from "../store/types/types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': "43974699-a689-48d1-b548-063b532b4c9f"
    }
})


type TbasicResponse = {
    resultCode: number
    messages: Array<string>
}
type TsetPhoto = {
    data: {
        photos: PhotosType
    }
    resultCode: number
    messages: Array<string>
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileInfoType>(`/profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then(res => res.data)
    },

    setProfile(profile: ProfileInfoType) {
        return instance.put<TbasicResponse>("/profile", profile).then(res => res.data)
    },
    setStatus(status: string) {
        return instance.put<TbasicResponse>("/profile/status", { status }).then(res => res.data)
    },
    setUserImage(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<TsetPhoto>("/profile/photo", formData, { headers: { "Content-Type": "multipart/form-data" } }).then(res => res.data)
    }
}



type TisUserAuthorized = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}
type Tlogin = {
    data: {
        userId: number
    }
    resultCode: number
    messages: Array<string>
}
type TgetCaptcha = {
    url: string
}
export const authAPI = {
    isUserAuthorized() {
        return instance.get<TisUserAuthorized>("/auth/me").then(res => res.data)
    },
    logout() {
        return instance.delete<TbasicResponse>("/auth/login").then(res => res.data)
    },
    login(loginData: LoginDataType) {
        return instance.post<Tlogin>("/auth/login", loginData).then(res => res.data)
    },
    getCaptcha() {
        return instance.get<TgetCaptcha>("/security/get-captcha-url").then(res => res.data)
    }
}




type TgetUsers = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export const usersAPI = {
    getUsers(count: number, page: number) {
        return instance.get<TgetUsers>(`/users/?count=${count}&page=${page}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<TbasicResponse>(`/follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<TbasicResponse>(`/follow/${userId}`).then(res => res.data)
    }
}


