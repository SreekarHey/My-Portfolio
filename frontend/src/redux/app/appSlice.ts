import { createSlice } from '@reduxjs/toolkit';
import { LoginStates } from '../../shared/helpers/types';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loginState: LoginStates.LOADING,
  },
  reducers: {
    updatedLoginState(state, action) {
      return {
        ...state,
        loginState: action.payload,
      };
    },
  },
});

export const { updatedLoginState } = appSlice.actions;

export default appSlice.reducer;
