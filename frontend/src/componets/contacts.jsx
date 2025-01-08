import ContactCard from './ContactCard'
import useFetch from '../useFetch';
import Section from '../Layouts/Section';
const Contacts = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/contacts/list", requestOptions);
    return ( <>
        <Section
        title="Contacts">
        {isLoading &&
        <ContactCard 
            
        />
        }
        {
            error &&<div>Error Occured while loading</div>
        }
        {
            data && data.map((contact)=>{
                return(
                    <ContactCard 
                    key={contact.id}
                    type={contact.type}
                    contactInfo = {contact.contactInfo}
                    />
                )            })
        }
        </Section>
       </> );
}
 
export default Contacts;