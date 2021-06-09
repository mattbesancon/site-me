import React from 'react';

const CategoryTitle = ({categories, selectedCategory}) => {
  const currentCategory = categories
    .filter(i => i.id === selectedCategory.id)
    .map(i => (
      <div className="pl-0" key={i.id}>
        { i.title }
      </div>
    ));
  return (
    <div className="text-2xl mt-12 mx-16 flex justify-center">
      { currentCategory }
    </div>
  );
};

export default CategoryTitle;
