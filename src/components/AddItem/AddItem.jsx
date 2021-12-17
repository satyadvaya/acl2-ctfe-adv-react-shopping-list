import React from 'react';

export default function AddItem({ onAddGrocery }) {
  const [food, setFood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFood('');
    onAddGrocery(food);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Grocery Here"
        value={food}
        onChange={(event) => setFood(event.target.value)}
      />
      <button type="submit">
        Add to List{' '}
        <span role="img" aria-label="cart">
          🛒
        </span>
      </button>
    </form>
  );
}
