import { useState } from "react"
import { AiFillCaretDown,  AiFillCaretLeft} from "react-icons/ai";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index)=> {
        const isExpanded = index === expandedIndex;
        // content: false or item.content to displayed
        const content = isExpanded && <div className="border-b p-5">{item.content}</div>;
        // icon: DOWN or LEFT
        const icon = isExpanded ? <AiFillCaretDown /> : <AiFillCaretLeft />;
        
        const handleClick = ()=> {
            if(index !== expandedIndex)
                setExpandedIndex(index)
            else
                setExpandedIndex(-1)
        }

        return (
            <div className="border-x border-t rounded" key={index}>
                <div className="flex items-center justify-between bg-violet-300 border-b p-3 cursor-pointer" onClick={handleClick}>
                    <span>{item.label}</span>
                    <span>{icon}</span>
                </div>
                {content}     
            </div>
        )
    })

    return (
        <div className="w-2/3">
            {renderedItems}
            <br></br>
            <p>You are currently at Accordion "{expandedIndex === -1 ? "NONE" : items[expandedIndex].label}"</p>
        </div>
        
    )
}

export default Accordion;