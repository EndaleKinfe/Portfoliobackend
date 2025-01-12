import { useState } from "react";
import {useNavigate, useParams} from "react-router";
import Navbar from "../NavbarAdmin";

const UserEdit = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState(""); 
    const {id} = useParams();
    const navigate = useNavigate();

    function handelusename(e){
        setUserName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }    


    const handlesubmit = async (e) => {
        e.preventDefault();
        let reqMethod =  "PUT" 
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
                        "email": email,
                        "username": username,
                        "id": id
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
       navigate("/admin/users")
    }

    return ( <>
        <Navbar/>
             <h1 className="text-3xl text-center my-10 text-purple-400" >Edit user</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
                <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handelusename} 
                type="text" 
                placeholder="username" 
                value={username}/>
                
                <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handleEmail} 
                type="email" 
                placeholder="example@example.com" 
                value={email}/>
                <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form >
    </> );
}
 
export default UserEdit;