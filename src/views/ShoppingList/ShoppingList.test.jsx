import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingList from './ShoppingList';

beforeEach(() => {
  render(<ShoppingList />);
});

it('should render an initial list of shopping items', () => {
  const hooch = screen.getByText(/Hooch/i);
  const honey = screen.getByText(/Honey/i);
  const havarti = screen.getByText(/Havarti/i);

  expect(hooch).toBeInTheDocument();
  expect(honey).toBeInTheDocument();
  expect(havarti).toBeInTheDocument();
});

it('should add a new item to the list', () => {
  const input = screen.getByPlaceholderText('Enter Grocery Here');
  const button = screen.getByRole('img', { name: 'cart' });

  userEvent.type(input, 'Hooha');
  userEvent.click(button);

  const item = screen.getByText('Hooha');

  expect(item).toBeInTheDocument();
});

it('should edit an item in the list', () => {
  const editButton = screen.getByRole('button', {
    name: 'edit Hooch 🥃 button',
  });

  userEvent.click(editButton);

  const editInput = screen.getByRole('textbox', {
    name: 'edit Hooch 🥃 input',
  });
  const saveButton = screen.getByRole('button', {
    name: 'save Hooch 🥃 button',
  });

  userEvent.type(editInput, ' mondo-size');
  userEvent.click(saveButton);

  const updatedInput = screen.getByText('Hooch 🥃 mondo-size');

  expect(updatedInput).toBeInTheDocument();
});

it('should delete an item in the list', () => {
  const hooch = screen.getByText(/Hooch/i);
  const deleteButton = screen.getByRole('button', {
    name: 'delete Hooch 🥃 button',
  });

  userEvent.click(deleteButton);

  expect(hooch).not.toBeInTheDocument();
});
