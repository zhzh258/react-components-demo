import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(()=> {
        const popstateHandler = ()=> {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", popstateHandler);
        
        const cleanUp = ()=> {
            window.removeEventListener("popstate", popstateHandler);
        }
        return cleanUp;
    }, [])

    const navigate = (href)=> {
        window.history.pushState({}, "", href);
        setCurrentPath(href);
    }

    const sharedValue = {
        currentPath,
        navigate
    }

    return (
        <NavigationContext.Provider value={sharedValue}>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavigationProvider };
export default NavigationContext; 