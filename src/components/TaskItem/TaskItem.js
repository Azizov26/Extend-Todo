import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';
import PropTypes from 'prop-types';

import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { HiOutlineCheckCircle } from 'react-icons/hi';

import styles from './TaskItem.module.scss';

export const TaskItem = ({ categoryId, taskName, todoId }) => {
   const dispatch = useDispatch();
   const [isEdited, setIsEdited] = useState(false);
   const [inputValue, setInputValue] = useState(taskName);

   const onChange = (e) => setInputValue(e.target.value);
   const onDelete = () => dispatch(CATEGORY__ACTIONS.deleteTask({ categoryId, todoId }));
   const onToggle = () => dispatch(CATEGORY__ACTIONS.toggleTask({ categoryId, todoId }));
   const onRename = () => {
      dispatch(
         CATEGORY__ACTIONS.renameTask({
            categoryId,
            todoId,
            taskName: inputValue,
         }),
      );
      setIsEdited(false);
   };

   return (
      <div className={styles.task}>
         <div className={styles.task__title}>
            {isEdited ? (
               <Fragment>
                  <input value={inputValue} onChange={onChange} />
                  <button className={styles.task__button} onClick={onRename}>
                     <HiOutlineCheckCircle />{' '}
                  </button>
               </Fragment>
            ) : (
               <Fragment>
                  <span>
                     <input
                        onClick={onToggle}
                        className={styles.task__checkbox}
                        type="checkbox"
                        id="tasks"
                        name="tasks"
                        value="taskName"
                     />
                     <label>{taskName}</label>
                  </span>
                  <button className={styles.task__button} onClick={() => setIsEdited(true)}>
                     <BiEdit />
                  </button>
               </Fragment>
            )}
         </div>
         <button className={styles.task__button} type="button" onClick={onDelete}>
            <BsTrash />
         </button>
      </div>
   );
};

TaskItem.propTypes = {
   taskName: PropTypes.string.isRequired,
   todoId: PropTypes.number.isRequired,
};
