import { PhotosType, ProfileInfoType } from "../store/types/types";
import { BasicResponseType, instance, ResponseWithDataType } from "./instance-api";


type SetPhotoDataType = {
    photos: PhotosType,
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileInfoType>(`/profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then(res => res.data)
    },

    setProfile(profile: ProfileInfoType) {
        return instance.put<BasicResponseType>("/profile", profile).then(res => res.data)
    },
    setStatus(status: string) {
        return instance.put<BasicResponseType>("/profile/status", { status }).then(res => res.data)
    },
    setUserImage(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<ResponseWithDataType<SetPhotoDataType>>("/profile/photo", formData, { headers: { "Content-Type": "multipart/form-data" } }).then(res => res.data)
    }
}

