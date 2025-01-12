import useFetch from "../../useFetch";
import Navbar from "./NavbarAdmin";
const Messageshow = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/messages/list", requestOptions);
    return ( 
        <>
        <Navbar/>
       
        <h1 className="text-3xl text-center my-10 text-purple-400">messages list</h1>
    
        <table className="w-5/6">
            <thead>
                <tr className="*:font-bold">
                <td>id</td>
                <td>first name</td>
                <td>last name</td>
                <td>email</td>
                <td>message</td>
                </tr>
            </thead>
            <tbody>
        {isLoading &&
            <tr>
                        <td>loading</td>
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
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                        <td>{row.email}</td>
                        <td>{row.messageText}</td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
        </>
     );
}
 
export default Messageshow;