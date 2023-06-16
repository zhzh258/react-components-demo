import useNavigation from "../hooks/useNavigation";
import classNames from "classnames"

function Link({ href, children, className }) {
    const { navigate } = useNavigation()
    const { currentPath } = useNavigation();

    const classes = classNames(
        "text-blue-500",
        className,
        currentPath == href && "font-bold border-l-4 border-blue-500 pl-2"
    )

    const handleClick = (event)=> {
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(href);
    }


    return (
        <a className={classes} href={href} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link