import { configureStore } from '@reduxjs/toolkit'
//import { counterSlice } from '../slices/counterSlice'

//import  counterSlice  from '../slices/counterSlice' 

import  postSlice  from '../slices/counterSlice' 






const store = configureStore({ reducer: { // reducer takes object
//counter:counterSlice
post: postSlice

} })


export default store