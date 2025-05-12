import {useLocation } from "react-router-dom"
import {Link} from 'react-scroll'

const NavBar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold' : "text-neutral-300 hover:text-white transition-colors";
  }
  return (

    <nav className="mx-auto navbar-light py-10 flex w-[90%] justfify-center">
      <div className="flex text-left justify-between pr-50 w-[70%]">
        <div className=''>
          <div>Based In</div>
          <div>New Delhi, India</div>
        </div>
        <div className=''>
          <div>Say Hello</div>
          <div>ishikamanchanda0130@gmail.com</div>
        </div>
        <div className=''>
          <div>Resume</div>
          <div><a href="https://drive.google.com/file/d/164OxDbubDU09NHo2_GOGTekldFwvurfp/view?usp=sharing" target='_blank'> View Here</a></div>
        </div>
      </div>
      <div className="flex w-[30%] justify-between">
        <Link to="about" smooth={true} duration={300} className='cursor-pointer'>
          ABOUT
        </Link>
        <Link to="projects" smooth={true} duration={300} className='cursor-pointer'>
          PROJECTS
        </Link>
        <Link to="experience" smooth={true} duration={300} className='cursor-pointer'>
          EXPERIENCE
        </Link>
        <Link to="contact" smooth={true} duration={300} className='cursor-pointer'>
          CONTACT
        </Link>
      </div>

    </nav>

  )
}

export default NavBar