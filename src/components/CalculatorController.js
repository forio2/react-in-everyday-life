import React, { useContext, useEffect, useState } from 'react'

//create context and use
export const CalculatorContext = React.createContext()

export const useCalculatorContext = () => useContext(CalculatorContext)

export const CalculatorController = ({ children }) =>{
    const [value, setValue] = useState("0")
    const [next, setNext] = useState("")
    const [operation, setOperation] = useState("")
    const result = () => {
        switch(operation) {
            case '+':
                setValue((+value) + (+next))
                break;
            case '-':
                setValue(-(+value) + (+next))
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
            default:
            if(!value.toString().startsWith("0") || value.toString().startsWith("0.")) {
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
                setValue("0")
                setNext("")
                break;
            case 'C':
                setValue("")
                break;
            case '-/+':
                setValue(value * -1)
                break;
            case '.':
                if(value.toString() === ""){
                    setValue('0.' + value)
                }else{
                    setValue(value + '.')
                }
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