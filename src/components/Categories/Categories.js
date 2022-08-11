import React from 'react';
import PropTypes from 'prop-types';

import { CategoryItem } from '../CategoryItem/CategoryItem';

import styles from './Categories.module.scss';

export const Categories = ({ categories }) => {
   return (
      <div className={styles.categories}>
         {categories.map((category) => (
            <CategoryItem key={category.categoryId} {...category} />
         ))}
      </div>
   );
};

Categories.propTypes = {
   categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
