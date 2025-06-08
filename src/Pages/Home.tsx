import About from "../Components/About"
import Projects from "../Components/Projects"
import Experience from "../Components/Experience"
import Contact from "../Components/Contact"
import Landing from "../Components/Landing"
import SplashCursor from "../Components/ui/Animations/SplashCursor/SplashCursor"
SplashCursor
const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
        <Landing/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        <SplashCursor/>
    </div>
  )
}

export default Home