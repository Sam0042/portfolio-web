import Projects from "../pages/Projects";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

export default function Main() {
    const datas = [
        {
            title: 'Sistem Informasi Masjid Roudhotul Jannah',
            stack: 'Fullstack',
            desc: 'descz'
        },
        {
            title: 'Traveking: Website booking hotel',
            stack: 'Fullstack',
            desc: 'descz2'
        },
        {
            title: 'Covid Rest API',
            stack: 'Backend',
            desc: 'descz2'
        },
        {
            title: 'Website Sekolah',
            stack: 'Fullstack',
            desc: 'descz2'
        },
        {
            title: 'Moviequ',
            stack: 'Frontend',
            desc: 'descz2'
        },
    ]
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects datas={datas} />
        </div>
    )
}