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
        <table className="w-5/6">
            <thead>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>message</th>
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
                    <tr>
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