import React from 'react';
import { Link } from 'react-router-dom';
import ErrorNotFound from '../imagenes/ErrorNotFound.png';
const NotFound = () => (
  <div className='text-center'>
    <Link to='/main'>Go back</Link>
    <div className='text-center col-12'>
      <img width={900} height={620} src={ErrorNotFound} />
    </div>
  </div>
);

export default NotFound;
