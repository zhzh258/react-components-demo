import Accordion from "../components/Accordion"

function AccordionPage() {
  // item is an array of obj: {label: ..., content: ...}
  const items = [
    {
      label: "label 000",
      content: "This is my first content\nnew line\nnew line\nnew line"
    },
    {
      label: "label 001",
      content: "This is my second content\nnew line\nnew line\nnew line"
    },
    {
      label: "label 002",
      content: "This is my third content\nnew line\nnew line\nnew line"
    }
  ]
  
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}


export default AccordionPage;
    