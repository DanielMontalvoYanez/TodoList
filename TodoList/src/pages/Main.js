import React, { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import CardList from '../components/CardList';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Page500 from './Page500';
import url from '../Config';
import { ref, onValue } from 'firebase/database';
import db from '../FireBaseConfig';
import buttonImg from '../imagenes/add.png';

const state = {
  data: [],
  currentUser: {
    id: '',
    title: '',
    description: '',
    img: '',
    leftColor: '',
    rightColor: '',
  },
  loading: false,
  error: null,
};
const Main = () => {
  const [record, setRecord] = useState(state);

  const ListenExercises = (callback) => {
    try {
      // const arr = [];
      const TodosRef = ref(db, 'todos');
      return onValue(TodosRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
        // arr.push(data);
        // setRecord({
        //   data: arr,
        //   loading: false,
        // });
      });
    } catch (error) {
      setRecord({
        loading: false,
        error,
      });
      console.log('error:', error);
    }
  };
  useEffect(() => {
    let unsubscribe = ListenExercises((data) => {
      let arr = [];
      arr.push(data);
      setRecord({
        data: arr,
        loading: false,
      });
    });
    return () => unsubscribe && unsubscribe();
  }, []);

  const handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  const onDelete = async (id) => {
    /*try {
      await db.collection('todos').doc(id).delete();
      this.setState({
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }*/
  };
  const editRow = (data) => {
    this.setState({
      currentUser: {
        id: data.id,
        title: data.title,
        description: data.description,
        img: data.img,
        leftColor: data.leftColor,
        rightColor: data.rightColor,
      },
    });
    //update
    // db.collection('todod').doc(id).set({...data,name})
  };
  const update = (id, updateUser) => {
    // this.setState({
    //     data.map(user=>(user.id=id ?updateUser:user))
    // })
  };

  if (record.loading) return <Loading />;
  if (record.error) return <Page500 />;
  return (
    <div>
      <Welcome username='daniel' />
      <CardList
        unpdate={update}
        onChange={handleChange}
        currentUser={record.currentUser}
        editData={editRow}
        eliminar={onDelete}
        data={record.data}
      />
      <Button buttonImg={buttonImg} />
    </div>
  );
};

export default Main;
