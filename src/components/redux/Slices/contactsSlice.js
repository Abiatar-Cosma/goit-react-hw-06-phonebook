import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { items: [] }, // Starea inițială este un obiect cu un array `items`
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
      deleteContact: (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      },
    },
  });
  
  export const { addContact, deleteContact } = contactsSlice.actions;
  export default contactsSlice.reducer;