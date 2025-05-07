import da from "../assets/dev/da.png"
import quickfleet from "../assets/dev/quickfleet.png"
import sponsorshipBridge from "../assets/dev/sponsorshipBridge.png"
interface DevProjects {
    title :string,
    subtitle : string,
    year : string,
    imgURL : string,
    desc : string,
    link : string,
}

const devProject:DevProjects[] = [
    {
        title: "Digital Arts Society Website",
        subtitle : "Web Development",
        year : "2025", 
        imgURL :  da, 
        desc : "A responsive website", 
        link : "https://dasbvp.onrender.com/",
    },
    {
        title: "Sponsorship Bridge",
        subtitle : "Web Development",
        year : "2025",
        imgURL : sponsorshipBridge,
        desc : "Developed a responsive and visually accurate clone of the Amazon e-commerce platform, replicating core features such as product listings, shopping cart and checkout.", 
        link : "https://github.com/ishikamanchanda30/Amazon-Javascript-Project",
    },
    {
        title: "Quick Fleet Website",
        subtitle : "Web Development",
        year : "2024",
        imgURL : quickfleet,
        desc : "Designed and developed a responsive and user-friendly front-end prototype website for a telematics platform focused on long-haul trucking efficiency.", 
        link : "https://github.com/ishikamanchanda30/SIH-Website-A",
    },

]
export default devProject; 