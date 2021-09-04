import { UserType } from "../store/types/types";
import { BasicResponseType, instance } from "./instance-api";

type TgetUsers = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    async getUsers(count: number, page: number, term: string) {
        const res = await instance.get<TgetUsers>(`/users/?count=${count}&page=${page}&term=${term}`)
        return res.data
    },
    async follow(userId: number) {
        const res = await instance.post<BasicResponseType>(`/follow/${userId}`)
        return res.data
    },
    async unfollow(userId: number) {
        const res = await instance.delete<BasicResponseType>(`/follow/${userId}`)
        return res.data
    }
}