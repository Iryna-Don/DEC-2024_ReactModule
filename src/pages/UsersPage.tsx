import {IUser} from "../models/user/IUser.ts";
import {useEffect, useState} from "react";
import {getData} from "../services/api.service.ts";
import User from "../components/User.tsx";
import {baseUrl} from "../services/urls.ts";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getData<IUser>(baseUrl, 'users')
            .then(data => setUsers(data));
    })
    return (
        <>
            <h1>UsersPage content</h1>
            <div className="cardsContainer">
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </>
    );
};

export default UsersPage;