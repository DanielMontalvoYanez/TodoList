import React from 'react';
import ErrorServer from '../imagenes/ErrorServer.png';
const Page500 = () => (
  <div className='text-center'>
    <h1> Error Server page 500!</h1>
    <img width={900} height={620} src={ErrorServer} />
  </div>
);
export default Page500;
