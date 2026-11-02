import ProjectCard from "../components/ProjectCard"

export default function Projects({ datas }) {
    return (
        <div id="projects" className="px-5 scroll-mt-15 py-5 bg-base-200">
            <h1 className="text-xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datas.map((data, index) => {
                    return (
                        <ProjectCard key={index} title={data.title} stack={data.stack} desc={data.desc} />
                    )
                })}
            </div>
        </div>
    )
}