import React, { Component } from 'react';
import Card from './Card';
const CardList = ({ data, eliminar, editData, onChange, currentUser }) => (
  <div>
    {data.map((item) => (
      <div>
        <Card
          onChange={onChange}
          editData={editData}
          item={item}
          ListMode={true}
          eliminar={eliminar}
          key={item.id}
          {...item}
        />
      </div>
    ))}
  </div>
);

export default CardList;
