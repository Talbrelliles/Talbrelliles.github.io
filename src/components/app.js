import React, { Component } from 'react';
import TitleBartwo from './titlebar2';
import ContentWrapper from './content/contentwrapper';
import ContactBar from './contactbar';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <TitleBartwo/>
     
      <ContentWrapper/>
       <div className='skew'>
</div>
<div className='skewtwo'>
</div>
   <ContactBar/>
      </div>
    );
  }
}
