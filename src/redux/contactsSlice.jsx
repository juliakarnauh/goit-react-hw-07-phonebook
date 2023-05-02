const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchContacts,
  fetchContact,
  deleteContact,
  addContact,
} = require('./contactsOperations.jsx');

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
        state.filter = action.payload;
      }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = {
          ...state.contacts,
          isLoading: false,
          error: null,
          items: action.payload,
        };
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.contacts = {
          ...state.contacts,
          isLoading: false,
          error: null,
          items: action.payload,
        };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = {
          ...state.contacts,
          isLoading: false,
          error: null,
          items: state.contacts.items.filter(
            user => user.id !== action.payload
          ),
        };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        })

      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.contacts = {
            ...state.contacts,
            isLoading: true,
          };
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action) => {
          state.contacts = {
            ...state.contacts,
            isLoading: false,
            error: action.payload,
          };
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
