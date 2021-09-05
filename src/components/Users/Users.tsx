import { useEffect, useState } from "react";
import { compose } from "redux";
import { usersAPI } from "../../api/users-api";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { UserType } from "../../store/types/types";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import FakeUserItem from "./UserItem/FakeUserItem";
import s from "./Users.module.scss";

const Users: React.FC = () => {
    
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Array<UserType>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const [findValue, setFindValue] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [searchNotFound, setSearchNotFound] = useState(false)
    const usersPerPage = 20;
    

    useEffect(() => {
        (async () => {
            setLoading(true);
            const res = await usersAPI.getUsers(usersPerPage, currentPage, findValue, isSubscribed);
            if(res.items.length === 0) setSearchNotFound(true)
            else setSearchNotFound(false)
            setUsers(res.items)
            setTotalUsersCount(res.totalCount)
            setLoading(false);
        })()
    }, [currentPage, findValue, isSubscribed])

    const onPageChanged = (page: number) => {
        setCurrentPage(page);
    }

    let showUsers = users.map(u => <UserItem key={u.id} name={u.name} id={u.id} photo={u.photos.small} followed={u.followed} status={u.status} />)

    return <div>
        <UsersSearchForm setFindValue={setFindValue} setCurrentPage={setCurrentPage} setIsSubscribed={setIsSubscribed}/>
        {!searchNotFound ? <div>
            <Paginator
            totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            itemsPerPage={usersPerPage}
            loading={loading}
            pagesInPaginator={10} />

            {loading ? [...Array(10)].map((i, index) => <FakeUserItem key={index} />) :showUsers}

            <Paginator
            totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            itemsPerPage={usersPerPage}
            loading={loading}
            pagesInPaginator={10} />
        </div>
        : <span className={s.searchNotFound}>Nothing was found for "{findValue}" :(</span>
        }
    </div >
}
export default compose(withAuthRedirect)(Users);