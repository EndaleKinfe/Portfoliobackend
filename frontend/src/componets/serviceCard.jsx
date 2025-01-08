const ServiceCard = ({name,description }) => {
    return ( <>
        <div className="bg-purple-300 p-4 rounded-lg w-10/12 md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-bold capitalize">{name}</h3>
            <p>{description}</p>
        </div>
    </> );
}
 
export default ServiceCard;