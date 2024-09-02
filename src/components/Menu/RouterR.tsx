import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { ErrorComponent } from "./ErrorComponent";
import Home from "../Pages/Home";
import NavBar from "./NavbarComponent";
export const RouterR = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}
