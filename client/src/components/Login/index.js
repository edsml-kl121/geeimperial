import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthDataService from "../../services/auth"
import { Link } from 'react-router-dom'

const Login = (props) => {
  const history = useNavigate();
	const [user, setUser] = useState({email: "", password: ""});

  const handleChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }

	const loggingin = () => {
    console.log("hi")
    AuthDataService.LoginAuth(user)
    .then(res => {
      console.log(res.data.status)
      if (res.data.status === "login success") {
				props.login(user)
				localStorage.setItem('user-data', JSON.stringify(user));
				history("/")
			} else {
				console.log("wrong logins")
				alert("wrong credentials")
			}
    })
    .catch(error => {
      console.log(error);
    })
  }
	
	return (
		<div>
			<h1>Login</h1>
				<input
          name = "email"
					value={user.email}
					// defaultValue={user.email}
					onChange={handleChange}
					type="text"
					placeholder="Email"
				/>
				<br />
				<input
          name="password"
					value={user.password}
          // defaultValue={user.password}
					onChange={handleChange}
					type="password"
					placeholder="Password"
				/>
				<br />
				<button type = "submit" onClick={loggingin} >Login</button>
				<Link to="/register"><button>Register</button></Link>
		</div>
	)
}

export default Login