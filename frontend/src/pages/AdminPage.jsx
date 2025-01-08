import { useState } from "react";
import Navbar from "../componets/adminComponets/NavbarAdmin";
import Messageshow from "../componets/adminComponets/messageshow";
import ProjectsAdmin from "../componets/adminComponets/ProjectsAdmin";
import Dashboard from "../componets/adminComponets/Dashboard";

const AdminPage = () => {
    const [currentsub, setCurrentsub] = useState("Messages");
    
    function handlePageChange(pageName){
        setCurrentsub(pageName);
    }
    return ( 
        <>
        <div className="flex h-screen">
            <Dashboard className=""/>
            
            
            <div className="">

                
                {
                    currentsub === "Messages" && <Messageshow/>
                }
                {
                    currentsub === "Projects" && <ProjectsAdmin/>
                }
                {
                    currentsub === "Projects" && <ProjectsAdmin/>
                }
                {
                    currentsub === "Projects" && <ProjectsAdmin/>
                }
                {
                    currentsub === "Projects" && <ProjectsAdmin/>
                }
                {
                    currentsub === "Projects" && <ProjectsAdmin/>
                }
            </div>
        </div>
            </>
     );
}
 
export default AdminPage;