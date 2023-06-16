import Route from "./components/Route";
import Sidebar from "./components/Sidebar"
import AccordionPage from "./pages/AccordionPage"
import DropdownPage from "./pages/DropdownPage"
import ButtonPage from "./pages/ButtonPage"
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
    const links = [
        { label: "Dropdown", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Button", path: "/button" },
        { label: "Modal", path: "/modal" },
        { label: "Table", path: "/table" },
    ]

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar links={links}/>
            <div className="col-span-5">
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/button">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
            </div>
        </div>
    )
}


export default App;