import React, { Component } from 'react';

import CategoryTitle from './components/CategoryTitle';
import CategoryFilter from './components/CategoryFilter';
import ItemList from './components/ItemList';

class App extends Component {

  constructor () {
    super();

    this.state = {
      categories: [
        { title: 'Tech', id: 0 },
        { title: 'Maths', id: 1 },
        { title: 'Philo', id: 2 },
        { title: 'Eco', id: 3 },
        { title: 'Culture', id: 4 },
        { title: 'Fun', id: 5 }
      ],
      items: [
        { title: 'Intro à Linux', id: 0, category: { id: 0 } },
        { title: 'Classement anime', id: 1, category: { id: 5 } },
        { title: 'Conjecture de Riemann', id: 2, category: { id: 1 } },
        { title: 'La pensée de Sartre', id: 3, category: { id: 2 } },
        { title: 'Le capital au XXIème siècle', id: 4, category: { id: 3 } },
        { title: 'Etudes sociologiques Covid 19 en France', id: 5, category: { id: 4 } }
      ],
      selectedCategoryId: null
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
  }

  onSelectCategory(id) {
    this.setState({
      selectedCategoryId: id
    });
  }

  render() {
    const _ = require('lodash');
    const { categories, items, selectedCategoryId } = this.state;
    const defaultCategory = _.first(categories);
    const selectedCategory = _.find(categories, i => i.id === selectedCategoryId) || defaultCategory;    
    return (
      <div>
        <CategoryTitle categories={categories} selectedCategory={selectedCategory} />
        <CategoryFilter categories={categories} onSelectCategory={this.onSelectCategory} />
        <ItemList items={items} selectedCategory={selectedCategory} />
      </div>
    );
  }
}

export default App;
