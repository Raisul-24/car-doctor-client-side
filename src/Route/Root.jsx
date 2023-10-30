import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import Login from "../Components/Login/Login";
import Registration from "../Components/Login/Registration";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root></Root>,
     errorElement: <ErrorPage></ErrorPage>,
     children: [
      {
         path:"/",
         element: <Home></Home>,
      },
      {
         path: "/about",
         element: <About></About>,
      },
      {
         path:'/blog',
         element: <Blog></Blog>,
      },
      {
         path: "/services",
         element: <Services></Services>,
      },
      {
         path: '/contact',
         element: <Contact></Contact>,
      },
      {
         path: '/login',
         element: <Login></Login>,
      },
      {
         path: '/signUp',
         element: <Registration></Registration>
      },
      {
         path: '/checkout/:id',
         element: <Checkout></Checkout>,
         loader: ({params}) => fetch(`http://localhost:3001/services/${params.id}`)
      }
     ]
   },
 ]);

 export default router;