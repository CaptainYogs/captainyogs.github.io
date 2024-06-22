export default function Home() {
    return (
        <div className='px-4 md:px-12 text-stone-50'>
            <h1 className='py-8 text-4xl md:text-5xl font-semibold font-[Montserrat]'>Hello there!!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center text-stone-50'>
                <div>
                    <p className='font-[Montserrat] text-xl md:text-2xl md:pt-6 lg:pt-0 pb-6'>Fourth-year Computer Science student with a passion for coding. I am looking for an internship or entry-level position in software development.
                    </p>
                    <div className='gap-x-12 pt-6 hidden xl:flex'>
                        <i className='fa-brands fa-react fa-6x text-white transition-all duration-300 hover:scale-110 hover:text-[#61dbfb]'></i>
                        <i className='fa-brands fa-node fa-6x text-white transition-all duration-300 hover:scale-110 hover:text-[#3c873a]'></i>
                        <i className='fa-brands fa-python fa-6x text-white transition-all duration-300 hover:scale-110'></i>
                        <img src='https://www.svgrepo.com/show/330233/cplusplus.svg' className='w-24 invert transition-all duration-300 hover:scale-110' />
                        <img src='/mongo.svg' className='w-24 transition-all duration-300 hover:scale-110' />
                    </div>
                </div>
                <div className='flex justify-center pt-8 lg:pt-0 lg:justify-end'>
                    <img className='w-4/5 rounded-full transition-all duration-300 hover:scale-105' src='/dp2.jpg' alt='Profile Picture' />
                </div>
            </div>
        </div>
    )
}