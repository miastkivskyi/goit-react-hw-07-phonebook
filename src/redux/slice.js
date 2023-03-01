import { createSlice } from '@reduxjs/toolkit';
import { initialStateUser } from '../redux/state';
import { fetchContact, addContacts, deleteContacts } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser.contacts,
  extraReducers: {
    [fetchContact.pending](state) {
      state.isLoading = true;
    },
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const UserReducer = userSlice.reducer;
