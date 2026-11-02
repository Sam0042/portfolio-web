import ProjectCard from "../components/ProjectCard"

export default function Projects({ datas }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
                {datas.map((data, index) => {
                    return (
                        <ProjectCard key={index} title={data.title} stack={data.stack} desc={data.desc} />
                    )
                })}
            </div>
        </div>
    )
}