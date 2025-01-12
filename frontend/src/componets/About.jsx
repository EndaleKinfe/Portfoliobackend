import Section from "../Layouts/Section";

const About = () => {
    return ( 
        <section className="w-full min-h-screen" >
            <h1 className="text-6xl text-center my-20 text-purple-400">About Me</h1>
             <div className="flex flex-wrap gap-4 lg:gap-9 justify-center ">
                <div className="w-80 lg:w-96 h-96 md:w-[450] bg-slate-700 rounded-lg ">
                    <img className="object-cover h-full" src="11zon_cropped.jpeg" alt="" />
                </div>
                <div className="text-pretty px-3 w-96">
                    <p>Hello! I'm a passionate and dedicated developer currently expanding my expertise in web and desktop application development. I have a solid foundation in PHP and am actively learning Laravel to build modern, scalable web applications. I’m also diving into REST API development with PHP, focusing on creating efficient and reliable services.

On the desktop side, I’m exploring WPF and XAML for C# development, using insights from Pro C# by Andrew Troelsen to build user-friendly and visually appealing applications.

Additionally, I'm beginning to explore Docker to enhance my development workflow and deploy applications more effectively.

I thrive on learning new technologies and turning ideas into functional solutions. My goal is to continue growing as a developer and contribute to impactful projects.

Let’s connect and build something great together!</p>
                </div>
            </div>
        </section>
     );
}

export default About;