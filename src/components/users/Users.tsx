import {useEffect, useState} from "react";
import {IUser} from "../../models/user/IUser.ts";
import {getData} from "../../services/api.service.ts";
import User from "./User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getData<IUser>('users')
            .then(data => setUsers(data));
    },[])
    return (
        <>
            <div>
                Users content
            </div>
            <div className={'container'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </>
    );
};

export default Users;