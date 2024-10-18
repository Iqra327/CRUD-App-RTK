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
    },
    updateUser: (state, action) => {
      const {id, name, email } = action.payload;
      // const userIndex = state.findIndex(user => user.id === id); 
      // if (userIndex !== -1) {
      //   // Use state[userIndex] for update to ensure immutability is handled
      //   state[userIndex] = { ...state[userIndex], name, email };
      // }
      const userUpdate = state.find(user => user.id === id);
      if(userUpdate){
        userUpdate.name = name;
        userUpdate.email = email;
      }
    },
    deleteUser: (state, action) => {
      const {id} = action.payload;
      const userDelete = state.find(user => user.id === id);
      if(userDelete){
        return state.filter(user => user.id !== id);
      }
    }
  }
})


export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer