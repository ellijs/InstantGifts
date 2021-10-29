import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import './CSS/login.css';
import GoToTop from './GoToTop'

export default function Login({ setUser, isToggle, setIsToggle }) {
  const history = useHistory();
  const [ loginError, setLoginError ] = useState('')
  const [ errors, setErrors ] = useState([])

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [signupInfo, setSignupInfo] = useState({
    user_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  function handleSignupChange(e) {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  }

  function handleChange(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setLoginError(data.error);
          setLoginInfo({
            email: "",
            password: "",
          })
        } else {
          setUser(data);
          history.push("/home");
        }
      });
  }

  function handleSignupSubmit(event){
    event.preventDefault();
    let data = {
        user_name: signupInfo.user_name,
        email: signupInfo.email,
        password: signupInfo.password,
        password_confirmation: signupInfo.password_confirmation,
        admin: false
    }
    fetch('/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        if (json.errors) {
            setErrors(json.errors)
            setSignupInfo({
              user_name: "",
              email: "",
              password: "",
              password_confirmation: ""
            })
        }
        else {
            setUser(json)
            history.push("/home")
        }
    })
  }

  const renderErrors = errors.map(error => <p key={error} style={{color:'#e73e49'}}>{error}</p>)

  return (

    <section className={ isToggle? '': 'active'} >
      <div className={ isToggle ? 'container': 'container active'}>
        <div className='user signinBx'>
          <div className='imgBx'>
            <img src=
            "https://static9.depositphotos.com/1579454/1194/i/600/depositphotos_11943335-stock-photo-golden-key-in-keyhole.jpg"
            // "https://st.depositphotos.com/1760261/1347/i/600/depositphotos_13470432-stock-photo-unlocking-dreams.jpg"
            alt="loginImg"/>
          </div>
          <div className="formBx">
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              { loginError ? <p style={{color: '#677eff'}}>{loginError}</p> : null }
              <input type='text' name="email" placeholder='Email' value={loginInfo.email} onChange={handleChange} required />
              <input type='password' name="password" placeholder='Password' value={loginInfo.password} onChange={handleChange} required />
              <input type='submit' value='Login' />
              <p className='signup'>Don't have an account? <Link to='/login' onClick={()=>setIsToggle(!isToggle)} >Sign Up.</Link></p>
            </form>
          </div>
        </div>

        <div className='user signupBx'>
          <div className="formBx">
            <form onSubmit={handleSignupSubmit}>
              <h2>Create an account</h2>
              { errors ? renderErrors : null }
              <input type='text' placeholder='Username' required onChange={handleSignupChange} name='user_name' value={signupInfo.user_name} />
              <input type='text' placeholder='Email' required onChange={handleSignupChange} name='email' value={signupInfo.email}/>
              <input type='password' placeholder='Password' required onChange={handleSignupChange} name='password' value={signupInfo.password}/>
              <input type='password' placeholder='Confirm Password' required onChange={handleSignupChange} name='password_confirmation' value={signupInfo.password_confirmation}/>
              <input type='submit' value='Sign up' />
              <p className='signup'>Already have an account? <Link to='/login' onClick={()=>setIsToggle(!isToggle)} >Log In.</Link></p>
            </form>
          </div>
          <div className='imgBx'>
            <img src="https://t3.ftcdn.net/jpg/03/10/40/70/360_F_310407025_8GOWcXZ1SEprbtVmfr0RLfh7G95yXzrW.jpg" alt="SignupImg"/>
          </div>
        </div>
      </div>
      <GoToTop />
    </section>
    
  );
}
