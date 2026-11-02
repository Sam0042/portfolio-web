export default function Navbar() {
    return (
        <div className="navbar bg-base-300 shadow-sm sticky top-0 z-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-lg md:text-xl">Hisyam's Porftolio</a>
            </div>

            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                    <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="#projects">Projects</a></li>
                    <li><a>Education</a></li>
                    <li><a>Social</a></li>
                </ul>
            </div>
            <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <   li><a>Link</a></li>
                    <li><a>Link</a></li>
                </ul>
            </div>
        </div>
    )
}