import {FC, useEffect, useState} from 'react';
import {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../api.service.ts";
import Todo from "../Todo/Todo.tsx";

const Todos:FC = () => {
    const[todos, setTodos]=useState<ITodo[]>([]);
    useEffect(()=>{
        getTodos()
            .then(value => setTodos(value))
    }, [])
    return (
        <div className={'container'}>
            {todos.map((todo, index)=><Todo key={index} todo={todo}/>)}
        </div>
    );
};

export default Todos;