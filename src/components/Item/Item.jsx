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
          value={grocery.food}
          onChange={(event) => {
            handleUpdateGrocery({
              ...grocery,
              food: event.target.value,
            });
          }}
        />

        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    groceryContent = (
      <>
        <p role="img" aria-label={grocery.food}>
          {grocery.food}
        </p>
        <button type="button" onClick={() => setIsEditing(true)}>
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
      />
      {groceryContent}
      <button type="button" onClick={() => handleDeleteGrocery(grocery.id)}>
        Delete
      </button>
    </div>
  );
}
