import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../pages/Homepage";
import { Login } from "../pages/Login";
import Product from "../pages/Product";
import { Register } from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/products",
    element: <Product />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
