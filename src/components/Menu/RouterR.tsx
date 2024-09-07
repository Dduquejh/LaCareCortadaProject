import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { ErrorComponent } from "./ErrorComponent";
import Home from "../Pages/Home";
import NavBar from "./NavbarComponent";
import LogIn from "../Pages/LogIn";
import SignIn from "../Pages/SignIn";
import Products from "../Pages/Products";
import ViewProduct from "../Product/ViewProduct";
export const RouterR = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/product/:code" element={<ViewProduct />} />
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}
