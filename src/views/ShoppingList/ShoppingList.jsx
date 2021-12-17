import React from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

function groceriesReducer(groceries, action) {
  switch (action.type) {
    case 'added': {
      return [...groceries, { id: action.id, food: action.food, done: false }];
    }
    case 'updated': {
      return groceries.map((grocery) => {
        if (grocery.id === action.task.id) {
          return action.task;
        }
        return grocery;
      });
    }
    case 'deleted': {
      return groceries.filter((grocery) => grocery.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function ShoppingList() {
  return (
    <>
      <AddItem />
      <ItemList />
    </>
  );
}
