import React, { useEffect, useState } from 'react';

const Main = () => {
    const [todoList, setTodo] = useState(
        [
            {'text' : '컴활 공부'},
            {'text' : '정처기 공부'},
            {'text' : '리액트 공부'},
        ]
    );
    const input = '';

    useEffect(() => {
/*         setNum(2);
        console.log("start");
        return console.log("end"); */
    },[])

    useEffect(() => {
        console.log(todoList);
    }, [todoList])

    const addTodo = () => {
        setTodo(todoList.concat({"text":'abcd'}));
    }

    return (
        <>
            <p>To do:</p>
            <ul>
                {
                    todoList.map((todoItem, i) => {
                        return (
                            <li>
                                {todoItem.text}
                                <button>확인</button>
                                <button>삭제</button>
                            </li>
                        );
                    })
                }
            </ul>
            Task <input type="text"></input>
            <button onClick={addTodo}>Save Item</button>
        </>
    );
}

export default Main;