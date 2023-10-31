import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homes/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>,
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
          path: '/bookings',
          element: <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        },
      ]
    },
  ]);

  export default router;