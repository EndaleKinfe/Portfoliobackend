
import Navbar from '../componets/Navbar'
import About from '../componets/About'
import Imageslider from '../componets/Imageslider'
import Projects from '../componets/Projects'
import Skills from '../componets/skills'
import Services from '../componets/services'
import Educations from '../componets/educations'
import Experences from "../componets/experences"
import Message from '../componets/Messages'
import NewsLetter from '../componets/NewsLetter'


const UsePage = () => {
    return ( <>
        <Navbar/>
        <Imageslider/>
        <About/>
        <Projects/>
        <Skills/>
        <Educations/>
        <Experences/>
        <Message/>
        <NewsLetter/>
        <Services/>

    </> );
}
 
export default UsePage;