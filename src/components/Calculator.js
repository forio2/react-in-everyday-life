import React from 'react' 
import { withController } from '../hoc/withController'
import { CalculatorController } from './CalculatorController'
import Display from './Display'
import Numpad from './Numpad'

function Calculator(){
    return(
        <div>
            <Display />
                <div>
                    Calculator
                </div>
            <Numpad />
        </div>
    )
}

export default withController(CalculatorController)(Calculator)