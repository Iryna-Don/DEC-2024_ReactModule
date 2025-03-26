import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            PostsPage content
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;