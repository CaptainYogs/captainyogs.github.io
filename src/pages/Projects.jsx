import ProjectItem from '../components/ProjectItem.jsx';
const projectList = [
    {
        imgSrc: 'munchM.png',
        title: 'Munch Mysteries',
        description: 'Free to Use Website to find the best food spots in chennai, some unknown some Mysterious.',
        link: 'https://munch-mysteries.onrender.com/'
    },
    {
        imgSrc: 'moviez.jpg',
        title: 'Moviez Vault',
        description: 'Search for your favourite Movies and TV Shows!',
        link: 'https://yogeshr6.github.io/Moviez-Vault/'
    },
    {
        imgSrc: 'metric.jpg',
        title: 'Metric Magic',
        description: 'Smart and Simple Online Unit Converter!!',
        link: 'https://yogeshr6.github.io/Metric-Magic/'
    },
    {
        imgSrc: 'evarsity.jpg',
        title: 'Attendance Manager',
        description: 'Browser Extension to manage attendance in Evarsity.',
        link: 'https://github.com/YogeshR6/Evarsity-Attendance-Extension'
    },
    {
        imgSrc: 'calc.jpg',
        title: 'Calculator',
        description: 'A Simple Calculator. Made with Python using Tkinter.',
        link: 'https://github.com/YogeshR6/Simple-Calculator'
    }
]
export default function Projects() {
    return (
        <div className="px-8 md:px-12 text-stone-50">
            <h1 className='py-8 text-4xl md:text-5xl font-semibold font-[Montserrat]'>Projects</h1>
            <hr />
            <div className="grid grid-cols-1 pb-4 md:py-10 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {projectList.map((project, index) => (
                    <ProjectItem
                        key={index}
                        imgSrc={project.imgSrc}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}