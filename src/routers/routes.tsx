import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import Users from "../components/users/Users.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersJsonPlaceholder from "../components/users/UsersJsonPlaceholder.tsx";
import UsersDummyJson from "../components/users/UsersDummyJson.tsx";
import Posts from "../components/posts/Posts.tsx";
import PostsJsonPlaceholder from "../components/posts/PostsJsonPlaceholder.tsx";
import PostsDummyJson from "../components/posts/PostsDummyJson.tsx";
import Comments from "../components/comments/Comments.tsx";
import CommentsJsonPlaceholder from "../components/comments/CommentsJsonPlaceholder.tsx";
import CommentsDummyJson from "../components/comments/CommentsDummyJson.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <UsersPage/>, children: [
                    {index: true, element: <Users/>},
                    {path: 'jsonplaceholder', element: <UsersJsonPlaceholder/>},
                    {path: 'dummyjson', element: <UsersDummyJson/>},
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {index: true, element: <Posts/>},
                    {path: 'jsonplaceholder', element: <PostsJsonPlaceholder/>},
                    {path: 'dummyjson', element: <PostsDummyJson/>},
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {index: true, element: <Comments/>},
                    {path: 'jsonplaceholder', element: <CommentsJsonPlaceholder/>},
                    {path: 'dummyjson', element: <CommentsDummyJson/>},
                ]
            },
        ]
    },
])

