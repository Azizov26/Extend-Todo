import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './CategoryForm.module.scss';

export const CategoryForm = ({ onSubmit }) => {
   const [categoryName, setCategoryName] = useState('');

   const handleOnChange = ({ target }) => setCategoryName(target.value);
   const handleOnSubmit = (event) => {
      event.preventDefault();

      if (categoryName !== '') {
         onSubmit(categoryName);
         setCategoryName('');
      }
   };

   return (
      <form onSubmit={handleOnSubmit}>
         <div className={styles.content}>
            <input
               placeholder="Categories..."
               className={styles.content__input}
               type="text"
               value={categoryName}
               onChange={handleOnChange}
            />
            <button className={styles.content__button} type="submit" onClick={handleOnSubmit}>
               Add
            </button>
         </div>
      </form>
   );
};

CategoryForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
};
