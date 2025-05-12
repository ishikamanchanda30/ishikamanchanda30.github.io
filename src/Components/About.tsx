

const About: React.FC = () => {
    return (
        <div className='p-3 m-auto md:min-h-screen' id='about'>
            <div className='text-4xl md:text-6xl mb-4'>ABOUT</div>
            <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
            <div className='gap-12'>
                <div className='flex flex-col md:flex-row gap-10 md:gap-20  '>
                    <div className='text-2xl md:text-4xl md:leading-13 w-1/2 italic'>
                        Passionate about creating unforgettable and beutiful digital experiences, bringing your ideas to life.
                    </div>
                    <div className='text-[#686868] font-md w-1/2'>
                        Hi, I'm Ishika. A front-end developer specilizing in building landing pages, multi-pages responsive websites. 
                        <br/>
                        <br/>
                        I am currently pursuing Bachelor of Technology in Computer Science from GGSIPU. 
                        <br/> 
            
                        During my two years of college, I have organized a number of events and taken part in hackathons, and this experience has equipped me with problem-solving skills and teamwork abilities.
                        <br/>
                        <br/>
                        I am passionate about learning new technologies and implementing them in real-world projects. I am always eager to learn and tackle new challenges.
                        <br/>
                        <br/>
                        When I'm not coding I dedicate my time to jounraling, planning my week or reflecting on my day, It helps me stay focused and dedicated to my work and maintain work-life balance.
                    </div>

                </div>

            </div>
        </div>

    )
}

export default About