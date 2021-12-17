import React from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

export default function ShoppingList() {
  return (
    <>
      <AddItem />
      <ItemList />
    </>
  );
}
