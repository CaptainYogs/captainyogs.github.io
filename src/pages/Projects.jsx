import ProjectItem from '../components/ProjectItem.jsx';

export default function Projects() {
    return (
        <div className="px-8 text-stone-50">
            <h1 className='pb-8 text-5xl font-semibold'>Projects</h1>
            <div className="grid grid-cols-1 pb-4 md:py-10 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}