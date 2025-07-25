import experience from '../data/experience'
const Experience = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center' id ='experience'>
        <div className='text-4xl md:text-6xl mb-4'>EXPERIENCE</div>
        <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
        {experience.map((exp , id) => (
          <div className='mb-10' key={id}>
            <div className='text-2xl md:text-4xl'>
              {exp.society}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-15 mt-5'>
              <div className='text-start flex items-start justify-start'>{exp.startYear} –––– {exp.endYear}</div>
              <div className='order-2 md:order-1 flex justify-between py-5 md:p-0'>
                <div className='text-[#686868]'>Position</div>
                <div>{exp.position}</div>
              </div>
              <div className='order-1 md:order-2 text-start py-10 md:py-5 lg:py-0 text-[#686868] '>{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Experience