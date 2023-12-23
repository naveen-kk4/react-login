import React,{useEffect, useState} from 'react';
import axios from 'axios';


const About = ()=>{
    const[user,setUser] = useState("");
    useEffect(async ()=>{
        try{
            const obj = JSON.parse(localStorage.getItem("user"));
            const result = await axios.get(`https://dummyjson.com/users/${obj.id}`);
            localStorage.setItem("user",JSON.stringify(result.data));
            setUser(result.data);
            console.log(result.data);
        }
        catch(error){
           console.error(error);
        }
     

    },[])
    return (
        <div className='about'>
           {
            user && (
                <>
                <h1>Welcome Back {user.firstName} {user.lastName}!</h1>
                <img src={user.image} alt='profile-pic'></img>
                <div className='details'>
                    <p>Weight:{user.weight}kg</p>
                    <p>Height:{user.height}cm</p>
                    <p>Phone:{user.phone}</p>
                    <p>Email:{user.email}</p>
                    <p>Blood Group:{user.bloodGroup}</p> 
                    <p>University:{user.university}</p> 
                    <p>Company:{user.company.name}</p> 
                    <p>Job Role:{user.company.title}</p> 
                     
                    <p>Card Number:{user.bank.cardNumber}</p>
                    <p>Card Type:{user.bank.cardType}</p>
                    <p>Currency:{user.bank.currency}</p>
                    <p>Expiry:{user.bank.cardExpire}</p>
                   
                    
                <p>Address:{user.address.address},{user.address.city}</p>
                </div>
                
               
                </>
            )
           }
        </div>
    )
}
export default About;