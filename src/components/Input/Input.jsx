import React, { useState } from 'react';

const Input = () => {

  const [itemData, setItemData] = useState('');

  const changeData = (event) => {
    setItemData(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    alert(itemData);
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" value={itemData} onChange={changeData} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
};

export default Input;