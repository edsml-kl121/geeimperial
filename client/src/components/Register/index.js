import React , {useState} from 'react'
import AuthDataService from "../../services/auth"

export default function Register() {
  const [user, setUser] = useState({name:"", email: "", password: ""});
  const [register, setRegister] = useState(false);
  const handleChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }
  // const postRegister = ()=>{
  //   const {name,email,password} = user
  //   if (name && email && password){
  //    axios.post("http://localhost:5000/api/v1/auth/register",user )
  //    .then(res=> {
  //      console.log(res);
  //      setRegister(true);
  //     }
  //   )
  //   }
  //   else{
  //       alert("invalid input")
  //   }
  // }
  const registering = () => {
    // var data = {name: app, link: applink};
    AuthDataService.RegisterAuth(user)
      .then(res => {
        console.log(res.data);
        setRegister(true);
      })
      .catch(e => {
        console.log(e);
      })
  }
  return (
    <>
    <div>
      <h2>Register</h2>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="name"/>
      <br></br>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
      <br></br>
      <input type="text" name="password" value={user.password} onChange={handleChange} placeholder="password"/>
      <br></br>
      <button type="submit"  onClick={registering} >Register</button>
      <p>{register ? ("you have successfully registered"): ("Please register")}</p>
    </div>
    </>
  )
}
