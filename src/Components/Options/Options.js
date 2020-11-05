import React from 'react';
import classes from '../Options/Options.module.css';

const show=(showit)=>{
    if(showit){
        return classes.Ingredients
    }else{
        return classes.Hide
    }

}


const options= (props)=>(
    
    <select className={show(props.show)} 
        onChange={props.changed}>
            <option className={classes.Option}>Select an Extract....</option>
        {props.options.map(option => (
            <option className={classes.Option}
                key={option.ingredient+props.id}
                value={option.ingredient+props.id}>
                {option.ingredient}
            </option>
        ))}
    </select>



)


export default options;
