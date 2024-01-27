import  { useState } from 'react'
import AuthUser from '../AuthUser';
import { useNavigate } from 'react-router-dom';
function Registration() {
    const {http,setToken} = AuthUser();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate();
    const submit = (e)=>{
        e.preventDefault();
        console.log(email + ' ' + password);
        http.post('/register',{name:name,email: email, password: password}).then((res)=>{
          navigate('/login');
        })
    }
  return (
    <>
  <form className='col-sm-6 m-auto mt-5 border p-2'>
  <div className="mb-3">
    <label className="form-label">Name:</label>
    <input type="text" className="form-control" onChange={e=>setName(e.target.value)}/>
  </div> 
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={e=>setEmail(e.target.value)}/>
    
  </div> 
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" onChange={e=>setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
</form>
    </>
  )
}

export default Registration