import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { usersAPI } from "../../api/api";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { getUsers } from "../../store/users-reducer.ts";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const usersPerPage = 20;


    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await usersAPI.getUsers(usersPerPage, currentPage);
            setUsers(res.data.items)
            setTotalUsersCount(res.data.totalCount)
            setLoading(false);
        }
        fetchUsers();
    }, [currentPage])

    const onPageChanged = (page) => {
        setCurrentPage(page);
    }


    if (!users) {
        return <div>Loading</div>
    }

    let showUsers = users.map(u => <UserItem name={u.name} id={u.id} photo={u.photos.small} followed={u.followed} status={u.status} />)

    return <div>
        <h1>Users</h1><hr />
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
    </div >
}



export default compose(
    withAuthRedirect
)(Users);
