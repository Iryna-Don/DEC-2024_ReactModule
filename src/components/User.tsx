import {FC} from "react";
import {IUser} from "../models/user/IUser.ts";

type UserProps = {
    user: IUser;
}
const User: FC<UserProps> = ({user}) => {
    const {id, firstName, lastName, image} = user;
    return (
        <div className={'cardBlock'}>
            <p>ID: {id}</p>
            <h2>{firstName} {lastName}</h2>
            <img src={image} alt={`User's logo: ${firstName} ${lastName}`}/>
        </div>
    );
};

export default User;