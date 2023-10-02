import React from 'react'
import Header from './partials/Header'
import ToDo from './partials/ToDo'
import AddTodoModal from './partials/AddTodoModal'

const Home = () => {
  return (
    <div>
       
      <div className='container'>
          <div className='row justify-content-md-center mt-4'>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
          </div>
      </div>
      <div className='' style={{position:'fixed', right:50,bottom:50,zIndex:1030}}>
        <button type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className='btn btn-outline-light' style={{backgroundColor:'salmon'}}
         >ADD </button>
      </div>
      <AddTodoModal/>
    </div>
  )
}

export default Home
