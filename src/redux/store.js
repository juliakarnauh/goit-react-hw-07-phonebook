const { configureStore } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./contactsSlice');

export const store = configureStore({
  reducer: contactsReducer,
});