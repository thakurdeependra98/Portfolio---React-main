import { Route, Routes } from "react-router-dom"
import About from "../pages/About.jsx"
import Layout from "../components/Layout.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
const route =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Layout/>} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element= {<Projects/>} />
            <Route path="/contact" element= {<Contact/>}/>    
        </Routes>
        </>
    )
}
export default route;