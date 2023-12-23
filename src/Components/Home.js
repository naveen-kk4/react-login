import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = ()=>{
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        
        
      try{
        const result = await axios.post('https://dummyjson.com/auth/login',{
            headers: { 'Content-Type': 'application/json' },
            username:e.target['username'].value,
             password:e.target['password'].value
        });
        
        localStorage.setItem("user",JSON.stringify(result.data));
        navigate("/about");
      }
      catch(error){
        alert(error.response.data.message);
      }
         
    }
    
    return(
        <div className='formDiv'>
            <div>
                <p className='smallHead'>Welcome Back 👋</p>
               <h1>Sign in to your account</h1>
               <form onSubmit={handleSubmit}>
                <p>Username</p>
                <input type='text' name='username'required></input>
                <p>Password</p>
                <input type='password' name='password' required/>
                <br></br>
                <br></br>
                <br></br>
                <button type='submit'>CONTINUE</button>
               </form>
                 <p className='formFooter'>Forgot your password?</p>
                
            </div>
        </div>
    )
}
export default Home;