const Landing = () => {
    return (
        <div className='h-screen flex flex-col relative w-[100%]'>
            <div className='flex flex-col justify-center items-center absolute inset-0 '>
                <div className='w-[100%] gap-3 md:gap-2 lg:gap-4 px-4 md:-mt-40 text-[40px] md:text-[110px] lg:text-[150px] xl:text-[170px] flex flex-col justify-center '>
                    <div className='text-start'>
                        ISHIKA
                    </div>
                    <div className='text-end'>
                        MANCHANDA
                    </div>
                </div>
            </div>

            <div className='w-[90%] flex judtify-center items-center mx-auto absolute bottom-0 md:gap-2 lg:gap-4 pb-4 md:pb-10 lg:pb-15 text-base'>
                <div className='md:w-[50%] lg:w-[40%] text-[#686868]'>
                    Passionate about creating unforgettable and beautiful digital experiences.
                </div>
            </div>
        </div>

    )
}

export default Landing