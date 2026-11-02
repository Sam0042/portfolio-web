
export default function ProjectCard({ title, stack, img, desc }) {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <small>{stack}</small>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary"> See Repository</button>
                </div>
            </div>
        </div>
    )
}