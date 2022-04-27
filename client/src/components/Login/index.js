import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthDataService from "../../services/auth"
import { Link } from 'react-router-dom'

const Login = (props) => {
  const history = useNavigate();
	const [user, setUser] = useState({_id: "", email: "", password: ""});
	const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }

	const loginAll = () => {
		AuthDataService.getAll()
		.then(res => {
			console.log(res.data.users);
			setUsers(res.data.users)
		})
		.catch(e => {
			console.log(e);
		})
	}

	useEffect(() => {
		loginAll();
	}, [])
	
	const MailMatchId = (email) => {
		var matched_email = users.filter((user) => {
			return user.email === "test0@email.com"
		})
		return matched_email[0]._id
	}

	const loggingin = () => {
    console.log("hi")
    AuthDataService.LoginAuth(user)
    .then(res => {
      console.log(res.data.status)
      if (res.data.status === "login success") {
				user._id = MailMatchId(user.email)
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