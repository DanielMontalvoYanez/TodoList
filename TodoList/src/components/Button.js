import React from 'react';
import './estilos/Button.css'
import { Link } from 'react-router-dom';
const Button = ({buttonImg}) => (
    <Link to="/main/ExerciseContainer">
        <img src={buttonImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default Button;