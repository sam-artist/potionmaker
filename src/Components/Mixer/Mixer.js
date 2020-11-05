import React from 'react';
import classes from '../Mixer/Mixer.module.css'

//show the mix button or not
const showMixButton=(isMixed)=>{
    if(isMixed){
        return classes.HideMixer;
    }else{
        return classes.ShowMixer;
    }
}

//display clear button or display warning
const messages=(isMixed,clicked)=>{
    if(isMixed){
        return <button onClick={clicked} >Clear Potion</button>
    }else{
        return <p className={classes.Bold}>You must select at least 4 ingredients to make a potion</p>
    }

}

//display a not depending on what mixture is made
const WriteNote=(isMixed, taste, myingredients, allingredients)=>{
    let extracts=[];
    myingredients.forEach(element => {
        extracts.push(element.ingredient);
    });
       

    if(isMixed){

        if(taste==='sweet'){
            if(extracts.includes('Spinach Extract')){
                return "Potion of Befriend. You will at least get your crush to notice you";
            }else if(extracts.includes('Lavender Oil')){
                return "Potion of Friend Zone. Give this potion to your crush and you will be friend-zoned. The effects of this potion last for a year"; 
            }else if(extracts.includes('Rosemary Oil')){
                return  "Potion of Falling & Forget. Each day your crush will fall for you then will forget about your existence. The effects of this potion last for 3 weeks";
            }else if(extracts.includes('Vegetable Oil')){  
                return "Potion of Wanting. Your crush will ponder a romantic relationship with you but will never act on those feelings. The effects of this potion last for 4 months"; 
            }else if(extracts.includes('Blended Fish Scales')){
                return "Potion of Favor. Your crush will grow to like you over 3 days. The effects of this potion last for 4 weeks. ";
            }else if(extracts.includes('Blended Salmon Guts')){
                return "Potion of Bloom. Give this potion to your crush and watch your love bloom in a matter of an hour. The effects of this potion last for 1 year.";
            }else if(extracts.includes('Foxgloves Petal')){
                return "Potion of Bloom. Give this potion to your crush and watch your love bloom in a matter of an hour. The effects of this potion last for 1 year.";
            }else if(extracts.includes('Lemon Extract')){
                return "Potion of Royal Charming. Your crush will court you, and treat you like royalty. The effects of this potion last for 2 days";
            }else if(extracts.includes('Cardinal Petal')){
                return "Potion of A Hallmark Movie. The course of your love will follow the cringe-worthy sequence of a Hallmark movie. The effects of this potion will last for 2 months";
            }else if(extracts.includes('Tulip Petal')){
                return "Potion of Falling X2. Your crush will fall for you, but this may lead to an overwhelming obsession. The effects of this potion last for 3 weeks ";
            }else if(extracts.includes('Amaryllis Petal')){
                return "Potion of Casting. Your crush will fall for you and will transform into your celebrity crush. The effects of this potion last for 5 weeks";
            }else if(extracts.includes('Sunflower Petal')){
                return "Potion of Sunshine. Your crush will love you during the day but will hate you during the night. The effects of this potion last for 8 weeks";
            }else if(extracts.includes('Rose Petal')){
                return "Potion of Friend Zone. Give this potion to your crush and you will be friend-zoned. The effects of this potion last for a year"; 
            }else if(extracts.includes('Bellflower Petal')){
                return "Potion of Royal Charming. Your crush will court you, and treat you like royalty. The effects of this potion last for 2 days";
            }else if(extracts.includes('Castor Oi')){
                return  "Potion of the Dove. Your crush will fall for you the next time they see a dove";
            }else if(extracts.includes('Sunflower Oil')){
                return  "Potion of Sunshine X2. Your crush will love your during the day, but every other day. The effects of this potion last for 3 days. ";
            }else if(extracts.includes('Canola Oil')){
                return "Potion of the Raven. Your crush will fall for you the next time they see a raven. The effects of this potion last for 2 years";
            }else{
                return "Hmm...try again you might be onto something powerful!";
            }
        }else if(taste==='salty'){
            
            if(extracts.includes('Mango Extract')){
                return "Potion of like. Your crush will love and hate you. The effects of this potion lasts for 2 weeks";
            }else if(extracts.includes('Water Melon Extract')){
                return "Potion of likeness. Your potion will like you but when they look at you they see the face of their celebrity crush. The effects of this potion last for 2 months"; 
            }else if(extracts.includes('Orange Extract')){
                return  "Potion of Teleportation. Your crush will be teleported far away from you if you get too close. The effects of this potion last for 2 days "; 
            }else if(extracts.includes('Coconut Oil')){  
                return  "Potion of Feline X 1/2. Your crush will be transformed into a hybrid of a human and cat. The effects of this potion last for 3 weeks"; 
            }else if('Spinach Extract'){
                return  "Potion of Petty. Your crush will perform petty spiteful actions towards you. The effects of this potion last for 2 weeks."; 
            }else if(extracts.includes('Lavender Oil')){  
                return  "Potion of Spite. Your crush will"; 
            }else if(extracts.includes('Sunflower Oil')){  
                return  "Potion of Shade. Your crush will make snarky comments toward you. The effects of this potion will last 1 day"; 
            }else if(extracts.includes('Rose Petal')){  
                return  "Potion of Photosynthesis. Your crush will become vegan. The effects of this potion lasts 1 year."; 
            }else if(extracts.includes('Sunflower Petal')){  
                return  "Potion of Sunbeam. Your crush will become vegetarian. The effects of this potion lasts 2 year."; 
            }else if(extracts.includes('Cardinal Petal')){  
            return  "Potion of Rebound X3. Give this to your crush and they will become your worst enemy. The effects of this potion last for  5 months"; 
            }
            else if(extracts.includes('Lemon Extract')){
                return  "Potion of Rebound X2. Give this to your crush and they will become your enemy. The effects of this potion last for  3 weeks"; 
            }
            else if(extracts.includes( 'Tulip Petal')){  
                return  "Potion of Feline. Your crush will become a cat. The effects of this potion last for 2 days"; 
            }
            else if(extracts.includes('Amaryllis Petal')){  
                return  "Potion of Feline X2. Your crush will become a cat. The effects of this potion last for 2 weeks"; 
            }
            else if(extracts.includes( 'Bellflower Petal')){  
                return  "Potion of Rebound. Give this crush and they will be come your enemy. The effects of this potion last for 1 day"; 
            }
            else if(extracts.includes( 'Castor Oil')){  
                return "Potion of the Hero. Your crush will save and fall for you if you are in inauspicious circumstances. ";
            }
            else if(extracts.includes( 'Canola Oil')){  
                return "Potion of the Raven. Your crush will fall for you the next time they see a raven. The effects of this potion last for 2 years";
            }
            else{
                return "Hmm...try again you might be onto something powerful!";
            }

        } else if (taste === 'bitter') {
            if(extracts.includes('Mango Extract')){
                return "Potion of the Full Moon. Your crush will fall for you on the next full moon. The effects of this potion lasts for 6 weeks";
            }else if(extracts.includes('Watermelon Extract')){
                return "Potion of Frost. Your crush will be frozen in a block of ice. The effects of this potion lasts for 6 weeks"; 
            }else if(extracts.includes('Orange Extract')){
                return  "Potion of Canine. Your crush will transform into a dog. The effects of this potion last for 20 days."; 
            }else if(extracts.includes('Coconut Oil')){  
                return "Potion of Feline. Your crush will become a cat. The effects of this potion last for 2 days"; 
            }else if(extracts.includes('Rosemary Oil')){ 
                return "Potion of Frost. Your crush will be frozen in a block of ice. The effects of this potion lasts for 6 weeks"; 

            }else if(extracts.includes('Vegetable Oil')){ 
                return "Potion of Feline. Your crush will become a cat. The effects of this potion last for 2 days"; 

            }else if(extracts.includes('Blended Fish Scales')){ 
                return "Potion of Rebound. Give this crush and they will be come your enemy. The effects of this potion last for 1 day"; 

            }else if(extracts.includes('Blended Salmon Guts')){ 
                return "Potion of Scales. Your crush will be transformed into a fish. The effects of this potion lasts for 6 weeks"; 
            }else if(extracts.includes( 'Foxgloves Petal')){ 

            }else if(extracts.includes('Lemon Extract' )){ 
                return "Potion of Rebound. Give this crush and they will be come your enemy. The effects of this potion last for 1 day"; 
            }else if(extracts.includes('Tulip Petal' )){ 
                return  "Potion of Canine. Your crush will transform into a dog. The effects of this potion last for 1 week."; 
            }else if(extracts.includes('Amaryllis Petal')){ 
                return  "Potion of Canine X2. Your crush will transform into a dog. The effects of this potion last for 1 month."; 
            }else if(extracts.includes('Bellflower Petal')){ 
                return "Potion of Photosynthesis. Your crush will become vegan. The effects of this potion lasts 1 year."; 

            }else if(extracts.includes('Castor Oil')){ 
                return "Potion of the Sparrow. Your crush will fall for you the next time they see a sparrow. The effects of this potion last for 2 years";
            }else if(extracts.includes('Canola Oil')){ 
                    
            }else{
                return "Hmm...try again you might be onto something powerful!";
            }
            
        } else if (taste === 'sour') {
            if(extracts.includes('Mango Extract')){
                return "Potion of Destruction. Your crush will seek to destroy all of your personal property";
            }else if(extracts.includes('Water Melon Extract')){
                return "Potion of the Sparrow. Your crush will fall for you the next time they see a sparrow. The effects of this potion last for 2 years";
            }else if(extracts.includes('Orange Extract')){
                return "Potion of Frost. Your crush will be frozen in a block of ice. The effects of this potion lasts for 6 weeks"; 
            }else if(extracts.includes('Coconut Oil')){  
                return  "Potion of Amphibia. Your crush will be transformed into a frog"; 
            }
            else if(extracts.includes('Spinach Extract')){
                return "Potion of Rebound. Give this crush and they will be come your enemy. The effects of this potion last for 1 day"; 
            }else if(extracts.includes('Lavender Oil')){
                return "Potion of Feline. Your crush will become a cat. The effects of this potion last for 2 days"; 
            }else if(extracts.includes('Sunflower Oil')){
                return "Potion of Photosynthesis. Your crush will become vegan. The effects of this potion lasts 1 year."; 
            }else if(extracts.includes('Rose Petal')){
                return "Potion of Favor. Your crush will grow to like you over 3 days. The effects of this potion last for 4 weeks. ";
            }else if(extracts.includes('Sunflower Petal')){
                return "Potion of the Hero. Your crush will save and fall for you if you are in inauspicious circumstances. ";
            }else if(extracts.includes('Cardinal Petal')){
                return "Potion of Amphibia. Your crush will be transformed into a frog"; 
            }else if(extracts.includes('Rosemary Oil')){
                return "Potion of Amphibia. Your crush will be transformed into a frog"; 
            }else if(extracts.includes('Vegetable Oil')){
                return "Potion of the Hero. Your crush will save and fall for you if you are in inauspicious circumstances. ";
            }else if(extracts.includes('Blended Fish Scales')){
                return "Potion of Romeo and Juliet. Your crush will be lovesick for you but this might not be a good thing...The effects of this potion last, well, permanently!"; 
            }else if(extracts.includes('Blended Salmon Guts')){
                return 'Potion of Rage X2. Your crush will go on a destructive rampage. The effects of this potion last for 5 days'
            }else if(extracts.includes('Foxgloves Petal' )){   
                return "Potion of the Black Rose. Your crush will fall for you tremendously, but will die immediately afterward…";
            }else if(extracts.includes('Castor Oil')){
                return "Potion of the Sparrow. Your crush will fall for you the next time they see a sparrow. The effects of this potion last for 2 years";
            }else if(extracts.includes('Canola Oil')){
                return "Potion of the Sparrow. Your crush will fall for you the next time they see a sparrow. The effects of this potion last for 2 years";
            }else{
                return "Hmm...try again you might be onto something powerful!";
            }
        }else{
            return '"Hmm...try again you might be onto something powerful!"'
        }


    }else{
        return 'Build Your Potion';
    }
    
}



const mixer=(props) => (
    //Mixer & note screen
    <div className={classes.MixerContent}>
        <div className={classes.InnerContent}>
        <button className={showMixButton(props.mixed)} onClick={props.clicked} >Mix Your Potion</button>
    <div className={classes.Bold}>

        <p ><span className={classes.Bold}>Ingredients: </span>{props.myingredient[0].ingredient} + {props.myingredient[1].ingredient}
        + {props.myingredient[2].ingredient} + {props.myingredient[3].ingredient} + {props.myingredient[4].ingredient}</p>
    
        <p><span className={classes.Bold}>Taste: </span>{props.taste}</p>
        <br></br>

        <p className={classes.Bold}>{WriteNote(props.mixed, props.taste, props.myingredient, props.allingredients)}</p>
        
        <br></br>
        <br></br>
        {messages(props.mixed, props.clear)}
    </div>
        </div>
    </div>

)



export default mixer;