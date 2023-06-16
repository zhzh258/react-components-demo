import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"
import App from "./App"
import { NavigationProvider } from "./context/navigation"

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

// console.log(await searchImage("cars"))
    
root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
)