export default function Home() {
    return (
        <div className='px-16 text-stone-50'>
            <h1 className='py-8 text-5xl font-semibold font-[Montserrat]'>Hello there!!</h1>
            <div className='grid grid-cols-2 items-center text-stone-50 pt-4'>
                <div>
                    <p className='font-[Montserrat] text-2xl pb-6'>Fourth-year Computer Science student with a passion for coding. I am looking for an internship or entry-level position in software development.
                    </p>
                    <div className='flex gap-x-12 pt-6'>
                        <i className='fa-brands fa-react fa-6x text-white hover:scale-110'></i>
                        <i className='fa-brands fa-node fa-6x text-white hover:scale-110'></i>
                        <i className='fa-brands fa-python fa-6x text-white hover:scale-110'></i>
                        <img src='https://www.svgrepo.com/show/330233/cplusplus.svg' className='w-24 invert hover:scale-110' />
                        <img src='/mongo.svg' className='w-24 hover:scale-110' />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img className='w-4/5 rounded-full hover:outline hover:outline-2 hover:outline-cyan-300' src='/dp2.jpg' alt='Profile Picture' />
                </div>
            </div>
        </div>
    )
}