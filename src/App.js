
import './App.css';

import React, { useEffect } from 'react'

//import { decrement, increment, incrementByAmount, decrementByAmount } from './redux/slices/counterSlice';
import  {fetchPost}  from './redux/slices/counterSlice' 


import { useDispatch, useSelector } from 'react-redux';






function App() {
  const dispatch = useDispatch()

  //const counter = useSelector(state => state?.counter)

  const post = useSelector(state => state?.post)

  const {postList, loading}= post

  useEffect(() => {
    dispatch (fetchPost())
   
  }, [dispatch])







  return (
    <div className="App">
      {/*<h1>redux counter app</h1>
      <h2>Counter : {counter.value}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>increment Amount</button>
      <button onClick={()=>dispatch(decrementByAmount(5))}>decrement Amount</button>*/}
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>

      <h1 >Post list</h1>
      <br/>
      <hr/><br/>

      {loading? <h2>Loading...</h2>:(
        postList?.map(p=>(
          <div key={p.id}>
          <h2 > {p.title} </h2>
          <p>{p.body}</p>

          </div>
        ))
      ) }




    </div>
  );
}

export default App;
