import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': "43974699-a689-48d1-b548-063b532b4c9f"
    }
})


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    setProfile(profile) {
        return instance.put("/profile", profile)
    },
    setStatus(status) {
        return instance.put("/profile/status", { status })
    },
    setUserImage(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put("/profile/photo", formData, { headers: { "Content-Type": "multipart/form-data" } })
    }
}



export const authAPI = {
    isUserAuthorized() {
        return instance.get("/auth/me")
    },
    logout() {
        return instance.delete("/auth/login")
    },
    login(loginData) {
        return instance.post("/auth/login", loginData)
    },
    getCaptcha() {
        return instance.get("/security/get-captcha-url")
    }
}



export const usersAPI = {
    getUsers(count, page) {
        return instance.get(`/users/?count=${count}&page=${page}`)
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    }
}


