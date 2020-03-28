import React from 'react';

const Board = ({todoList, checkTodo, deleteTodo}) => {
    return (
        <>
            <p>To do:</p>
            <ul>
                {
                    todoList.map((todoItem, i) => {
                        return (
                            <li>
                                {todoItem.text}
                                {todoItem.checked === false && <button onClick={() => checkTodo(i)}>확인</button>}
                                <button onClick={() => deleteTodo(i)}>삭제</button>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default Board;