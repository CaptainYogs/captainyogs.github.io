export default function Home() {
    return (
        <div className='px-4 md:px-12 text-stone-50'>
            <h1 className='py-8 text-4xl md:text-5xl font-semibold font-[Montserrat]'>More about me!</h1>
            <div className='text-stone-50 font-[Montserrat] text-2xl'>
                <img className='w-2/6 float-right rounded-full transition-all duration-300 hover:scale-105' src='/pfp.gif' alt='Profile Picture' />
                <p>I am a Fourth-year Computer Science student at SRM Institute of Science and Technology, Vadapalani Capmus, Chennai with a passion for coding. I am proficient in Python, C, C++, React.Js, Node.Js, MongoDB, MySQL and I am always eager to learn new languages and technologies. I am also interested in Artificial Intelligence and automation.</p>
                <br />
                <p>I am looking for an internship or entry-level position in full-stack web development or Automation where I can apply my skills and learn from experienced professionals.I am eager to start my career and I am confident that I can make a positive contribution to your team.</p>
            </div>
            <div className='gap-x-12 pt-6 hidden xl:flex'>
                <i className='fa-brands fa-react fa-6x text-white transition-all duration-300 hover:scale-110'></i>
                <i className='fa-brands fa-node fa-6x text-white transition-all duration-300 hover:scale-110'></i>
                <i className='fa-brands fa-python fa-6x text-white transition-all duration-300 hover:scale-110'></i>
                <img src='https://www.svgrepo.com/show/330233/cplusplus.svg' className='w-24 invert transition-all duration-300 hover:scale-110' />
                <img src='/mongo.svg' className='w-24 transition-all duration-300 hover:scale-110' />
            </div>
        </div>
    )
}