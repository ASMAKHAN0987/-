import { Link, Outlet } from 'react-router-dom'
import authUser from '../authUser'
import { useNavigate } from 'react-router-dom'
function AuthLayout() {
    const navigate = useNavigate()
    const {token} = authUser()
    const logout = ()=>{
        if(token != ''){
             sessionStorage.clear()
             navigate('/login')
        }
    }
  return (
    <>
    <header className=''>
     <nav className="navbar navbar-expand-lg navbar-dark bg-black">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <Link to={'/home'} className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to={'/dashboard'} className="nav-link">dashboard</Link>
        </li>
        <li className="nav-item">
            <button onClick={logout} className='btn btn-primary'>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </header>
<main>
    <Outlet/>
</main>
</>
  )
}

export default AuthLayout