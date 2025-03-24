import {FC} from 'react';
import {ITodo} from "../../models/ITodo.ts";
type TodoPropsType = {
    todo:ITodo;
}

const Todo:FC<TodoPropsType> = ({todo}) => {
    const{id, userId, todo:whatToDo, completed}=todo;
    return (
        <div>
            <div>
                <span><i>Todo ID:</i> {id}</span>
                <span><i>User ID:</i> {userId}</span>
            </div>
            <h3>{whatToDo}</h3>
            <p>Completed: {completed.toString()}</p>
        </div>
    );
};

export default Todo;