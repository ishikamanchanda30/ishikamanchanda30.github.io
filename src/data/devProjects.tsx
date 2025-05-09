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
    techStack:string[],
}

const devProject:DevProjects[] = [
    {
        title: "Digital Arts Society Website",
        subtitle : "Web Development",
        year : "2025", 
        imgURL :  da, 
        desc : "This is an exciting college society website, DASBVP which showcases society vision, team information, and various events.", 
        link : "https://dasbvp.onrender.com/",
        techStack: ['React','TypeScript','TailwindCSS'],
    },
    {
        title: "Sponsorship Bridge",
        subtitle : "Web Development",
        year : "2025",
        imgURL : sponsorshipBridge,
        desc : "Developed this platform", 
        link : "https://github.com/ishikamanchanda30/Amazon-Javascript-Project",
        techStack: ['React','TypeScript','TailwindCSS','NodeJS', 'ExpressJS', 'MongoDB', 'Redux'],
    },
    {
        title: "Quick Fleet Website",
        subtitle : "Web Development",
        year : "2024",
        imgURL : quickfleet,
        desc : "Designed and developed a responsive and user-friendly front-end prototype website for a telematics platform focused on long-haul trucking efficiency.", 
        link : "https://github.com/ishikamanchanda30/SIH-Website-A",
        techStack: ['HTML','CSS','Javascript'],
    },

]
export default devProject; 