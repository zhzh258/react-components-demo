import Accordion from "../components/Accordion"

function AccordionPage() {
  // item is an array of obj: [{label: ..., content: ...}, ...]
  const items = [
    {
      label: "label A",
      content: "This is the first content"
    },
    {
      label: "label B",
      content: "This is the second content"
    },
    {
      label: "label C",
      content: "This is the third content"
    }
  ]
  
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}


export default AccordionPage;
    