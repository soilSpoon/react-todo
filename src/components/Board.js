import React from 'react';

const Board = ({todoList, checkTodo, deleteTodo}) => {
    return (
        <div className="Board">
            <p>To do:</p>
            <ul>
                {
                    todoList.map((todoItem, i) => {
                        return (
                            <li>
                                <div className={todoItem.checked ? "CompleteText" : ""}>
                                    {todoItem.text}
                                </div>
                                <div>
                                    {todoItem.checked === false && <button onClick={() => checkTodo(i)} className="CheckBtn">✓</button>}
                                    <button onClick={() => deleteTodo(i)} class="DeleteBtn">X</button>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Board;