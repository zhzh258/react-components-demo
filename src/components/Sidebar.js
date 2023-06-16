import Link from "./Link";

function Sidebar({links}) {

    const renderedLinks = links.map((link, index)=> {
        return <Link className="mb-5" key={index} href={link.path}>{link.label}</Link>
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;