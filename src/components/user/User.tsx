import {IUser} from "../../models/IUser.tsx";
import {FC} from "react";

type UserProps = {
    user:IUser;
}

const User:FC<UserProps> = ({user}) => {
    const {id, image, firstName, lastName} = user;
    return (
        <div className={'card'}>
            <h3>ID: {id} Name: {firstName} {lastName}</h3>
            <img src={image} alt={`${firstName} ${lastName}`}/>
        </div>
    );
};

export default User;