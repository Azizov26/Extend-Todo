import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Task.module.scss';

export const Tasks = ({ onSubmit, categoryId }) => {
   const [taskName, setTask] = useState('');

   const handleOnChange = ({ target }) => setTask(target.value);
   const handleOnSubmit = (event) => {
      event.preventDefault();

      if (!taskName) return;
      onSubmit({ taskName, categoryId });
      setTask('');
   };

   return (
      <form className={styles.content} onSubmit={handleOnSubmit}>
         <input
            placeholder="Tasks..."
            className={styles.content__input}
            type="text"
            value={taskName}
            onChange={handleOnChange}
         />
         <button className={styles.content__button} type="button" onClick={handleOnSubmit}>
            Add
         </button>
      </form>
   );
};

Tasks.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   categoryId: PropTypes.number,
};
