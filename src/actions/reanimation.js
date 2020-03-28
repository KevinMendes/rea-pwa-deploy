export const SET_CATEGORY = 'SET_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const SET_HOURS = 'SET_HOURS';

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  category,
});

export const setHours = (date) => ({
  type: SET_HOURS,
  date,
});
