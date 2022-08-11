import { CATEGORY_ACTION_TYPES } from './action-types';

export const initialState = [
   {
      categoryId: 1,
      categoryName: 'Sport',
      isSelected: true,
      tasks: [
         {
            todoId: 100,
            taskName: 'Отжимания',
            isCompleted: false,
         },
         {
            todoId: 101,
            taskName: 'Бег',
            isCompleted: false,
         },
      ],
   },
];

export default (state = initialState, action) => {
   switch (action.type) {
      case CATEGORY_ACTION_TYPES.ADD__CATEGORY:
         return [
            ...state,
            {
               categoryId: new Date().getTime(),
               categoryName: action.payload,
               tasks: [],
            },
         ];

      case CATEGORY_ACTION_TYPES.DELETE__CATEGORY:
         return [...state.filter((category) => category.categoryId !== action.payload.categoryId)];

      case CATEGORY_ACTION_TYPES.RENAME__CATEGORY: {
         return state.map((category) => {
            if (category.categoryId === action.payload.categoryId) {
               return {
                  ...category,
                  categoryName: action.payload.categoryName,
               };
            }
            return category;
         });
      }

      case CATEGORY_ACTION_TYPES.SHOW__CATEGORY: {
         return state.map((category) => {
            return {
               ...category,
               isSelected: category.categoryId === action.payload.categoryId,
            };
         });
      }

      case CATEGORY_ACTION_TYPES.RENAME__TASK: {
         return state.map((category) => {
            if (category.categoryId === action.payload.categoryId) {
               return {
                  ...category,
                  tasks: category.tasks.map((task) => ({
                     ...task,
                     taskName: task.todoId === action.payload.todoId ? action.payload.taskName : task.taskName,
                  })),
               };
            }
            return category;
         });
      }

      case CATEGORY_ACTION_TYPES.ADD__TASK: {
         return state.map((category) => {
            if (category.categoryId === action.payload.categoryId) {
               return {
                  ...category,
                  tasks: [
                     ...category.tasks,
                     {
                        todoId: new Date().getTime(),
                        taskName: action.payload.taskName,
                        isCompleted: false,
                     },
                  ],
               };
            }
            return category;
         });
      }
      case CATEGORY_ACTION_TYPES.TOGGLE__TASK: {
         return state.map((category) => {
            if (category.categoryId === action.payload.categoryId) {
               return {
                  ...category,
                  tasks: category.tasks.map((task) => ({
                     ...task,
                     isCompleted: task.todoId === action.payload.todoId ? !task.isCompleted : task.isCompleted,
                  })),
               };
            }
            return category;
         });
      }

      case CATEGORY_ACTION_TYPES.DELETE__TASK:
         return state.map((category) => {
            if (category.categoryId === action.payload.categoryId) {
               return {
                  ...category,
                  tasks: category.tasks.filter((todo) => todo.todoId !== action.payload.todoId),
               };
            }
            return category;
         });

      default:
         return state;
   }
};
