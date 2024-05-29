import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate()
   const logout = ()=>{
    localStorage.clear();
    navigate()
   }
  return (
    <div>
      <img alt='logo' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716980400&semt=sph' className='logo'/>
      { auth ? <ul className='ul-list'>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/add'>Add Products</Link></li>
        <li><Link to='/update'>Update Products</Link></li>
        <li></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link onClick={logout} to='/signup'>Logout  ({JSON.parse(auth).name})</Link></li>
      </ul>
      :
      <ul className='ul-list nav-right'>
        <li><Link to='signup'>SignUp</Link></li>
  <li><Link to='/login'>Login</Link></li>
      </ul>
}
    </div>
  )
}

export default Nav
