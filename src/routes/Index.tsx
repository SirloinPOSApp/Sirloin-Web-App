import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customer from "../pages/Customer";

import Homepage from "../pages/Homepage";
import { Login } from "../pages/Login";
import Product from "../pages/Product";
import { Register } from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
