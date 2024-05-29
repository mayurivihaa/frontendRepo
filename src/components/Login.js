import React, { useEffect }  from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(()=>{
const auth = localStorage.getItem('user');
if(auth){
  navigate('/')
}
    },[])

    const handleLogin =async () =>{
console.log(email,password)

let result = await fetch('http://localhost:5000/login',{
  method:'post',
  body: JSON.stringify({email,password}),
  headers: {
    'Content-Type' : 'application/json'
  },
});
result = await result.json();
console.log(result)
if(result.name){
  localStorage.setItem('user',JSON.stringify(result));
  navigate("/")
}else{
    alert('please inter valid information')
}
    }

    return (
<>
<div className='inputs text-white'>
      <h1>Login</h1>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
      <button type='button' onClick={handleLogin} className='btn'>Login</button>
    </div>
</>
    )
}

export default Login