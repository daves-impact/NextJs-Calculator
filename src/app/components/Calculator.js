// components/Calculator.js

import { useState } from 'react';

export default function Calculator() {
    const [display, setDisplay] = useState('');

    const appendToDisplay = (value) => {
        setDisplay((prev) => prev + value);
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    const calculateResult = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    const calculateTrig = (func) => {
        try {
            const result = func(parseFloat(display));
            setDisplay(result.toString());
        } catch (error) {
            setDisplay('Error');
        }
    };
    const calculateSquareRoot = () => {
        try {
            if (!display) {
                setDisplay('Error');
                return;
            }
            const value = eval(display);
            if (value < 0 || isNaN(value)) {
                setDisplay('Error');
                return;
            }
            const result = Math.sqrt(value);
            setDisplay(result.toString());
        } catch (error) {
            setDisplay('Error');
        }
    };


    return (
        <div className="calculator">
            <input
                type="text"
                id="display"
                value={display}
                disabled
                className="display"
            />
            <div className="buttons">
            <button onClick={() => calculateTrig(Math.sin)}>sin</button>
                <button onClick={() => appendToDisplay('7')}>7</button>
                <button onClick={() => appendToDisplay('8')}>8</button>
                <button onClick={() => appendToDisplay('9')}>9</button>
                <button onClick={() => appendToDisplay('/')}>/</button>

                <button onClick={() => calculateTrig(Math.cos)}>cos</button>
                <button onClick={() => appendToDisplay('4')}>4</button>
                <button onClick={() => appendToDisplay('5')}>5</button>
                <button onClick={() => appendToDisplay('6')}>6</button>
                <button onClick={() => appendToDisplay('*')}>*</button>

                <button onClick={() => calculateTrig(Math.tan)}>tan</button>
                <button onClick={() => appendToDisplay('1')}>1</button>
                <button onClick={() => appendToDisplay('2')}>2</button>
                <button onClick={() => appendToDisplay('3')}>3</button>
                <button onClick={() => appendToDisplay('-')}>-</button>

                <button onClick={clearDisplay}>C</button>
                <button onClick={() => appendToDisplay('.')}>.</button>
                <button onClick={() => appendToDisplay('0')}>0</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={calculateSquareRoot}>√</button>
            </div>
        </div>
    );
}
