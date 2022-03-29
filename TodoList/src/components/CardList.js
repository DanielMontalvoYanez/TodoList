import React, { Component } from 'react';
import Card from './Card';
const CardList = ({ data, eliminar, editData, onChange, currentUser }) => (
  <div>
    {data.map((item) => (
      <div key={1}>
        <Card
          onChange={onChange}
          editData={editData}
          item={item}
          ListMode={true}
          eliminar={eliminar}
          {...item}
        />
      </div>
    ))}
  </div>
);

export default CardList;
