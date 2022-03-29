import React, { useState } from 'react';
import Page500 from './Page500';
import ExerciseNew from './ExerciseNew';
import Loading from '../components/Loading';
// import url from '../Config'
import { getDatabase, ref, set } from 'firebase/database';

const state = {
  form: {
    id: '',
    title: '',
    description: '',
    img: '',
    leftColor: '',
    rightColor: '',
    loading: false,
    error: null,
    editing: false,
  },
};
const ExerciseContainer = ({ history }) => {
  const [record, setRecord] = useState(state);
  const handleChange = (e) => {
    setRecord({
      form: {
        ...record.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  // Add data with backed
  // handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         this.setState({
  //             loading: true
  //         })
  //         let conf = {
  //             method: 'POST',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify(this.state.form)
  //         }
  //         let res = await fetch(`${url}/exercises`, conf)
  //         let json = await res.json();

  //         this.setState({
  //             loading: false
  //         })
  //         this.props.history.push('/main')
  //     } catch (error) {
  //         this.setState({
  //             error: error,
  //             loading: false
  //         })
  //     }
  // }
  /*
   *Add item
   */
  const sumbitHandle = async (data, e) => {
    e.preventDefault();
    console.log('data: ', data);
    const db = getDatabase();
    try {
      const { img, leftColor, rightColor, title, description } = data;
      setRecord({
        form: {
          loading: true,
        },
      });
      set(ref(db, 'todos/'), {
        title: title,
        description: description,
        img: img,
        leftColor: leftColor,
        rightColor: rightColor,
      });
      setRecord({
        loading: false,
      });
      history.push('/main');
    } catch (error) {
      setRecord({
        loading: false,
        error,
      });
      console.log('type error: ', error);
    }
  };
  /**
   * Edit user
   */
  const onEditarData = (data, e) => {
    console.log('success', data);
  };

  if (record.loading) return <Loading />;
  if (record.error) return <Page500 />;

  return (
    <ExerciseNew
      editarData={onEditarData}
      // editMode={record.form.editing}
      form={record.form}
      onAdd={sumbitHandle}
      onChange={handleChange}
    />
  );
};

export default ExerciseContainer;
