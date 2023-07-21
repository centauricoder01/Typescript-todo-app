import React, { useState } from 'react'

const Search = () => {

    interface StringObject {
        [key: string]: string;
    }
    const formStyle: StringObject = {
        width: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        padding: "1rem",
        gap: "1rem"
    }

    const inputStyle: StringObject = {
        width: "85%",
        height: "2.5rem",
        borderRadius: "5px",
        border: "none",
        paddingLeft: "1rem"
    }

    const buttonStyle: StringObject = {
        width: "15%",
        height: "2.5rem",
        border: "none",
        borderRadius: "2px",
        cursor: "pointer"
    }
    type ObjectType = {
        id: number;
        todo: string;
    };

    const [localvalue, setLocalvalue] = useState<ObjectType[]>([]);

    const [input, setInput] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() === '') {
            return;
        }

        // Step 4: Update the data array with the new input value
        const newObject: ObjectType = {
            id: Date.now(),
            todo: input,
        };

        const updatedData = [...localvalue, newObject];

        localStorage.setItem('myTodo', JSON.stringify(updatedData));

        setLocalvalue(updatedData);
        setInput('');

    }



    return (
        <>
            <form style={formStyle} onSubmit={handleSubmit} >
                <input type="text" style={inputStyle} placeholder='Enter Your task' value={input} onChange={handleChange} />
                <button type='submit' style={buttonStyle} >Add Task.</button>
            </form>
        </>
    )
}

export default Search