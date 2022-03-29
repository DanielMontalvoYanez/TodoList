import React from 'react';
import CardForm from '../components/CardForm';
import Card from '../components/Card';
import '../components/estilos/ExerciseNew.css';
import { Link } from 'react-router-dom';
const ExerciseNew = ({ onAdd, onChange, form, editarData }) => (
  <div className='col-12'>
    <div className='ExerciseNew_Lateral_Spaces row'>
      <Link to='/main'>Go Main</Link>
    </div>
    <div className='ExerciseNew_Lateral_Spaces row'>
      <div className='col-sm ExerciseNew_Card_Space'>
        <Card editarData={editarData} {...form} />
      </div>
      <div className='col-sm ExerciseNew_Form_Space'>
        <CardForm onAdd={onAdd} onChange={onChange} />
      </div>
    </div>
  </div>
);

export default ExerciseNew;
