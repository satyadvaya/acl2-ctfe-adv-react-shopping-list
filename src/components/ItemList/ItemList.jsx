import React from 'react';
import Item from '../Item/Item';

export default function ItemList({
  groceries,
  onUpdateGrocery,
  onDeleteGrocery,
}) {
  return (
    <ul>
      {groceries.map((grocery) => (
        <li key={grocery.id}>
          <Item
            grocery={grocery}
            onUpdate={onUpdateGrocery}
            onDelete={onDeleteGrocery}
          />
        </li>
      ))}
    </ul>
  );
}
