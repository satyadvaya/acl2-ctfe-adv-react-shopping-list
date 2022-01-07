import React, { useState } from 'react';

export default function AddItem({ handleAdd }) {
  const [food, setFood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFood('');
    handleAdd(food);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Grocery Here"
        value={food}
        onChange={(event) => setFood(event.target.value)}
      />{' '}
      <button type="submit">
        Add to List{' '}
        <span role="img" aria-label="cart">
          🛒
        </span>
      </button>
    </form>
  );
}
