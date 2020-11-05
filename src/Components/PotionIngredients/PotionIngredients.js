import React  from 'react';
import Options from '../Options/Options'
import classes from '../PotionIngredients/PotionIngredients.module.css'


//method for determing if an ingredient is selected and if the next ingredient will be displayed
const showIngredient=(index, ingredients)=>{
    if(ingredients[index-1].ingredient==='clear'){
        return false;
    }else {
        return true;
    }
}

//method for showing all the options. If the postion is mixed this will not show, if it isn't it will show
const showOption=(mixed)=>{
    if(mixed){
        return classes.Hide;
    }else{
        return classes.Ingredients
    }
}

const PotionIngredients= (props)=>(
//select options
        <div className={showOption(props.mixed)}>
            
        <Options 
            show={true}
            changed={props.changed}
            options={props.extracts}
            cleared={props.mixed}
            id='0'>
            
        </Options>

        <Options
            show={showIngredient(1, props.ingredients)}
            changed={props.changed}
            options={props.extracts}
            cleared={props.mixed}

            id='1'>
        </Options>

        <Options
            show={showIngredient(2, props.ingredients)}
            changed={props.changed}
            options={props.extracts}
            cleared={props.mixed}

            id='2'>
        </Options> 

        <Options
            show={showIngredient(3, props.ingredients)}
            changed={props.changed}
            options={props.oils}
            cleared={props.mixed}

            id='3'>
        </Options> 

        <Options
            show={showIngredient(4, props.ingredients)}
            changed={props.changed}
            options={props.flowers}
            id='4'>
        </Options> 
        </div>
        
)

export default PotionIngredients;