import React from 'react';

const ItemList = ({items, selectedCategory}) => {
  const currentItems = items
    .filter(i => i.category.id === selectedCategory.id)
    .map(i => (
      <div className="pl-0" key={i.id}>
        { i.title }
      </div>
    ));
  return (
    <div className="text-2xl mt-16 mx-16 flex justify-center">
      { currentItems }
    </div>
  );
};

export default ItemList;
