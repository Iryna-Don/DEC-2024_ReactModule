import {useEffect, useState} from "react";
import {getData} from "../../services/api.service.ts";
import {IUserJsonplaceholder} from "../../models/jsonplaceholderUserModels/IUserJsonplaceholder.ts";
import JsonPlaceholderUser from "./JsonPlaceholderUser.tsx";

const UsersJsonPlaceholder = () => {
    const [users, setUsers] = useState<IUserJsonplaceholder[]>([]);

    useEffect(() => {
        getData<IUserJsonplaceholder>(import.meta.env.VITE_API_JSON_URL, 'users')
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            UsersJsonPlaceholder content
            <hr/>
            {users.map(user => <JsonPlaceholderUser key={user.id} user={user}/>)}
        </div>
    )
};

export default UsersJsonPlaceholder;