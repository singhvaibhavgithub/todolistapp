import React, { useEffect, useState } from 'react'
import { login } from '../services/api';
import { json, useNavigate } from 'react-router-dom';

const Login = () => {
  const [form,setForm]=useState({
    username:'',
    password:''
  });
  const navigation=useNavigate();
useEffect(()=>{
  const user=localStorage.getItem('user')
  if(user){
    return navigation('/');
  }
},[])
const {errors,setErrors}=useState(null)

const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}
const handleSubmit=async()=>{
    const result=await login(form)
    console.log('form',result);
    
if(result.status===200){
    if(result.data.status===200){
        localStorage.setItem('user',JSON.stringify(result.data.data))
        navigation("/")
        return;
    }
}

}

  return (
    <div className='container'>
        <div className='row justify-content-center mt-4'>
            <div className='col-lg-5 card border-primary mt-4'>
            <div className="card-header">Login</div>
  <div className="card-body">
  <div className="form-group row">
  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
    Email
  </label>
  <div className="col-sm-10">
    <input
      type="email"
      onChange={handleChange}
      name='username'
      readOnly=""
      className="form-control-plaintext"
      id="staticEmail"
      defaultValue="email@example.com"
    />
  </div>
</div>
<div className="form-group row">
  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
    Password
  </label>
  <div className="col-sm-10">
    <input
      type="password"
      onChange={handleChange}
      name='password'
      readOnly=""
      className="form-control-plaintext"
      id="staticEmail"
      
    />
  </div>
</div>
<button type="button" className="btn btn-primary" onClick={handleSubmit}>
  Login
</button>
  </div>
            </div>

        </div>
      
    </div>
  )
}

export default Login
