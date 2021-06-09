import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory}) => {
    return (
        <div className="text-4xl text-blue-400 flex mt-12 mx-16 justify-center border-4 border-light-blue-500 border-opacity-25">
            { categories.map(i => (
                <div className="p-4 m-4 opacity-50 hover:opacity-100" key={i.id} onClick={() => onSelectCategory(i.id)}>
                    { i.title }
                </div>
            )) }
        </div>
    )
};

export default CategoryFilter;
