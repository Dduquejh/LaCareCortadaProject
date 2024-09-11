import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorComponent } from "./ErrorComponent";
import Home from "../Pages/Home";
import NavBar from "./NavbarComponent";
import LogIn from "../Pages/LogIn";
import SignIn from "../Pages/SignIn";
import Products from "../Pages/Products";
import ViewProduct from "../Product/ViewProduct";
import Models from "../Pages/Models";
import ViewModel from "../Model/ViewModel";
import Events from "../Pages/Events";
import { Gallery } from "../Pages/Gallery";
import ViewMedia from "../Media/ViewMedia";
import AdminPanel from "../Pages/AdminPanel";
import SignInUser from "../Pages/SignInUser";
import SignInAdmin from "../Pages/SignInAdmin";
import { Account } from "../Pages/Account";
import ContactUsComponent from "./ContactUsComponent";

interface RouterRProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

export const RouterR: React.FC<RouterRProps> = ({
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/LogIn"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignInUser" element={<SignInUser />} />
        <Route path="/SignInAdmin" element={<SignInAdmin />} />
        <Route
          path="/account"
          element={<Account setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product/:code" element={<ViewProduct />} />
        <Route path="/Models" element={<Models />} />
        <Route path="/Model/:modelID" element={<ViewModel />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Media/:id" element={<ViewMedia />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      <ContactUsComponent />
    </Router>
  );
};
