import { useState } from "react";
import {useParams} from "react-router";
import Navbar from "../NavbarAdmin";

const SkillEdit = () => {
    const [name, setname] = useState("");
    const [expertiseLevel, setExpertiseLevel] = useState("");
    const [iconName, setIconName] = useState("") 
    const {id} = useParams()

    function handlename(e){
        setname(e.target.value);
    }
    function handleExpertiseLevel(e){
        setExpertiseLevel(e.target.value);
    }    
    function handleIconName(e){
        setIconName(e.target.value);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        let reqMethod =  "PUT" 
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
                        "name":  name,
                        "expertiselevel": expertiseLevel,
                        "iconname": iconName,
                        "id": id 
                        });

        const requestOptions = {
        method: reqMethod,
        headers: myHeaders,
        body: raw,
         redirect: "follow"
        };
        console.log(raw)
        try {
            const response = await fetch("http://localhost/portfoliobackend/index.php/skills/list",requestOptions);
            const result = await response.json();
            console.log('Success:', result);
            } catch (error) {
            console.error('Error:', error);
            }
       
    }

    return ( <>
                <Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit Skill</h1>
                <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>

                    <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
                    onChange={handlename} 
                    type="text" 
                    placeholder="name" 
                    value={name}/>

                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
                    onChange={handleExpertiseLevel} 
                    type="text" 
                    placeholder="expertise Level" 
                    value={expertiseLevel}/>
                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
                    onChange={handleIconName} 
                    type="text" 
                    placeholder="image link " 
                    value={iconName}/>
                    
                    <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
                </form >
    </> );
}
 
export default SkillEdit;