import React,{useState} from 'react'
import { InputText } from 'primereact/inputtext';
import '../../pages/Pages.css'; 
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function Login() {

    const [state, setstate] = useState({email:'',password:''})
    const [growl, setGrowl] = useState();

    const onClickLogin=()=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        password:state.password})
    };
    fetch(`http://localhost:3030/users/${state.email}/login`, requestOptions)
        .then(response => response.json())
        .then(()=> growl.show({life:'6000',severity:'success',summary:'Signed up successfully'}))
        .catch(err=>growl.show({life:'6000',severity:'error',summary:err.message}) )
    }

  return (
    <div className='p-20 sign-up'>
            <Toast ref={(el) => setGrowl(el)} />
    <div className='row m-t-10'>
      <b className='col-md-6'> Email:</b>
      <InputText value={state.email} type='text' placeholder='Enter Email' onChange={(e) => setstate({...state,email:e.target.value})} />
    </div>
    <div className='row m-t-10'>
      <b className='col-md-6'> Password:</b>
      <InputText value={state.password} type='password' placeholder='Enter Password' onChange={(e) => setstate({...state,password:e.target.value})} />
    </div>
    <div className='row m-t-10'>
<Button className='sign-up-button' onClick={onClickLogin}>Login</Button>
    </div>
    <a href={'/signup'} className='float-right'> Sign Up</a>
  </div>
  )
}

export default Login
