import {FC} from "react";
import {IUser} from "../../models/user/IUser.ts";
import s from "./user.module.css";
import {useNavigate} from "react-router-dom";
// import {Link} from "react-router-dom";

type userProps = {
    user: IUser;
}

const User: FC<userProps> = ({user}) => {
    const {id, firstName, lastName} = user;
    const navigate = useNavigate()

    const onButtonClickNavigate = () => {
        navigate('/users/' + id + '/carts');
    }

    return (
        <div className={s.blockWithBtn}>
            <h2> ID: {id} {firstName} {lastName}</h2>
            <button className={s.btn} onClick={() => onButtonClickNavigate()}>
                To {firstName} {lastName}'s Cart
            </button>
            {/*<Link to={`/users/${id}/carts`}>To {firstName} {lastName}'s Cart</Link>*/}
        </div>
    );
};

export default User;