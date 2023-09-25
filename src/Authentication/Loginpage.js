
import React, { useState } from 'react'
import { auth } from './Auth';

import { Button, Form, Input, Card } from 'antd';
import './Login.css'
import SignUp from './SignUp';

function Loginpage() {
   const [submited , setSubmitted]=useState(false);
   const [opensignup , setOpenSignUp]=useState(false);

    const [data,setData]= useState({
        email:"",
        password:""
    });
    const {email,password} = data;
    const changeHandler = e =>{
        setData({...data ,[e.target.name]:e.target.value})
    }
    const signIn = ()=>{
       
        auth.signInWithEmailAndPassword(email, password).then(user =>console.log(user)).catch( err => console.log(err))

    }
    const signUp =()=>{
      
        auth.createUserWithEmailAndPassword(email, password).then(user =>console.log(user)).catch( err => console.log(err));
    }
    

  return (
    <div className='loginpage'>
       
            <Card className='logincard'>

            <Form>
                <h2 style={{display:'flex', justifyContent:'center'}}>Authentication</h2>
                <label style={{fontSize:15 ,fontWeight:500}}>UserName:</label>
            <Input className='input' type='email' name='email' value={email} placeholder='Enter email' onChange={changeHandler}/>
            {submited && email=== "" && <span style={{color:'red'}}>Name is Required</span>}
            <label style={{fontSize:15 ,fontWeight:500}}>Password:</label>
            <Input className='input'  type='password' name='password' value={password} placeholder='Enter password'  onChange={changeHandler}/>
            {submited && password ==="" && <span style={{color:'red'}}> Password is Required</span>}
           <div className='buttons'>
           <Button style={{backgroundColor:'blue', color:'white'}} onClick={(e)=>{  setSubmitted(true); e.preventDefault();
           if(!!email && !!password){signUp();
       }}} >SignUp</Button> &nbsp;&nbsp;
            <Button style={{backgroundColor:'blue', color:'white'}} onClick={(e)=>{  setSubmitted(true); e.preventDefault();
           if(!!email && !!password){signIn();}}}>SignIn</Button>
           
           
           </div>
           
             
            
             </Form>
            
        
        </Card>
       
       
    </div>
  )
}

export default Loginpage
