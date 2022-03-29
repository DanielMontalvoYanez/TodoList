import React from 'react';
import { useForm } from 'react-hook-form';

const CardForm = ({ onAdd, onChange, currentUser }) => {
  const { setValue, register, errors, handleSubmit } = useForm({
    defaultValues: currentUser,
  });

  const onSubmit = (data, e) => {
    onAdd(data, e);
    // data.id=currentUser.id
    // update(currentUser.id,data)
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='title'
            name='title'
            ref={register({
              required: { value: true, message: 'campo reqerido' },
            })}
            onChange={onChange}
            // value={form.title}
          />
          <span>{errors?.title?.message}</span>
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='description'
            name='description'
            ref={register({
              required: { value: true, message: 'campo requerido' },
            })}
            onChange={onChange}
            // value={form.description}
          />
          <span>{errors?.description?.message}</span>
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='img'
            name='img'
            ref={register({
              required: { value: true, message: 'campo requerido' },
            })}
            onChange={onChange}
            // value={form.img}
          />
          <span>{errors?.img?.message}</span>
        </div>
        <div className='form-row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='leftColor'
              name='leftColor'
              ref={register({
                required: { value: true, message: 'campo requerido' },
              })}
              onChange={onChange}
              // value={form.leftColor}
            />
            <span>{errors?.leftColor?.message}</span>
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='rightColor'
              name='rightColor'
              ref={register({
                required: { value: true, message: 'campo requerido' },
              })}
              onChange={onChange}
              // value={form.rightColor}
            />
            {errors?.rightColor?.message}
          </div>
        </div>
        <br></br>
        <button type='submit' className='btn btn-primary float-right'>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default CardForm;
