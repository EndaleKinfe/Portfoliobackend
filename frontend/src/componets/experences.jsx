import ExperenceCard from './ExperenceCard'
import useFetch from '../useFetch';
import Section from '../Layouts/Section';
const Experences = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/experences/list", requestOptions);
    let ExperenceInfo = error || isLoading ? [] : data;
    return ( <>
        <Section
        title="Experences">
        {isLoading &&
        <ExperenceCard 
                    position="loading"
                   company="loading"
                    description="loading"
                   startDate="loading"
                   finihsDate="loading"
        />
        }
       
        {
            error &&<div>Error Occured while loading</div>
        }
        {
            data && data.map((experence)=>{
                return(
                    <ExperenceCard 
                    key={experence.id}
                   position={experence.position}
                   company={experence.company}
                   description={experence.description}
                   startDate={experence.startDate}
                   finihsDate={experence.finishDate}
                    />
                )            })
        }
        </Section>
       </> );
}
 
export default Experences;