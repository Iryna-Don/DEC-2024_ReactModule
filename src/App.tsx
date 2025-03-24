import './App.css'
import Comments from "./components/Comments/comments.tsx";
import {useState} from "react";
import Posts from "./components/Posts/Posts.tsx";
import Todos from "./components/Todos/Todos.tsx";

function App() {
    const [activeComponent, setActiveComponent] = useState<'posts' | 'comments' | 'todos' | null>(null);

    return (
        <>
            <div className={'btnDiv'}>
                <button className={'button'} onClick={() => setActiveComponent(activeComponent === 'posts' ? null : 'posts')}>
                    {activeComponent === 'posts' ? 'Hide Posts' : 'Show Posts'}
                </button>
                <button className={'button'} onClick={() => setActiveComponent(activeComponent === 'comments' ? null : 'comments')}>
                    {activeComponent === 'comments' ? 'Hide Comments' : 'Show Comments'}
                </button>
                <button className={'button'} onClick={() => setActiveComponent(activeComponent === 'todos' ? null : 'todos')}>
                    {activeComponent === 'todos' ? 'Hide Todos' : 'Show Todos'}
                </button>
            </div>

            <div className={'data'}>
                {activeComponent === 'posts' && <Posts/>}
                {activeComponent === 'comments' && <Comments/>}
                {activeComponent === 'todos' && <Todos/>}
            </div>
        </>
    )
}

export default App
