import { useContext } from "react"
import NavigationContext from "../context/navigation"


function Route({ path, children}) {
    const { currentPath } = useContext(NavigationContext);
    if(path === currentPath){ // display this path
        return children
    } else{ // don't display this paht
        return null
    }
}

export default Route;