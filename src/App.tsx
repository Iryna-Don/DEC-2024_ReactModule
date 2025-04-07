import './App.css'
import {useFetch, useFetchDummy} from "./customHooks/useFetch.ts";
import {IUser} from "./models/IUser.ts";
import {IPost} from "./models/IPost.ts";
import {IUserDummy} from "./models/IUserDummy.ts";

function App() {
  const users = useFetch<IUser>('https://jsonplaceholder.typicode.com/users', []);
  const posts = useFetch<IPost>('https://jsonplaceholder.typicode.com/posts', []);
  const usersDummy = useFetchDummy<IUserDummy>('https://dummyjson.com', 'users');
  return (
    <>
      <div>
        {users.map((user: IUser) => (<p key={user.id}>{user.id} - {user.username}</p>))}
        {posts.map((post: IPost) => (<p key={post.id}>{post.id} - {post.title}</p>))}
        {usersDummy.map((user: IUserDummy) => (<p key={user.id}>{user.id} - {user.lastName}</p>))}
      </div>
    </>
  )
}

export default App
