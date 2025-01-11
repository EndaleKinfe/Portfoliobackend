import EducationCard from './EducationCard'
import useFetch from '../useFetch';
import Section from '../Layouts/Section';
const Educations = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/educations/list", requestOptions);
    let EducationInfo = error || isLoading ? [] : data;
    return ( <>
        <Section
        title="Educations"
        diff={true}>

        {isLoading &&
        <EducationCard 
            type="loading"
            institution="loading"
            gpa="loading"
            startDate="loading"
            finihsDate="loading"
            details="loading"
            studyField="loading"
        />
        } 
        {
            error &&<div>Error Occured while loading</div>
        }
        {
            data && data.map((education)=>{
                return(
                    <EducationCard 
                    key={education.id}
                    type={education.type}
                    institution={education.institution}
                    gpa={education.gpa}
                    startDate={education.startDate}
                    finihsDate={education.finihsDate}
                    details={education.details}
                    studyField={education.studyField}
                    />
                )            })
        }
        </Section>
       </> );
}
 
export default Educations;