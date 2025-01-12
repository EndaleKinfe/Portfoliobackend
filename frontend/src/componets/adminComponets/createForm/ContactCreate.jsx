import { useState } from "react";
import Navbar from "../NavbarAdmin";
import { useNavigate } from "react-router";

const ContactCreate = () => {
    const [type, setType] = useState("");
    const [contactInfo, setDescription] = useState("");
    const [icon, setIcon] = useState("") 
    const navigate = useNavigate();

    function handleType(e){
        setType(e.target.value);
    }
    function handleContactInfo(e){
        setDescription(e.target.value);
    }    
    function handleIcon(e){
        setIcon(e.target.value);
    }
 
    const handlesubmit = async (e) => {
        e.preventDefault();
        let reqMethod =  "POST" 
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
                        "type":  type,
                        "contact_info": contactInfo,
                        "icon": icon,
                        });

        const requestOptions = {
        method: reqMethod,
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost/portfoliobackend/index.php/contacts/list",requestOptions);
            const result = await response.json();
            console.log('Success:', result);
            } catch (error) {
            console.error('Error:', error);
            }
       navigate("/admin/contacts")
    }

    return ( <>
                <Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Create carosel</h1>
                <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>

                    <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
                    onChange={handleType} 
                    type="text" 
                    placeholder="title" 
                    value={type}/>

                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
                    onChange={handleContactInfo} 
                    type="text" 
                    placeholder="description" 
                    value={contactInfo}/>

                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
                    onChange={handleIcon} 
                    type="text" 
                    placeholder="icon name" 
                    value={icon}/>
                    
                    <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">Create</button>
                </form >
    </> );
}
 
export default ContactCreate;