import React, { useState } from 'react';

export default function Item({
  grocery,
  handleUpdateGrocery,
  handleDeleteGrocery,
}) {
  console.log(typeof grocery.food);
  const [isEditing, setIsEditing] = useState(false);
  let groceryContent;
  if (isEditing) {
    groceryContent = (
      <>
        <input
          type="text"
          value={grocery.food}
          aria-label={`edit ${grocery.food} input`}
          onChange={(event) => {
            handleUpdateGrocery({
              ...grocery,
              food: event.target.value,
            });
          }}
        />
        <button
          type="button"
          aria-label={`save ${grocery.food} button`}
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    groceryContent = (
      <>
        <span
          style={{ textDecoration: grocery.done ? 'line-through' : null }}
          role="img"
          aria-label={grocery.food}
        >
          {grocery.food}
        </span>{' '}
        <button
          type="button"
          aria-label={`edit ${grocery.food} button`}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={grocery.done}
        onChange={(event) => {
          handleUpdateGrocery({
            ...grocery,
            done: event.target.checked,
          });
        }}
      />{' '}
      {groceryContent}{' '}
      <button
        type="button"
        aria-label={`delete ${grocery.food} button`}
        onClick={() => handleDeleteGrocery(grocery.id)}
      >
        Delete
      </button>
    </div>
  );
}
