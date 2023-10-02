import React, { useEffect, useState } from 'react'
import { register } from '../services/api'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form,setForm]=useState({
    name:"",
    username:"",
    email:"",
    password:""
  })
  const [errors,setErrors]=useState(null);
  const navigation=useNavigate();
  useEffect(()=>{
    const user=localStorage.getItem('user')
    if(user){
      return navigation('/');
    }
  },[])
  const handleInputChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=async()=>{
    const result=await register(form);
    if(result.status===200){
      if(result.data.status===201){
        setErrors(result.data.data)
      }
      if(result.data.status===200){
        localStorage.setItem('user',JSON.stringify(result.data.data))
        navigation('/');
      }
    }
  }
  return (
    <div className='container'>
      <div className='row justify-content-md-center mt-4'>
        <div className='col-lg-5 border-primary mb-3'>
            <div className='card-header h4 text-center'>
               Register an account
            </div>
            <div className='card-body'>
              <div className='form-group'>
              <label className='col-form-label mt-4'>name</label>
              <input name="name" onChange={handleInputChange} type='text' className='form-control' placeholder='enter your name'></input>
              </div>
            </div>
            <div className='card-body'>
              <div className='form-group'>
              <label className='col-form-label mt-4'>username</label>
              <input type='text' className='form-control' placeholder='enter username' name='username' onChange={handleInputChange}></input>
              </div>
            </div>
            <div className='card-body'>
              <div className='form-group'>
              <label className='col-form-label mt-4'>email</label>
              <input type='text' className='form-control' placeholder='enter email' name='email' onChange={handleInputChange}></input>
              </div>
            </div>
            <div className='card-body'>
              <div className='form-group'>
              <label className='col-form-label mt-4'>password</label>
              <input type='password' className='form-control' placeholder='enter password' name='password' onChange={handleInputChange}></input>
              </div>
            </div>
            <div className='row justify-content-md-center form-group mt-4'>
               <button type='button' className='col-sm-6 btn-outlint-secondary center' onClick={handleSubmit}>register now</button>
            </div>
            </div> 

      </div>
    </div>
  )
}

export default Register
