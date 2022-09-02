import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) =>
    categoriesSlice.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
 