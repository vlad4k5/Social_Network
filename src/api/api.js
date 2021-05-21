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
    }

}



export const authAPI = {
    isUserAuthorized() {
        return instance.get("/auth/me")
    },
    logout() {
        debugger
        return instance.delete("/auth/login")
    }
}