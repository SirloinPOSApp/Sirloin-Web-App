import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customer from "../pages/Customer";
import CustomerInput from "../pages/CustomerInput";

import Homepage from "../pages/Homepage";
import { Login } from "../pages/Login";
import Product from "../pages/Product";
import { TenantProfile } from "../pages/TenantProfile";
import { Register } from "../pages/Register";
import Transaksi from "../pages/Transaksi";
import { TenantEdit } from "../pages/TenantEdit";
import HistoryBelanja from "../pages/HistoryBelanja";
import { LandingPage } from "../pages/LandingPage";
import { TransaksiDetail } from "../pages/TransaksiDetail";
import LaporanPenjualan from "../pages/LaporanPenjualan";
import Etalase from "../pages/Etalase";

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
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/add-product",
    element: <Product />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "/add-customer",
    element: <CustomerInput />,
  },
  {
    path: "/transaction",
    element: <Transaksi />,
  },
  {
    path: "/detail-transaction",
    element: <TransaksiDetail />,
  },
  {
    path: "/profile-tenant",
    element: <TenantProfile />,
  },
  {
    path: "/edit-tenant",
    element: <TenantEdit />,
  },
  {
    path: "/history-shopping",
    element: <HistoryBelanja />,
  },
  {
    path: "/report-selling",
    element: <LaporanPenjualan />,
  },
  {
    path: "/etalase",
    element: <Etalase />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
