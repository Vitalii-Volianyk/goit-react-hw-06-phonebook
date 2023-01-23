import { createSlice } from '@reduxjs/toolkit';
const DefaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: DefaultContacts },
  reducers: {
    addContacts(state, action) {
      state.items.unshift(action.payload);
    },
    removeContacts(state, action) {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { setContacts, addContacts, removeContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
