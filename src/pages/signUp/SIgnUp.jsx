import React,{useState} from 'react'
import { InputText } from 'primereact/inputtext';
import '../../pages/Pages.css'; 
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function SIgnUp() {
    const [state, setstate] = useState({firstName:'',
    lastName:'',
email:'',
password:''});
const [growl, setGrowl] = useState();


const signUP=()=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: state.firstName ,
            lastname:state.lastName,
            email:state.email,
        password:state.password})
    };
    fetch('http://localhost:3030/signup', requestOptions)
        .then(response => response.json())
        .then((data)=>growl.show({life:'6000',severity:'success',summary:'Signed up successfully'}))
}

  return (
    <div>
            <Toast ref={(el) => setGrowl(el)} />
    <div className='p-20 sign-up'>
      <div className='row'>
        <b className='col-md-6'> First Name:</b>
        <InputText value={state.firstName} type='text' placeholder='Enter First Name' onChange={(e) => setstate({...state,firstName:e.target.value})} />

      </div>
      <div className='row m-t-10'>
        <b className='col-md-6'> Last Name:</b>
        <InputText value={state.lastName} type='text' placeholder='Enter Last Name' onChange={(e) => setstate({...state,lastName:e.target.value})} />
      </div>
      <div className='row m-t-10'>
        <b className='col-md-6'> Email:</b>
        <InputText value={state.email} type='text' placeholder='Enter Email' onChange={(e) => setstate({...state,email:e.target.value})} />
      </div>
      <div className='row m-t-10'>
        <b className='col-md-6'> Password:</b>
        <InputText value={state.password} type='password' placeholder='Enter Password' onChange={(e) => setstate({...state,password:e.target.value})} />
      </div>
      <div className='row m-t-10'>
<Button className='sign-up-button' onClick={signUP}>Sign Up</Button>
      </div>
    </div>
    </div>
  )
}

export default SIgnUp
