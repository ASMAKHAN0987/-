import axios  from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AuthUser(){
    const navigate = useNavigate();
    const tokenization = JSON.parse(sessionStorage.getItem('token'));
    const getUser = ()=>{
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
     }
     const getToken = ()=>{
        const tokenString = sessionStorage.getItem('token');
        console.log("token string: " + tokenString);
        const userToken = JSON.parse(tokenString);
        return userToken
     }
    const [token,setToken] = useState(JSON.parse(sessionStorage.getItem('token')));
    const [user,setUser] = useState('');
     
     
    const saveToken = (token,user)=>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));
        setToken(token)
        setUser(user)
        navigate('/dashboard');
    }
    const http = axios.create({
        baseURL: 'http://localhost:8000/api',
        headers:{
            "content-type": "application/json",
            "Authorization": `Bearer ${token})}`
        }
    });
    return { 
        setToken:saveToken,
        token,
        user,
        getUser,
        getToken,
        http}
}