import React, { Component } from 'react';
export default class ContactBar extends Component {
    
    render(){
        
        return(
            <div className='contacticonbarlarge'>
            <a href="www.instagram.com">
            <img className="instaimage" src= 'https://svgsilh.com/svg_v2/2029113.svg'></img>
            </a>
            <a href="www.facebook.com">
            <img className="faceimage" src= 'https://png.icons8.com/metro/1600/facebook.png'></img>
            </a>
            <a href="#">
            <img className="twitterimage" src= 'https://png.icons8.com/metro/1600/twitter.png'></img>
            </a>
            
            </div>
            );
    }
    
}