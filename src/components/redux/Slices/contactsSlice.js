import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      const isDuplicate = state.items.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase() ||
          contact.number === action.payload.number
      );

      if (isDuplicate) {
        alert(
          `${action.payload.name} or the number ${action.payload.number} is already in contacts.`
        );
        return;
      }

      state.items.push(action.payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
