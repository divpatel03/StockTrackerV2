import React, { useState } from 'react';

function Dashboard({ username }) {
    const [numTextBoxes, setNumTextBoxes] = useState('');
    const [textValues, setTextValues] = useState([]);
    const [submittedValues, setSubmittedValues] = useState([]);

    const handleNumChange = (event) => {
        const num = parseInt(event.target.value, 10) || 0;
        setNumTextBoxes(event.target.value);

        // Adjust textValues array length
        setTextValues((prevValues) => {
            const newValues = [...prevValues];
            if (num > newValues.length) {
                // Add empty strings for additional text boxes
                return [...newValues, ...Array(num - newValues.length).fill('')];
            } else {
                // Slice array to the desired length
                return newValues.slice(0, num);
            }
        });
    };

    const handleTextChange = (index) => (event) => {
        const newTextValues = [...textValues];
        newTextValues[index] = event.target.value;
        setTextValues(newTextValues);
    };

    const handleSubmit = () => {
        setSubmittedValues(textValues);
        alert("Text boxes submitted!");
    };

    return (
        <div>
            <h2>Welcome {username}</h2>
            <h1>Dashboard</h1>
            <div>
                <label htmlFor="numTextBoxes">Number of text boxes: </label>
                <input
                    type="number"
                    id="numTextBoxes"
                    value={numTextBoxes}
                    onChange={handleNumChange}
                    placeholder="Enter number of text boxes"
                />
            </div>
            <div>
                {Array.from({ length: parseInt(numTextBoxes) || 0 }, (_, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={textValues[index]}
                            onChange={handleTextChange(index)}
                            placeholder={`Text Box ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Dashboard;
