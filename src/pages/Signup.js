import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/signup.css'
import SignupImage from '../assets/images/signup.png'


const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [showValue, setShowValue] = useState('show')

  const userData = {
    name: name,
    email: email,
    password: password,
  }

  console.log(userData);

  const showHandler = () => {
    setShow(!show)
    if(!show) {
      setShowValue('hide')
    } else {
      setShowValue('show')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.stringify(userData);
    sessionStorage.setItem('user', user)
    navigate('/login')
  }


  return (
    

    <div className='signup'>

      <div className='image-container'><img src={ SignupImage } alt='login' /></div>
      
      <div className='form-container'>
      
        <div><h1>Welcome to  Lilies!</h1></div>
      
        <div>
          <form onSubmit={handleSubmit}>

            <div>
              <input type='text' name='name' placeholder='Your First Name' value={name} onChange={(e) => { setName(e.target.value)}} />
            </div>

            <div>
              <input type='email' name='email' placeholder='Your Email address' value={email} onChange={(event) => setEmail(event.target.value) }/>
            </div>
            
            <div style={{position: 'relative'}}>
              <input type={show? 'text' : 'password'} name='password' placeholder='Your Password' autoComplete={'new-pasword'} value={password} onChange={(event) => setPassword(event.target.value)} /> 
              <small onClick={showHandler}>{showValue}</small>
            </div>

            <div>
              <button type='submit'>SIGNUP</button>
            </div>

          </form>
        </div>

        <div className='bottom-container'>
          <div><p>Already have an account. <a href='./login'>LOGIN</a></p></div>
        </div>
      
      </div>

    </div>
  )
}

export default Signup