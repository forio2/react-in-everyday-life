import React from 'react' 
import { useCalculatorContext } from './CalculatorController'

export default function Display(){
    const{value, next} = useCalculatorContext()
    return(
        <div>
            <div>
                {next}
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}