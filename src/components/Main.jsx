import Projects from "../pages/Projects";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

export default function Main() {
    const datas = [
        {
            title: 'titlez111',
            stack: 'stacksz',
            desc: 'descz'
        },
        {
            title: 'titlez2',
            stack: 'stacksz2',
            desc: 'descz2'
        },
        {
            title: 'titlez2',
            stack: 'stacksz2',
            desc: 'descz2'
        },
    ]
    return (
        <div>
            <Navbar />
            <br />
            <Projects datas={datas} />
        </div>
    )
}