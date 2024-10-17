import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: 'Aleena Mehr',
    email: 'aleena732@gmail.com',
    id: 1
  },
  {
    name: 'Abdulla Khan',
    email: 'abdullahkhan320@gmail.com',
    id: 2
  },
  {
    name: 'Faiz Ali',
    email: 'faizali64@gmail.com',
    id: 3
  },
]

const userSlice = createSlice({
  name:'users',
  initialState,
  reducers:{
    addUser: (state, action) => {
      state.push(action.payload);
    }
  }
})


export const {addUser} = userSlice.actions
export default userSlice.reducer