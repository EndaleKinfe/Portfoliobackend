import Navbar from "./NavbarAdmin";
import useFetch from "../../useFetch"
const EmailAdmin = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/services/list", requestOptions);
    return ( 
        <>
        <Navbar/>
        <h1>newsletter subscribers list</h1>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr>
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
                    <tr>
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