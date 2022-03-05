import React from 'react';
import './estilos/Card.css';
import circlesImg from '../imagenes/circles.png';
// import { Link } from 'react-router-dom';
const Card = ({
  item,
  id,
  leftColor,
  rightColor,
  img,
  title,
  description,
  eliminar,
  ListMode,
  editData,
  editarData,
}) => (
  <div
    className='card mx-auto Fitness-Card'
    style={{
      backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${
        leftColor || '#56CCF2'
      }  , ${rightColor || '#2F80ED'}) `,
    }}
  >
    <div className='card-body'>
      <div className='row center'>
        <div className='col-6'>
          <img src={img} className='float-right' alt="imagen" />
        </div>
        <div className='col-6 Fitness-Card-Info'>
          {ListMode ? (
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
              <button
                className='btn btn-button btn-danger'
                onClick={() => eliminar(id)}
              >
                Delete
              </button>
              {/* <Link to={`/main/ExerciseContainer${id}`} utilizar con >> useParams()> */}
              <button
                className='btn btn-button btn-success'
                onClick={() => editData(item)}
              >
                Edit
              </button>
              {/* </Link> */}
            </div>
          ) : (
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
