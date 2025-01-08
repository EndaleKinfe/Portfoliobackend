import {useState} from  'react'
import useFetch from '../useFetch';
const Message = () => {
    const [fname, setFname] =  useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    function handelFname(e){
        setFname(e.target.value);
    }
    function handelLname(e){
        setLname(e.target.value);
    }
    function handelEmail(e){
        setEmail(e.target.value);
    }
    function handelText(e){
        setText(e.target.value);
    }
    const   handlesubmit = async (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "first_name": fname,
            "last_name": lname,
            "message_text": text
        });


        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
         redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost/portfoliobackend/index.php/messages/list",requestOptions);
            const result = await response.json();
            console.log('Success:', result);
            } catch (error) {
            console.error('Error:', error);
            }
       
    }
    return ( <section className="bg-slate-200 py-7 w-full h-screen">
        
        <h1 className="text-6xl text-center my-10 text-purple-400" >Contact Me</h1>
        <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handelFname} type="text" placeholder="first name" value={fname}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' onChange={handelLname} type="text" placeholder="last name" value={lname}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handelEmail} type="email" placeholder="example@example.com" value={email}/>
            <textarea className='border-solid h-48 p-2 rounded-md border-purple-400 items-center w-5/6 mb-5 text-slate-700 md:w-96' onChange={handelText} value={text} placeholder='your message here'/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">send message</button>
        </form >
    </section> );
}
 
export default Message;