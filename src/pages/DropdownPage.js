import Dropdown from "../components/Dropdown"
import { useState } from "react"

function DropdownPage() {
    // selection === option
    const [selection_1, setSelection_1] = useState(null)
    const [selection_2, setSelection_2] = useState(null)

    const handleSelect_1 = (newSelection)=> {
        setSelection_1(newSelection)
    }

    const handleSelect_2 = (newSelection)=> {
        setSelection_2(newSelection)
    }

    const options_1 = [
        { label: "Prefer Red", value: "red"},
        { label: "Prefer Green", value: "green"},
        { label: "Prefer Blue", value: "blue"},
    ]

    const options_2 = [
        { label: "Choose 100", value: "100"},
        { label: "Choose 200", value: "200"},
        { label: "Choose 300", value: "300"},
    ]
  
    return (
        <div>
            <div className="flex">
                <Dropdown options={options_1} value={selection_1} onSelect={handleSelect_1}/>
                <Dropdown options={options_2} value={selection_2} onSelect={handleSelect_2}/>
            </div>
            <br></br>
            <p>Your Selection:  {selection_1 ? selection_1.value : "NONE"}  +  {selection_2 ? selection_2.value : "NONE"}</p>
        </div>
    )
}


export default DropdownPage;