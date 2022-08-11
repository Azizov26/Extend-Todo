import React from 'react';
import PropTypes from 'prop-types';

import { TaskItem } from '../TaskItem/TaskItem';

import styles from './TaskList.module.scss';

export const TaskList = (props) => {
   return (
      <div className={styles.content}>
         <div className={styles.content__categoryName}> Category: {props.categoryName}</div>
         {props.tasks.map(({ taskName, todoId }) => (
            <TaskItem categoryId={props.categoryId} taskName={taskName} key={todoId} todoId={todoId} />
         ))}
      </div>
   );
};

TaskList.propTypes = {
   categoryId: PropTypes.number,
   todoId: PropTypes.number,
   taskName: PropTypes.string,
};
