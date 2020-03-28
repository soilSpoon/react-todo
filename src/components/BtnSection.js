import React, { useState } from 'react';

const BtnSection = ({addTodo}) => {
    const [inputText, setInputText] = useState('');

    const updateInputText = (e) => {
        setInputText(e.target.value);
    } 

    return (
        <div className="BtnSection">
            <div>
                Task 
            </div>
            <div>
                  <input type="text" placeholder="What do you need to do?" value={inputText} onChange={updateInputText} />
            </div>
            <div>
                <button onClick={() => addTodo(inputText)} className="SaveBtn">Save Item</button>
            </div>
        </div>
    );
}

export default BtnSection;