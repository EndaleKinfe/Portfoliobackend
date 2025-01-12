import Navbar from "./NavbarAdmin";
import useFetch from "../../useFetch";
import {Link} from "react-router"
const Users = () => {
   const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/users/list", requestOptions);
    return ( 
        <>
        <Navbar/>
        <div className="flex justify-around gap-10">
        <h1 className="text-3xl text-center my-10 text-purple-400">users list</h1>
        <Link to="/admin/users/create"><button className="w-16 h-11 bg-orange-400">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr className="*:font-bold">
                <td>id</td>
                <td>username</td>
                <td>email</td>
                <td>logintime</td>
                <td>manuplate</td>
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
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>{row.loginTime}</td>
                        <td><Link to={`/admin/users/${row.id}`} ><button  className="w-20 h-10 rounded-lg bg-purple-400"> Edit</button></Link> <button className="w-20 h-10 rounded-lg bg-red-500">Delete</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>

</>)
}
 
export default Users;