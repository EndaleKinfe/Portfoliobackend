import ServiceCard from './ServiceCard'
import useFetch from '../useFetch';
import Section from '../Layouts/Section';
const Sections = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/services/list", requestOptions);
    return ( <>
        <Section
        title="Services"
        diff={true}>
        {isLoading &&
        <ServiceCard name="loading"
           
            description="loading"
        />
        }
        {
            error &&<div>Error Occured while loading</div>
        }
        {
            data && data.map((service)=>{
                return(
                    <ServiceCard 
                    key={service.id}
                    name={service.name}
             
                    description={service.description}
                   
                    />
                )            })
        }
        </Section>
       </> );
}
 
export default Sections;