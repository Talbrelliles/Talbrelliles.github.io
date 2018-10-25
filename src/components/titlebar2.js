import React, { Component } from 'react';
window.onresize = resize;

function resize()
{
 if(document.documentElement.clientWidth >= 1025){
   
   
   
   document.getElementById("header-title").classList.add('left');
   document.getElementById("content-wrapper").classList.remove('tops');
 }else{
   document.getElementById("header-title").classList.remove('left');
   document.getElementById("content-wrapper").classList.add('tops');
 }
}



export default class TitleBartwo extends Component {
  constructor(){
    super()
  
      
      
    
    
    
    
  }
  render(){
     
     // if(window.screen.Width <  4000000000){
   //     const shift = document.getElementById('title-bar-header');
   //      dab = "dab";
        
   //   }else{
   //      dab = "same";
   //      getscreenresolution();
   //   }
         
     
       return(


<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header top">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
 
      <span className="mdl-layout-title" id="header-title">Company Name</span>

      <div className="mdl-layout-spacer"></div>

      <nav className="mdl-navigation mdl-layout--large-screen-only">
     
    
       <a className="mdl-navigation__link" id = "title-bar-header" href="">About Us</a>
        <a className="mdl-navigation__link" href="">Trouble Shooting</a>
        <a className="mdl-navigation__link" href="">Customer Service</a>
        
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer mdl-layout--small-screen-only"> 
   {/* <div className="titledrawerskew"></div>*/}
    <span className="mdl-layout-title">Company Name</span>
    <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">About Us</a>
        <a className="mdl-navigation__link" href="">Trouble Shooting</a>
        <a className="mdl-navigation__link" href="">Customer Service</a>
    </nav>
  </div>
</div>

            
            );
    }
}
