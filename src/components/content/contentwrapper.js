import React, { Component } from 'react';
import Content from './content2';
export default class ContentWrapper extends Component{
  render() {
    return (
      <div className='contentwrapper' id="content-wrapper">
      <Content/>
      </div>
    );
  }
}