
/*

import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const incrementByAmount = createAction('incrementByAmount')
export const decrementByAmount = createAction('decrementByAmount')


    



const initialState = {
    value: 0
}
*/
// create reducer


// 1. using building notation
/*

export const counterSlice = createReducer(initialState, builder=>{
     builder
    .addCase(increment, (state, action) => {
       state.value++
    });
    builder
    .addCase(decrement, (state, action) => {
       state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
    .addCase(decrementByAmount, (state, action) => {
      state.value -= action.payload
    })
})
*/

/*

//2. Map notation


export const counterSlice = createReducer(initialState, {
  [increment]: (state, action)=>{
    state.value ++

  },
  [decrement]: (state, action)=>{
    state.value --

  },
  [incrementByAmount]: (state, action)=>{
    state.value += action.payload

  },
  [decrementByAmount]: (state, action)=>{
    state.value -= action.payload

  }

})

*/
/*

import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: 0 }


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    decrementByAmount(state, action) {
      state.value -= action.payload
    },
  },
})

// generate the  action creator 
export const { increment, decrement, incrementByAmount , decrementByAmount} = counterSlice.actions

// export reducer
export default counterSlice.reducer

*/



// createAsyncThunk

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



// CREATE the Action


export const fetchPost = createAsyncThunk('post/list', async (payload, {RejectWithValue , getState, dispatch })=>{
  try {
    const {data}= await axios.get('https://jsonplaceholder.typicode.com/posts')

    return data
    
  } catch (error) {
    return error?.response;
  }

})


// Then, handle actions in your reducers:
const postSlices = createSlice({
  name: 'posts',
  initialState: {},
  extraReducers: {
    // handel pending state
     [fetchPost.pending]: (state, action )=>{
     
      state.loading= true
    },
    // handel fulfilled state

    [fetchPost.fulfilled]: (state, action )=>{
      state.postList = action.payload;
      state.loading= false
    },

    // handel error
     [fetchPost.rejected]: (state, action )=>{
      state.loading= false
      state.error = action.payload;
    }

  }

})

export default postSlices.reducer
 





















