import ProjectCard from './ProjectCard'
import useFetch from '../useFetch';
import Section from '../Layouts/Section';
const Projects = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/projects/list", requestOptions);
    let projectInfo = error || isLoading ? [] : data;
    return ( <>
        <Section
        title="Projects"
        diff={true}>
        {isLoading &&
        <ProjectCard title="loading"
            year="loading"
            description="loading"
            repoLink="#"
            liveLink="#"
        />
        }
        {
            error &&<div>Error Occured while loading</div>
        }
        {
            data && data.map((project)=>{
                return(
                    <ProjectCard 
                    key={project.id}
                    title={project.title}
                    year={project.year}
                    description={project.description}
                    repoLink={project.repositoryLink}
                    liveLink={project.liveLink}
                    />
                )            })
        }
        </Section>
       </> );
}
 
export default Projects;