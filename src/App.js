import React, { Component } from 'react';
import PotionBuilder from './PotionBuilder/PotionBuilder';
// import {ReactComponent as Vile } from './Vile.svg'

class App extends  Component{
  render(){
    return (
      <div>
        <PotionBuilder></PotionBuilder>
      </div>
    );
  }
}

export default App;
