import { useState } from "react";
import {useParams} from "react-router";
import Navbar from "../NavbarAdmin";

const UserCreate = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("") 

    function handelusename(e){
        setUserName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }    
    function handlePassword(e){
        setPassword(e.target.value);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        let reqMethod =  "POST" 
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
                        "email": email,
                        "username": username,
                        "password": password
                        });;

        const requestOptions = {
        method: reqMethod,
        headers: myHeaders,
        body: raw,
         redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost/portfoliobackend/index.php/users/list",requestOptions);
            const result = await response.json();
            console.log('Success:', result);
            } catch (error) {
            console.error('Error:', error);
            }
       
    }

    return ( <>
        <Navbar/>
             <h1 className="text-3xl text-center my-10 text-purple-400" >Create user</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
                <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handelusename} 
                type="text" 
                placeholder="username" 
                value={username}/>
                
                <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handleEmail} 
                type="email" 
                placeholder="example@example.com" 
                value={email}/>

                <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handlePassword} 
                type="email" 
                placeholder="password" 
                value={password}/>
                <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">Create</button>
        </form >
    </> );
}
 
export default UserCreate;