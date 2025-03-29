import {IUser} from "../models/IUser.tsx";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getData} from "../services/api.service.ts";
import User from "../components/user/User.tsx";
import PaginationComponent from "../components/PaginationComponent.tsx";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(1);
    const [query, setQuery] = useSearchParams();
    const limit = 30;
    const skip = Number(query.get('skip')) || 0;
    useEffect(() => {
        getData<IUser>('users', limit, skip)
            .then(({data, total}) => {
                setUsers(data);
                setTotal(total);
            })
    }, [limit, skip]);
    return (
        <>
            <PaginationComponent limit={limit} skip={skip} setQuery={setQuery} total={total}/>
            <hr/>
            <div className={'container'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <hr/>
            <PaginationComponent limit={limit} skip={skip} setQuery={setQuery} total={total}/>
        </>
    );
};

export default UsersPage;