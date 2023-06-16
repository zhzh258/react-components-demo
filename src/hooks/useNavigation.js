import NavigationContext from "../context/navigation";
import { useContext } from "react";

function useNavigation() {
    return useContext(NavigationContext);
    // return value: Obj of all context
}

export default useNavigation;