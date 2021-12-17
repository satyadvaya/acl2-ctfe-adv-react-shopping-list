import React, { useState } from 'react';

export default function Item({ grocery, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let groceryContent;
  if (isEditing) {
    groceryContent = (
      <>
        <input
          value={grocery.food}
          onChange={(event) => {
            onUpdate({
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
          onUpdate({
            ...grocery,
            done: event.target.checked,
          });
        }}
      />
      {groceryContent}
      <button type="button" onClick={() => onDelete(grocery.id)}>
        Delete
      </button>
    </div>
  );
}
