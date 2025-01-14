import React,{ useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signup} from '../../firebase'
import netflix_loader from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setsignState] = useState("Sign In")
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);


  const userAuth = async(event) => {
    event.preventDefault();
    setLoading(true);
    if(signState === "Sign In")
    {
      await login(email,password);
    } else{
      await signup(name,email,password);
    }
    setLoading(false);
  }



  return (
    loading?<div className="login-spinner"><img src={netflix_loader} alt="Spinner" /></div>:
    <div className='login'>
      <img src={logo} className="login-logo" alt='Logo Image'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState === "Sign Up"?<input 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text" placeholder='Enter Your Name'/>:<></>}
          <input type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter Your Email" />
          <input type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Enter Your Password'/>
          <button 
          onClick={userAuth} 
          type="submit">{signState}</button>
          <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
            <p>New To NetFlix? <span onClick={()=>setsignState("Sign Up")} >Sign Up Now</span></p> :
            <p>Already Have An Account? <span onClick={()=>setsignState("Sign In")}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
