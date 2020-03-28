import React, { useEffect, useState, useRef } from 'react';

const BtnSection = ({addTodo}) => {
    const [inputText, setInputText] = useState('');

    const updateInputText = (e) => {
        setInputText(e.target.value);
    } 

    return (
        <>
            Task <input type="text" value={inputText} onChange={updateInputText} />
            <button onClick={() => addTodo(inputText)}>Save Item</button>
        </>
    );
}

export default BtnSection;