import { UserType } from "../store/types/types";
import { BasicResponseType, instance } from "./instance-api";


type TgetUsers = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers(count: number, page: number, term: string) {
        return instance.get<TgetUsers>(`/users/?count=${count}&page=${page}&term=${term}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<BasicResponseType>(`/follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<BasicResponseType>(`/follow/${userId}`).then(res => res.data)
    }
}


