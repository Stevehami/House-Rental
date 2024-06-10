import { createBrowserRouter } from "react-router-dom";
import Applayout from "../Layout/Applayout";
import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login"
import Register from "../src/Components/Register/Register";
import Rent from "../src/Components/Rent/Rent";

const Approutes = createBrowserRouter([{
    path: "/",
    element: <Applayout />,
    children: [{
        path:"/",
        element:<Home/>
    },{
        path:"/Login",
        element:<Login/>
    },{
        path:"/Register",
        element:<Register/>
    },{
        path:"/Rent",
        element:<Rent/>
    }]
}])

export default Approutes;