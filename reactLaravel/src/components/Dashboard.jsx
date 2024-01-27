import React, { useEffect, useState } from 'react'
import authUser from '../AuthUser'

function Dashboard() {
    const {getUser,http} = authUser()
    {console.log("info is",getUser())}
    const {name,email} = getUser()
    const [userDetail,setUserDetail] = useState();
    useEffect(()=>{
      fetchUserDetail()
    })
    const fetchUserDetail = () => {
       http.post('/me').then(({data})=>{
           console.log('log this data: ',data);
           setUserDetail(data);
       })
    }
  return (
    <div>
        <h4>Name</h4>
        <p>{userDetail?.name}</p>
        <h4>Email</h4>
        <p>{userDetail?.email}</p>
    </div>
  )
}

export default Dashboard