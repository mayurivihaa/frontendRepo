import React,{useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate()


  useEffect(() =>{
    const auth = localStorage.getItem('user');
    if(auth)
      {
        navigate('/')
      }
  })

    const collectData= async ()=>{
console.log(name,email,password)
let result = await fetch('http://localhost:5000/register',{
  method:'post',
  body: JSON.stringify({name,email,password}),
  headers: {
    'Content-Type' : 'application/json'
  },
});
result = await result.json()
localStorage.setItem('user',JSON.stringify(result))
console.log(result)
navigate('/')

    }
  return (
    <div className='inputs text-white'>
      <h1>Register</h1>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
      <button type='button' onClick={collectData} className='btn'>Sign Up</button>
    </div>
  )
}

export default SignUp
