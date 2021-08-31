import { useEffect, useState } from "react";
// import { connect } from "react-redux";
import { compose } from "redux";
import { usersAPI } from "../../api/users-api";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { UserType } from "../../store/types/types";
// import { getUsers } from "../../store/users-reducer.ts";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import preloader from "../../assets/images/preloader.gif";
import s from "./Users.module.scss";

const Users: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Array<UserType>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const usersPerPage = 20;


    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await usersAPI.getUsers(usersPerPage, currentPage, "");
            setUsers(res.items)
            setTotalUsersCount(res.totalCount)
            setLoading(false);
        }
        fetchUsers();
    }, [currentPage])

    const onPageChanged = (page: number) => {
        setCurrentPage(page);
    }


    if (!users) {
        return <div>Loading</div>
    }
    let showUsers = users.map(u => <UserItem key={u.id} name={u.name} id={u.id} photo={u.photos.small} followed={u.followed} status={u.status} />)

    return <div>
        <UsersSearchForm />
        {!loading?<div>
            <Paginator
            totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            itemsPerPage={usersPerPage}
            loading={loading}
            pagesInPaginator={10} />

        {showUsers}

        <Paginator
            totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            itemsPerPage={usersPerPage}
            loading={loading}
            pagesInPaginator={10} />
            </div>
        : <div className={s.preloaderBlock}>
            <img src={preloader} />
        </div>
        }
    </div >
}



export default compose(
    withAuthRedirect
)(Users);
