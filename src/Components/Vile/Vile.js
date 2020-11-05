import React from 'react';
import  classes from './Vile.module.css';

const EXTRACTCOLORS=[
    { ingredient: 'Mango Extract', color1: [255, 195, 41]},
    { ingredient: 'Water Melon Extract', color1: [255, 132, 204]},
    { ingredient: 'Guava Extract', color1: [148, 30, 95]},
    { ingredient: 'Blended Fish Scales', color1: [63, 65, 62]},
    { ingredient: 'Orange Extract', color1: [255, 162, 41]},
    { ingredient: 'Lemon Extract', color1: [255, 241, 41]},
    { ingredient: 'Blended Salmon Guts', color1: [255, 50, 50] },
    { ingredient: 'Spinach Extract', color1: [41, 161, 25]},
    { ingredient: 'Coconut Oil', color1: [255, 255, 255]},
    { ingredient: 'Sunflower Oil', color1: [255, 254, 203]},
    { ingredient: 'Rosemary Oil', color1: [126, 113, 102]},
    { ingredient: 'Castor Oil', color1: [188, 194, 196]},
    { ingredient: 'Canola Oil', color1: [255, 252, 237]},
    { ingredient: 'Lavender Oil', color1: [186, 153, 247] },
    { ingredient: 'Vegetable Oil', color1: [255, 248, 216]},
    { ingredient: 'Sunflower Petal', color1: [255, 204, 0]},
    { ingredient: 'Rose Petal', color1: [230, 0, 0] },
    { ingredient: 'Cardinal Petal', color1: [230, 0, 0]},
    { ingredient: 'Tulip Petal', color1: [230, 92, 0]},
    { ingredient: 'Amaryllis Petal', color1: [230, 0, 92]},
    { ingredient: 'Foxgloves Petal', color1: [184, 46, 138]},
    { ingredient: 'Bellflower Petal', color1: [153, 51, 255]},
    { ingredient: 'clear', color1: [113, 255, 246] }
]

const findColor=(ingredient) =>{
    let string1 = '';
    let stringend = '';
    let wholestring = '';
    let mycolor = {};

    EXTRACTCOLORS.forEach((p)=> {
        if (p.ingredient === ingredient) {
            string1 = 'radial-gradient(circle, rgba('
            stringend = ',0.777)0%, rgba(216, 246, 247, 0.7822479333530288)100%)'
            wholestring = string1.concat(p.color1.join()).concat(stringend);
            mycolor = { background: wholestring };
        }
    });
    return mycolor;
}


const avgColor=(ingredients) =>{
    let matchedColor=[];
    let r=0
    let g=0;
    let b=0;
    let mColor={};

    EXTRACTCOLORS.forEach((p) => {

        if (p.ingredient === ingredients[0].ingredient ){
            r += p.color1[0];
            g+=p.color1[1];
            b+=p.color1[2];
     }

        if ( p.ingredient === ingredients[1].ingredient
            ) {
            r += p.color1[0];
            g += p.color1[1];
            b += p.color1[2];
        }

        if ( p.ingredient === ingredients[2].ingredient) {
            r += p.color1[0];
            g += p.color1[1];
            b += p.color1[2];
        }
    });
    matchedColor = [Math.floor(r / 3), Math.floor(g/ 3), Math.floor(b/3)];
    mColor = { background: `radial-gradient(circle, rgba(${matchedColor.join()} ,0.777)0%, rgba(216, 246, 247, 0.7822479333530288)100%)`}
   return mColor
}


const Vile = (props) => {

    let juiceColor={};
    let juiceColor1 = {};
    let juiceColor2 = {};
    let oil = {};
    let flower={};
    var mixedColor = {}

    if(!props.mixed){
        juiceColor = findColor(props.ingredients[0].ingredient);
        juiceColor1 = findColor(props.ingredients[1].ingredient);
        juiceColor2 = findColor(props.ingredients[2].ingredient);
        oil = findColor(props.ingredients[3].ingredient);
        if (props.ingredients[4].ingredient!=='clear'){
        flower = findColor(props.ingredients[4].ingredient);}
    }else{
        mixedColor=avgColor(props.ingredients);
        juiceColor = mixedColor;
        juiceColor1 = mixedColor;
        juiceColor2 = mixedColor;
        oil = mixedColor;
        flower={display : 'none'}

    }
    return (

        <div className={classes.Content}>
            <div className={classes.VileTop}></div>
            <div className={`${classes.VileUpperTwo} ${classes.Water}`}></div>
            <div className={classes.VileUpperOne} style={oil}></div>
            <div className={classes.VileUpper} style ={juiceColor2}>
                <div className={classes.VileUpperLight}></div>
            </div>
            <div className={classes.VileMiddle} style={juiceColor1}>
                <div className={classes.VileMiddleLight}></div>
            </div>
            <div className={classes.VileBottom} style={juiceColor} >
                <div className={classes.VileBottomLight}>
                    <div className={classes.Flower} style={flower}></div>
                </div>
            </div>
        </div>
    )
        
}


export default Vile;