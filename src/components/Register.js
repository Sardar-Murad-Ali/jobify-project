import React from 'react'
import logo from "../images/logo.svg"

import "./Register.css"
const Register = () => {
    let [register,setregister]=React.useState(true)
    let initialvalue={
        name:"",
        email:"",
        password:""
    }

    function log(){
        setregister(false)
    }
    function reg(){
        setregister(true)
    }
  return (
    <div className='register'>
       {
           register ?
           <div className='register-main'>
                <img src={logo} alt="ss" className='logo'/>
                <h2>Register</h2>
                <div className='name same'>
                    <p>Name</p>
                    <input value={initialvalue.name}/>
                </div>
                <div className='email same'>
                    <p>Email</p>
                    <input value={initialvalue.email}/>
                </div>
                <div className='name same'>
                    <p>Password</p>
                    <input value={initialvalue.password}/>
                </div>
                <button className='btn' style={{width:"90%"}}>Register</button>
                <p>Already a member <span onClick={log}>Login</span></p>
           </div>
           :
           <div className='register-main'>
                  <img src={logo} alt="ds" className='logo'/>
                <h2>Login</h2>
                <div className='email same'>
                    <p>Email</p>
                    <input value={initialvalue.email}/>
                </div>
                <div className='name same'>
                    <p>Password</p>
                    <input value={initialvalue.password}/>
                </div>
                <button className='btn' style={{width:"90%"}}>Login</button>
                <p>Not a member yet<span onClick={reg}>Register</span></p>
           </div>
       }
    </div>
  )
}

export default Register