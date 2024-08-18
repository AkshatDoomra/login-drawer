import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface CounterState {
  log:{email:String,password:String}
}

// Define the initial state using that type
const initialState: CounterState = {
  log:{email:"",password:""}
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login:(state,action:PayloadAction<CounterState["log"]>)=>{
      
        state.log=action.payload
        //console.log(state.log)

    }
   
  }
})

export const { login } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.log

export default counterSlice.reducer