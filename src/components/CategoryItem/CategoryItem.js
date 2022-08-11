import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { HiOutlineCheckCircle } from 'react-icons/hi';

import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';

import styles from './CategoryItem.module.scss';

export const CategoryItem = ({ categoryId, categoryName }) => {
   const dispatch = useDispatch();
   const [isEdited, setIsEdited] = useState(false);
   const [inputValue, setInputValue] = useState(categoryName);

   const onChange = (e) => setInputValue(e.target.value);
   const onRename = () => {
      dispatch(CATEGORY__ACTIONS.renameCategory({ categoryId, categoryName: inputValue }));
      setIsEdited(false);
   };
   const onDelete = () => dispatch(CATEGORY__ACTIONS.deleteCategory({ categoryId }));
   const onShow = () => dispatch(CATEGORY__ACTIONS.showCategory({ categoryId }));

   return (
      <div onClick={onShow} key={categoryName} className={styles.category}>
         <div className={styles.category__title}>
            {isEdited ? (
               <Fragment>
                  <input value={inputValue} onChange={onChange} />
                  <button className={styles.category__button} onClick={onRename}>
                     {' '}
                     <HiOutlineCheckCircle />{' '}
                  </button>
               </Fragment>
            ) : (
               <Fragment>
                  <span>{categoryName}</span>
                  <button className={styles.category__button} onClick={() => setIsEdited(true)}>
                     <BiEdit />
                  </button>
               </Fragment>
            )}
         </div>
         <button className={styles.category__button} type="button" onClick={onDelete}>
            <BsTrash />
         </button>
      </div>
   );
};

CategoryItem.prototype = {
   categoryId: PropTypes.number.isRequired,
   categoryName: PropTypes.string.isRequired,
};
