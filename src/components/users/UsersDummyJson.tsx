import {getData} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import {IUserDummy} from "../../models/dummyjsonUserModels/IUserDummy.ts";
import UserDummy from "./DummyUser.tsx";

const UsersDummyJson = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {
        getData<IUserDummy>(import.meta.env.VITE_API_DUMMY_URL, 'users', 0)
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            UsersDummyJson content
            <hr/>
            {users.map(user => <UserDummy key={user.id} user={user}/>)}
        </div>
    )
}
export default UsersDummyJson;