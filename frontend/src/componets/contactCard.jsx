const ContactCard = ({type,contactInfo }) => {
    return ( <>
        <div className="bg-red-200 w-32 h-32">
            <h3>{type}</h3>
            <p>{contactInfo}</p>
        
        </div>
    </> );
}
 
export default ContactCard;