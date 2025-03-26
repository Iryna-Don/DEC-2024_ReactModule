import {FC} from "react";
import {IUserJsonplaceholder} from "../../models/jsonplaceholderUserModels/IUserJsonplaceholder.ts";

type PropsType = {
    user: IUserJsonplaceholder;
}

const JsonPlaceholderUser: FC<PropsType> = ({user}) => {
    const {name, username} = user;

    return (
        <>
                <p>{name} {username}</p>
        </>
    );
};

export default JsonPlaceholderUser;


