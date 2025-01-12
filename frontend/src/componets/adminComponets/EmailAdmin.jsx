import Navbar from "./NavbarAdmin";
import useFetch from "../../useFetch"
const EmailAdmin = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/emails/list", requestOptions);
    return ( 
        <>
        <Navbar/>
        <h1 className="text-3xl text-center my-10 text-purple-400">newsletter subscriber list</h1>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr className="*:font-bold">
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>is_subscribed</td>
                </tr>
            </thead>
            <tbody>
        {isLoading &&
            <tr>
                        <td>loading</td>
                        <td>loading</td>
                        <td>loading</td>
                        <td>loading</td>
                    </tr>
        }
        {data && 
            data.map((row)=>{
                console.log(row)
                return(
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.emailText}</td>
                        <td>{row.isSubscribed}</td>
                        
                    </tr>
                )
            })
        }
        </tbody>
        </table>

</>)
}
 
export default EmailAdmin;