import React from 'react' 
import { useCalculatorContext } from './CalculatorController'
import { Button, Grid } from '@material-ui/core'

export default function Numpad(){
    const {onclickButton} = useCalculatorContext()
    return(
        <Grid 
            style={{ background: '#000', padding: 22 }} 
        >
        <div>
            <div className="pad1">
                <Button variant="contained" onClick={() => onclickButton("AC")}>AC</Button>
                <Button variant="contained" onClick={() => onclickButton("C")}>C</Button>
                <Button variant="contained" onClick={() => onclickButton("-/+")}>-/+</Button>
                <Button variant="contained" color="primary" onClick={() => onclickButton("/")}>/</Button>

            </div>
            <div className="pad2">
                <Button variant="contained" onClick={() => onclickButton("7")}>7</Button>
                <Button variant="contained" onClick={() => onclickButton("8")}>8</Button>
                <Button variant="contained" onClick={() => onclickButton("9")}>9</Button>
                <Button variant="contained" color="primary" onClick={() => onclickButton("x")}>x</Button>
            </div>
            <div className="pad3">
                <Button variant="contained" onClick={() => onclickButton("4")}>4</Button>
                <Button variant="contained" onClick={() => onclickButton("5")}>5</Button>
                <Button variant="contained" onClick={() => onclickButton("6")}>6</Button>
                <Button variant="contained" color="primary" onClick={() => onclickButton("-")}>-</Button>
            </div>
            <div className="pad4">
                <Button variant="contained" onClick={() => onclickButton("1")}>1</Button>
                <Button variant="contained" onClick={() => onclickButton("2")}>2</Button>
                <Button variant="contained"  onClick={() => onclickButton("3")}>3</Button>
                <Button variant="contained" color="primary" onClick={() => onclickButton("+")}>+</Button>
            </div>
            <div className="pad5">
                <Button variant="contained" onClick={() => onclickButton("0")}>0</Button>
                <Button variant="contained" onClick={() => onclickButton(".")}>.</Button>
                <Button variant="contained" color="primary" onClick={() => onclickButton("=")}>=</Button>
            </div>
        </div>
        </Grid>
    )
}