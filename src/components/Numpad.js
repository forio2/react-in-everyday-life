import React from 'react' 
import { useCalculatorContext } from './CalculatorController'

export default function Numpad(){
    const {onclickButton} = useCalculatorContext()
    return(
        <div>
            <div className="pad1">
                <button onClick={() => onclickButton("AC")}>AC</button>
                <button onClick={() => onclickButton("C")}>C</button>
                <button onClick={() => onclickButton("-/+")}>-/+</button>
                <button onClick={() => onclickButton("/")}>/</button>

            </div>
            <div className="pad2">
                <button onClick={() => onclickButton("7")}>7</button>
                <button onClick={() => onclickButton("8")}>8</button>
                <button onClick={() => onclickButton("9")}>9</button>
                <button onClick={() => onclickButton("x")}>x</button>
            </div>
            <div className="pad3">
                <button onClick={() => onclickButton("4")}>4</button>
                <button onClick={() => onclickButton("5")}>5</button>
                <button onClick={() => onclickButton("6")}>6</button>
                <button onClick={() => onclickButton("-")}>-</button>
            </div>
            <div className="pad4">
                <button onClick={() => onclickButton("1")}>1</button>
                <button onClick={() => onclickButton("2")}>2</button>
                <button onClick={() => onclickButton("3")}>3</button>
                <button onClick={() => onclickButton("+")}>+</button>
            </div>
            <div className="pad5">
                <button onClick={() => onclickButton("0")}>0</button>
                <button onClick={() => onclickButton(".")}>.</button>
                <button onClick={() => onclickButton("=")}>=</button>
            </div>
        </div>
    )
}