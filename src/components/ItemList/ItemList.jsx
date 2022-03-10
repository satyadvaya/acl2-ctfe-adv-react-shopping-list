import React from 'react';
import Item from '../Item/Item';

export default function ItemList({ groceries, handleUpdate, handleDelete }) {
  return (
    <ul>
      {groceries.map((grocery) => (
        <li key={grocery.id}>
          <Item
            grocery={grocery}
            handleUpdateGrocery={handleUpdate}
            handleDeleteGrocery={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
