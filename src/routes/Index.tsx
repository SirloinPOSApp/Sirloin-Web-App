import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customer from "../pages/customers/Customer";
import CustomerInput from "../pages/customers/CustomerInput";
import { Login } from "../pages/auth/Login";
import Product from "../pages/products/Product";
import { TenantProfile } from "../pages/tenants/TenantProfile";
import { Register } from "../pages/auth/Register";
import Transaksi from "../pages/transactions/Transaksi";
import { TenantEdit } from "../pages/tenants/TenantEdit";
import HistoryBelanja from "../pages/products/HistoryBelanja";
import { LandingPage } from "../pages/LandingPage";
import { TransaksiDetail } from "../pages/transactions/TransaksiDetail";
import LaporanPenjualan from "../pages/products-admin/LaporanPenjualan";
import { Etalase } from "../pages/Etalase";
import Pembayaran from "../pages/Pembayaran";
import ProductInput from "../pages/products/ProductInput";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
    element: <ProductInput />,
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
  {
    path: "/pembayaran_detail",
    element: <Pembayaran />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
