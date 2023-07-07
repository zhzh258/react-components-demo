import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";



// const options = [
//     { label: "Choose Red", value: "red"},
//     { label: "Choose Green", value: "green"},
//     { label: "Choose Blue", value: "blue"},
// ]
function Dropdown({ options, value, onSelect }){
    // DOM root of the dropdown component
    const divEle = useRef();
    // now divEle.current is the HTML element

    // isOpen === true: user is browsing the options
    const [isOpen, setIsOpen] = useState(false);

    // bind "eventHandler" to document
    useEffect(()=> {
        // whenever click on document
        const eventHandler = (event)=> {
            if(!divEle.current)
                return;
            if(divEle.current.contains(event.target)){ // event.target inside divEle.current
                // console.log("inside!")
                // do nothing
            } else{ // event.target outside divEle.current
                // console.log("outside!")
                // !isOpen
                setIsOpen(false);
            }
        }
        document.addEventListener("click", eventHandler, true)

        const cleanUp = ()=> {
            document.removeEventListener("click", eventHandler)
        }
        return cleanUp;
        // At these time cleanUp will be called: 
        //  The 2+ time useEffect() called
        //  The last time - Dropdown is removed from the screen
    }, [])

    // whenever user click on the panel of Dropdown
    const handleClick = ()=> {
        setIsOpen(!isOpen);
    }

    // whenever user clicks on an option, which is options[index]
    const handleOptionClick = (option)=> {
        setIsOpen(false);
        if(value === option){
            return;
        } else{
            // change parent_state "selection", cause a rerender
            onSelect(option);
            return;
        }
    }

    const renderedOptions = options.map((option, index)=> {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={index} onClick={()=> handleOptionClick(option)}>{option.label}</div>
    })

    // bind the panel value to parent_state 'selection'
    
    return (
        <div ref={divEle} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || "Select..."}
                {isOpen? <GoChevronDown /> : <GoChevronDown />}
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown