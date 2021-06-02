import React, { useContext, useEffect, useState } from 'react'

//create context and use
export const CalculatorContext = React.createContext()

export const useCalculatorContext = () => useContext(CalculatorContext)

export const CalculatorController = ({ children }) =>{
    const [value, setValue] = useState("")
    const [next, setNext] = useState("")
    const [operation, setOperation] = useState("")
    const result = () => {
        switch(operation) {
            case '+':
                setValue((+value) + (+next))
                break;
            case '-':
                setValue((+value) - (+next))
                break;
            case 'x':
                setValue((+value) * (+next))
                break;
            case '/':
                setValue((+next) / (+value))
                break;
        }
    }
    const onclickButton = (number) => {
        switch(number) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            if(setValue) {
                setValue(value + number)
            }else {
                setValue(number)
            }
            break;
            case '+':
                setNext(value)
                setValue("")
                setOperation("+")
                break;
            case '-':
                setNext(value)
                setValue("")
                setOperation("-")
                break;
            case 'x':
                setNext(value)
                setValue("")
                setOperation("x")
                break;
            case '/':
                setNext(value)
                setValue("")
                setOperation("/")
                break;
            case '=':
                result()
                setNext("")
                break;
            case 'AC':
                setValue("")
                setNext("")
                break;
            case 'C':
                setValue("")
                break;
        }
       
    }


    return(
        <CalculatorContext.Provider value={{
            onclickButton,
            value, setValue,
            next
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}