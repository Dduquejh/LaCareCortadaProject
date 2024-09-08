import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { ErrorComponent } from "./ErrorComponent";
import Home from "../Pages/Home";
import NavBar from "./NavbarComponent";
import LogIn from "../Pages/LogIn";
import SignIn from "../Pages/SignIn";
import Products from "../Pages/Products";
import ViewProduct from "../Product/ViewProduct";
import Models from "../Pages/Models";
import ViewModel from "../Model/ViewModel";

export const RouterR = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Product/:code" element={<ViewProduct />} />
                <Route path="/Models" element={<Models />}/>
                <Route path="/Model/:modelID" element={<ViewModel />}/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}
