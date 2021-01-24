import React,{useState} from 'react'
import { InputText } from 'primereact/inputtext';
import '../../pages/Pages.css'; 
import { Button } from 'primereact/button';

function Login() {

    const [state, setstate] = useState({email:'',password:''})
  return (
    <div className='p-20 sign-up'>
    <div className='row m-t-10'>
      <b className='col-md-6'> Email:</b>
      <InputText value={state.email} type='text' placeholder='Enter Email' onChange={(e) => setstate({...state,email:e.target.value})} />
    </div>
    <div className='row m-t-10'>
      <b className='col-md-6'> Password:</b>
      <InputText value={state.password} type='password' placeholder='Enter Password' onChange={(e) => setstate({...state,password:e.target.value})} />
    </div>
    <div className='row m-t-10'>
<Button className='sign-up-button'>Login</Button>

    </div>
    <a href={'/signup'} className='float-right'> Sign Up</a>
  </div>
  )
}

export default Login
