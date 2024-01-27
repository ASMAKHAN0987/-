import  { useState } from 'react'
import AuthUser from '../AuthUser';
function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const submit = (e)=>{
        e.preventDefault();
        console.log(email + ' ' + password);
        http.post('/login',{email: email, password: password}).then((res)=>{
            setToken(res?.data?.access_token,res?.data?.user);
            console.log(res.data.user);
            console.log(res.data.access_token);
        })
    }
  return (
    <>
  <form className='col-sm-6 m-auto mt-5 border p-2'>
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

export default Login