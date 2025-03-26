import {FC} from "react";
import {IUserDummy} from "../../models/dummyjsonUserModels/IUserDummy.ts";

type PropsType = {
    user: IUserDummy;
}

const UserDummy: FC<PropsType> = ({user}) => {
    const {lastName, firstName} = user;
    return (
        <div>
            <p>{firstName} {lastName}</p>
        </div>
    );
};

export default UserDummy;