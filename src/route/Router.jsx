import {
  createBrowserRouter
} from "react-router-dom";
// import Root from "../root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";


export  const router = createBrowserRouter([
  {
    path: "",
    element: <Home></Home>,
    errorElement:<Error></Error>,
  //   children:[
  //     {
  //       path: '/',
  //       element:<Home></Home>
  //     }
  // ]
  },
]);