import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { ErrorComponent } from "./ErrorComponent";
import Home from "../Pages/Home";
import NavBar from "./NavbarComponent";
import LogIn from "../Pages/LogIn";
import SignIn from "../Pages/SignIn";
export const RouterR = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}
