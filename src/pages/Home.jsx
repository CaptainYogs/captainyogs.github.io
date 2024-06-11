export default function Home() {
    return (
        <div className='h-screen md:text-base text-sm px-8 pt-8 grid grid-cols-2 items-start justify-items-center text-stone-50'>
            <div>
                <h1 className='pb-8 text-5xl font-semibold'>Hello there!!</h1>
                <p>I am a third-year Computer Science student at SRMIST with a passion for coding. I am proficient in Python, C, C++, HTML ,and CSS, and I am always eager to learn new languages and technologies. I am also interested in web development and automation. I am looking for an internship or entry-level position in software development where I can apply my skills and learn from experienced professionals.I am eager to start my career and I am confident that I can make a positive contribution to your team.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <img className='w-2/3 rounded-full hover:outline hover:outline-2 hover:outline-cyan-300' src='/dp2.jpg' alt='Profile Picture' />
            </div>
        </div>
    )
}