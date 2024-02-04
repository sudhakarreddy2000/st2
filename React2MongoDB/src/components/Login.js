import {useState} from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
function Login() {
    const history=useNavigate()
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
async function submit(e){
    e.preventDefault()
    try{
        await axios.post("http://localhost:8000/",{
            email,password
        })
    .then(res=>{
        if(res.data=="exist"){
            history('/home',{state:{id:email}})
        }else if(res.data="nonexist"){
            alert("User have not sign up")
        }
    }).catch(e=>{
        alert("wrong details")
        console.logo(e)
    })
    }catch(e){
        console.log(e)
    }
}
    return (
        <>
        <h1>Login</h1>
        <form method="post">
           <input type="email" placeholder="email" name="" onChange={(e) => setEmail(e.target.value)}/>
           <br/>
           <input type="password" placeholder="password" name="" onChange={(e) => setPassword(e.target.value)}/>
           <br/>
           <input type='submit' onClick={submit}/>
           </form>
        <Link to='/Signup'>Sign-Up</Link>
        </>
    );
  }
  export default Login;