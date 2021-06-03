import React from 'react' 
import { withController } from '../hoc/withController'
import { CalculatorController } from './CalculatorController'
import Display from './Display'
import Numpad from './Numpad'

function Calculator(){
    return(
        <center>
        <div style={{ width: 300 }}>
            <Display />
            <Numpad />
        </div>
        </center>
    )
}

export default withController(CalculatorController)(Calculator)