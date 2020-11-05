import React, { Component } from 'react';
import Vile from "../Components/Vile/Vile"
import classes from "../PotionBuilder/PotionBuilder.module.css"

import Aux from '../hoc/Auxillary';
import PotionIngredients from '../Components/PotionIngredients/PotionIngredients';
import Mixer from "../Components/Mixer/Mixer";
//all extracts
const EXTRACTS = [
    { ingredient: 'Mango Extract', taste: 'sweet' },
    { ingredient: 'Water Melon Extract', taste: 'sweet' },
    { ingredient: 'Guava Extract', taste: 'sweet' },
    { ingredient: 'Orange Extract', taste: 'sweet' },
    { ingredient: 'Blended Fish Scales', taste: 'salty' },
    { ingredient: 'Blended Salmon Guts', taste: 'salty' },
    { ingredient: 'Lemon Extract', taste: 'sour' },
    { ingredient: 'Spinach Extract', taste: 'bitter' },

]

//all oil 
const OILS = [
    { ingredient:'Lavender Oil', taste: 'bitter'},
    { ingredient: 'Sunflower Oil', taste: 'bitter' },
    { ingredient: 'Coconut Oil', taste: 'sweet' },
    { ingredient: 'Rosemary Oil', taste: 'salty' },
    { ingredient: 'Castor Oil', taste: 'neutral' },
    { ingredient: 'Canola Oil', taste: 'neutral' },
    { ingredient: 'Vegetable Oil', taste: 'salty' },
];


//all flowers
const FLOWERS = [
    { ingredient: 'Rose Petal', taste: 'bitter' },
    { ingredient: 'Sunflower Petal', taste: 'bitter' },
    { ingredient: 'Cardinal Petal', taste: 'bitter' },
    { ingredient: 'Tulip Petal', taste: 'sour' },
    { ingredient: 'Amaryllis Petal', taste: 'sour' },
    { ingredient: 'Foxgloves Petal', taste: 'salty' },
    { ingredient: 'Bellflower Petal', taste: 'sour' }
];

class PotionBuilder extends Component {
    //state of potion
    state = {
        options: [
            {name: 'option1', ingredient: 'clear'},
            {name: 'option2', ingredient: 'clear'},
            {name: 'option3', ingredient: 'clear'},
            {name: 'option4', ingredient:'clear'},
            {name: 'option5', ingredient:'clear'}
        ],

        taste: 'neutral',
        mixed: false,
    }


   
    //method to update the colors in the 4 sections of the vile
    colorChangeHandler= (event) =>{
        const value = event.target.value.substring(0, event.target.value.length-1);
        const id = event.target.value.substring(event.target.value.length-1);
        const newOptions = { ...this.state.options[id]};
        newOptions.name="option"+id;
        newOptions.ingredient=value;
        const optionsCopy = [...this.state.options];
        optionsCopy[id] =newOptions;
        this.setState({ options: optionsCopy });
    }

    //method to mix the postion
    //called on the mixed button click

    mixPotionHandler=() =>{
        if (this.state.options[0].ingredient !== 'clear' && this.state.options[1].ingredient !== 'clear' 
            && this.state.options[2].ingredient !== 'clear' && this.state.options[3].ingredient !== 'clear'){
        let allTaste = {bitter : 0, sweet : 0, salty :0, neutral : 0, sour : 0};
        const allIngredients = [...EXTRACTS.concat(OILS, FLOWERS)];

        this.state.options.map((i) => {
            allIngredients.map((p)=>{
                if(p.ingredient === i.ingredient){
                    if (p.taste === 'bitter') {
                        allTaste.bitter +=1;
                    }
                    else if (p.taste === 'sweet') {
                        allTaste.sweet += 1;
                    } else if (p.taste === 'sour') {
                        allTaste.sour += 1;
                    } else if (p.taste === 'salty') {
                        allTaste.salty += 1;
                    } else {
                        allTaste.neutral += 1
                    }
                }
            });
        });
        let total=5;
        let tastePercent = {
            bitter: allTaste.bitter / total, sweet: allTaste.sweet / total, 
            salty: allTaste.salty / total, neutral: allTaste.neutral / total, sour: allTaste.sour/total }

        let maxTaste={};
        let maxvalue=0;
        for(const t in tastePercent){
            if(tastePercent[t]>=maxvalue){
                maxvalue = tastePercent[t];
                maxTaste=t;
            }
        }

        const newTaste=maxTaste;
        this.setState({ taste: newTaste, mixed: true});
    }else{
            this.setState({ mixed: false });

    }
    }


    clearPotionHandler=()=>{

    const newOptions=[
            {name: 'option1', ingredient: 'clear'},
            {name: 'option2', ingredient: 'clear'},
            {name: 'option3', ingredient: 'clear'},
            {name: 'option4', ingredient:'clear'},
            {name: 'option5', ingredient:'clear'}
        ];
    const newTaste='neutral';
    const newMix= false;
    const newNote = "Build me a potion my love!"
    this.setState({
        options: newOptions, 
        taste: newTaste,
        mixed: newMix,
        note: newNote
    }
    )

    }



    render(){
        return(
        <Aux>
        <div className={classes.Content}>
           <Vile
            ingredients={this.state.options}
            mixed={this.state.mixed}
           ></Vile>
           <PotionIngredients
            extracts={EXTRACTS}
            oils={OILS}
            flowers={FLOWERS}
            ingredients={this.state.options}
            changed= {this.colorChangeHandler}
            mixed={this.state.mixed}
            
           ></PotionIngredients>
            <Mixer
                taste={this.state.taste}
                allingredients={[...EXTRACTS.concat(OILS, FLOWERS)]}
                myingredient={this.state.options}
                clicked={this.mixPotionHandler}
                mixed={this.state.mixed}
                clear={this.clearPotionHandler}
            >
            </Mixer>
        </div>
        </Aux>
        )
    }
 }

 export default PotionBuilder;