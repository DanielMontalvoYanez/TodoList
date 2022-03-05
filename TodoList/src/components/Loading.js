import React from 'react';
import './estilos/Loading.css'
const Loading = () => (
  <div className='loader'>
    <div className='lds-ripple'>
      <div></div>
      <div></div>
    </div>
  </div>
);
export default Loading