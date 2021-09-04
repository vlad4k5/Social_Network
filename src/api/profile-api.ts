import { PhotosType, ProfileInfoType } from "../store/types/types";
import { BasicResponseType, instance, ResponseWithDataType } from "./instance-api";

type SetPhotoDataType = {
    photos: PhotosType,
}

export const profileAPI = {
    async getProfile(userId: number) {
        const res = await instance.get<ProfileInfoType>(`/profile/${userId}`)
        return res.data
    },
    async getStatus(userId: number) {
        const res = await instance.get<string>(`/profile/status/${userId}`)
        return res.data
    },

    async setProfile(profile: ProfileInfoType) {
        const res = await instance.put<BasicResponseType>("/profile", profile)
        return res.data
    },
    async setStatus(status: string) {
        const res = await instance.put<BasicResponseType>("/profile/status", { status })
        return res.data
    },
    async setUserImage(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile)
        const res = await instance.put<ResponseWithDataType<SetPhotoDataType>>("/profile/photo", formData, { headers: { "Content-Type": "multipart/form-data" } })
        return res.data
    }
}