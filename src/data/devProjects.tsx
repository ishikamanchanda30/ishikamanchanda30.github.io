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
    gitlink : string,
    techStack:string[],
}

const devProject:DevProjects[] = [
    {
        title: "Digital Arts Society Website",
        subtitle : "Web Development",
        year : "2025", 
        imgURL :  da, 
        desc : "The official website I built for DASBVP, featuring event details, team details, upcoming event updates. The platform serves as a connecting point for the team, facilitating updates to all team members.", 
        link : "https://dasbvp.onrender.com/",
        gitlink : "https://github.com/ishikamanchanda30/DASBVP",
        techStack: ['React','TypeScript','TailwindCSS'],
    },
    {
        title: "Sponsorship Bridge",
        subtitle : "Web Development",
        year : "2025",
        imgURL : sponsorshipBridge,
        desc : "A comprehensive website to connect Startups and College Societies featuring Smart AI society-sponsor matching with real-time chat. Streamlining the process for societies to find sponsorships for their events.", 
        link : "https://github.com/ishikamanchanda30/Sponsorship-Bridge",
        gitlink : "https://github.com/ishikamanchanda30/Sponsorship-Bridge",
        techStack: ['React','TypeScript','TailwindCSS','NodeJS', 'ExpressJS', 'MongoDB', 'Redux', 'Socket', 'Python'],
    },
    {
        title: "Quick Fleet Website",
        subtitle : "Web Development",
        year : "2024",
        imgURL : quickfleet,
        desc : "A responsive and user-friendly front-end prototype website for a telematics platform focused on long-haul trucking efficiency.", 
        link : "https://github.com/ishikamanchanda30/SIH-Website-A",
        gitlink : "https://github.com/ishikamanchanda30/SIH-Website-A",
        techStack: ['HTML','CSS','Javascript'],
    },
]
export default devProject; 