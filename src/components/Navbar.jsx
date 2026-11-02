export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <   li><a>Link</a></li>
                    <li><a>Link</a></li>
                </ul>
            </div>
        </div>
    )
}