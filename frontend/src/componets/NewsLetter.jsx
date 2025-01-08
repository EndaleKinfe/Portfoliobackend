import {useState} from  'react'
const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [name, setText] = useState("");
    function handelEmail(e){
        setEmail(e.target.value);
    }
    function handelName(e){
        setText(e.target.value);
    }
    function  handlesubmit(e) {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "is_subscribed": true,
        "email_text": email,
        "name": name
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        a = useFetch(url, requestOptions);
    }
    return ( <section className="w-full min-h-screen">
        <h1 className="text-4xl text-center my-10 text-purple-400" >Signup to my yearly newsletter</h1>
        <form className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]' onSubmit={handlesubmit}>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' type="text" onChange={handelName} value={name} placeholder="Your Name"/>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' type="email" onChange={handelEmail} value={email} placeholder="example@example.com"/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' >sign up</button>
        </form >
    </section> );
}
 
export default NewsLetter;