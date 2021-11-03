import React from "react";
import propTypes from 'prop-types';
import Todo from './Todo';


/*
mapを用いてpropsとして受け取ったtodosをTodo Componentに渡しています。
{...todo}はtodoの全ての要素を表しており、id={todo.id}、text=todo.textと同じ意味を持っています。
*/

const TodoList = ({todos}) =>{
    return (
        <ul>
            {todos.map(todo => (
                <Todo key = {todo.id} {...todo} />
            ))}
        </ul>
    )


    TodoList.propTypes = {
        todos: propTypes.arrayOf(
            propTypes.shape({
                id: propTypes.number.isRequired,
                text: propTypes.string.isRequired,
            }).isRequired
        ).isRequired
    }
}

export default TodoList
