export default function Home() {
    return (
        <div className='px-4 md:px-12 text-stone-50'>
            <h1 className='pt-8 pb-4 md:py-8 text-4xl md:text-5xl font-semibold font-[Montserrat]'>More about me!</h1>
            <div className='text-stone-50 font-[Montserrat] text-lg md:text-2xl flex flex-col lg:inline'>
                <img className='w-2/3 lg:w-2/6 lg:float-right self-center rounded-full transition-all duration-300 hover:scale-105' src='/pfp.gif' alt='Profile Picture' />
                <p>I am a <span className='font-bold'>fourth-year Computer Science</span> student at SRM Institute of Science and Technology, Vadapalani Campus, Chennai, with a strong passion for programming and technology. Throughout my academic journey, I have developed proficiency in various programming languages and frameworks, including <span className='font-bold'>Python, C, C++, React.js, Node.js, MongoDB, and MySQL.</span> My enthusiasm for learning new technologies is boundless, and I am particularly interested in the fields of Artificial Intelligence and automation.</p>
                <br />
                <p>I am currently <span className='font-bold'>seeking an internship or entry-level position</span> in full-stack web development or automation where I can leverage my skills and gain hands-on experience from industry professionals. I am eager to contribute to innovative projects and collaborate with a dynamic team to drive success. I am confident that my dedication, technical expertise, and eagerness to learn will enable me to make a positive impact on your organization.</p>
            </div>
        </div>
    )
}