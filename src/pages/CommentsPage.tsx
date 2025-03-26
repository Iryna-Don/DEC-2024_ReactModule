import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            CommentsPage content
            <hr/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;