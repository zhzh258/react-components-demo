import { useContext } from "react"
import NavigationContext from "../context/navigation"


function Route({ path, children}) {
    const { currentPath } = useContext(NavigationContext);
    if(path === currentPath){ // show this path
        return children
    } else{ // don't show this path
        return null
    }
}

export default Route;