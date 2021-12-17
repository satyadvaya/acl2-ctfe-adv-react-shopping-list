import React, { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const nextId = 3;

const initialGroceries = [
  {
    id: 0,
    // food: (
    //   <span role="img" aria-label="hooch">
    //     '🥃'
    //   </span>
    // ),
    food: 'yams',
    done: false,
  },
  {
    id: 1,
    // food: (
    //   <span role="img" aria-label="honey">
    //     '🍯'
    //   </span>
    // ),
    food: 'spams',
    done: false,
  },
  {
    id: 2,
    // food: (
    //   <span role="img" aria-label="havarti">
    //     '🧀'
    //   </span>
    // ),
    food: 'spams',
    done: false,
  },
];

function groceriesReducer(groceries, action) {
  switch (action.type) {
    case 'add': {
      return [...groceries, { id: action.id, food: action.food, done: false }];
    }

    case 'update': {
      return groceries.map((grocery) => {
        if (grocery.id === action.task.id) {
          return action.task;
        }
        return grocery;
      });
    }

    case 'delete': {
      return groceries.filter((grocery) => grocery.id !== action.id);
    }

    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shopping() {
  const [groceries, dispatch] = useReducer(groceriesReducer, initialGroceries);

  const handleAddGrocery = (food) => {
    dispatch({
      type: 'add',
      id: nextId + 1,
      food,
    });
  };

  const handleUpdateGrocery = (task) => {
    dispatch({
      type: 'update',
      task,
    });
  };

  const handleDeleteGrocery = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId,
    });
  };

  return (
    <>
      <h1>Winter Is Coming — Time to Stockpile the Larder!</h1>
      <AddItem onAddGrocery={handleAddGrocery} />
      <ItemList
        groceries={groceries}
        onUpdateGrocery={handleUpdateGrocery}
        onDeleteGrocery={handleDeleteGrocery}
      />
    </>
  );
}
