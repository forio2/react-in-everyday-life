import React from 'react' 
import { useCalculatorContext } from './CalculatorController'
import { Grid, Typography } from '@material-ui/core'

export default function Display(){
    const{value, next} = useCalculatorContext()
    return(
        <div>
            <Grid 
                style={{ 
                    background: '#000', 
                    paddingBottom: 5,
                    paddingRight: 22, 
                    height: 105, 
                    color: 'white'}}
                direction="column"
                alignItems="flex-end"
                justify="flex-end"
                container
            >
            <Typography variant="h4">
                {next}
            </Typography>
            <Typography variant="h4">
                {value}
            </Typography>
            </Grid>
        </div>
    )
}