import React, { useEffect, useState } from 'react';
import Board from './Board';
import BtnSection from './BtnSection';

const Main = ({children}) => {
    const [todoList, setTodo] = useState(
        [
            {
                'text' : '컴활 공부',
                'checked' : true,
            },
            {
                'text' : '정처기 공부',
                'checked' : false,
            },
            {
                'text' : '리액트 공부',
                'checked' : true,
            },
        ]
    );

    //todo 추가
    const addTodo = (todoText) => {
        setTodo(
            [
                ...todoList,
                {
                    "text": todoText,
                    "checked": false,
                } 
            ]
        );
    }

    //todo 체크
    const checkTodo = (index) => {
        setTodo(
            [
                ...todoList.slice(0, index),
                {
                    "text": todoList[index]["text"],
                    "checked": true,
                },
                ...todoList.slice(index+1),
            ]
        );
    }

    //todo 삭제
    const deleteTodo = (index) => {
        setTodo(
            [
                ...todoList.slice(0, index),
                ...todoList.slice(index+1),
            ]
        );
    }

    return (
        <>
            <div className="Main">
                <Board todoList={todoList} checkTodo={checkTodo} deleteTodo={deleteTodo} />
                <BtnSection addTodo={addTodo} />
            </div>
        </>
    );
}

export default Main;