import SkillCard from './skillcard'
import useFetch from '../useFetch';
import Section from '../Layouts/Section';
const Skills = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/skills/list", requestOptions);
    let projectInfo = error || isLoading ? [] : data;
    return ( <>
    <Section
        title="Skills">
        {isLoading &&
        <SkillCard name="loading"
            experise="20"
            
        />

        }
        {
            error &&<div>Error Occured while loading</div>
        }
        {
            data && data.map((skill)=>{
                return(
                    <SkillCard 
                    key={skill.id}
                    experise={skill.expertiseLevel}
                    name={skill.name}
                    
                    />
                )            })
        }
        </Section>
       </> );
}
 
export default Skills;