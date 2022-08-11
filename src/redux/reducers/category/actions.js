import { CATEGORY_ACTION_TYPES } from './action-types';

export const CATEGORY__ACTIONS = Object.freeze({
   addCategory: (categoryName) => ({
      type: CATEGORY_ACTION_TYPES.ADD__CATEGORY,
      payload: categoryName,
   }),

   deleteCategory: (categoryId) => ({
      type: CATEGORY_ACTION_TYPES.DELETE__CATEGORY,
      payload: categoryId,
   }),

   renameCategory: ({ categoryName, categoryId }) => ({
      type: CATEGORY_ACTION_TYPES.RENAME__CATEGORY,
      payload: {
         categoryName,
         categoryId,
      },
   }),

   showCategory: ({ categoryName, categoryId, isSelected }) => ({
      type: CATEGORY_ACTION_TYPES.SHOW__CATEGORY,
      payload: {
         categoryName,
         categoryId,
         isSelected,
      },
   }),

   addTask: ({ taskName, categoryId }) => ({
      type: CATEGORY_ACTION_TYPES.ADD__TASK,
      payload: {
         taskName,
         categoryId,
      },
   }),

   renameTask: ({ categoryId, todoId, taskName }) => ({
      type: CATEGORY_ACTION_TYPES.RENAME__TASK,
      payload: {
         categoryId,
         todoId,
         taskName,
      },
   }),

   toggleTask: ({ categoryId, todoId }) => ({
      type: CATEGORY_ACTION_TYPES.TOGGLE__TASK,
      payload: {
         categoryId,
         todoId,
      },
   }),

   deleteTask: ({ categoryId, todoId }) => ({
      type: CATEGORY_ACTION_TYPES.DELETE__TASK,
      payload: {
         categoryId,
         todoId,
      },
   }),
});
