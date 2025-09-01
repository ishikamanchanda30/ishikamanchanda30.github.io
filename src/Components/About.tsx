import { useState } from "react"

import arrow from "../assets/arrow.svg"
const About: React.FC = () => {
    const [underline, setUnderline] = useState<string | null>(null);
    return (
        <div className='p-3 m-auto md:min-h-screen' id='about text-white'>
            <div className='text-4xl md:text-6xl mb-4'>ABOUT</div>
            <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
            <div className='gap-12'>
                <div className='flex flex-col md:flex-row gap-10 md:gap-20  '>
                    <div className='text-2xl md:text-4xl md:leading-13 md:w-2/3 italic'>
                        Creating unforgettable and beautiful digital experiences, bringing your ideas to life.
                    </div>
                    <div className='text-[#bdbdbd] font-md md:w-1/3'>
                        Hi, I'm Ishika. A front-end developer specilizing in building landing pages, multi-pages responsive websites.
                        <br />
                        <br />
                        I am currently pursuing Bachelor of Technology in Computer Science from GGSIPU.
                        <br />
                        During my two years of college, I have organized a number of events and taken part in hackathons, and this experience has equipped me with problem-solving skills and teamwork abilities.
                        <br />
                        <br />
                        I am passionate about learning new technologies and implementing them in real-world projects. I am always eager to learn and tackle new challenges.

                    </div>

                </div>
                <div className="flex flex-col md:flex-row md:w-1/2 md:opacity-100 opacity-70 justify-between pt-6 md:pt-0 md:py-0 gap-4 md:gap-0 md:items-end md:pr-20">
                    <div>
                        <div>
                            Web Development
                        </div>
                        <div>
                            Graphic Design
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>Say Hello</div>
                        <div className='flex flex-col'>
                            <a href="mailto:ishikamanchanda0130@gmail.com" target="_blank" onMouseEnter={() => setUnderline('email')} onMouseLeave={() => setUnderline(null)}>ishikamanchanda0130@gmail.com</a>
                            <span
                                className="h-[1px] rounded-full transition-all duration-300 bg-white   ease-in-out"
                                style={{ width: underline == 'email' ? '100%' : '0%' }}
                            ></span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <a href='https://www.linkedin.com/in/ishikamanchanda0130/' target="_blank" onMouseEnter={() => setUnderline('linkedin')} onMouseLeave={() => setUnderline(null)}>
                                Explore LinkedIn
                            </a>
                            <img src={arrow} alt="" className="h-6" />
                        </div>
                        <span
                            className="h-[1px] rounded-full transition-all duration-300 bg-white   ease-in-out"
                            style={{ width: underline == 'linkedin' ? '100%' : '0%' }}
                        ></span>
                    </div>
                </div>

            </div>
             
        </div>

    )
}

export default About