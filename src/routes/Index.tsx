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
import { useCookies } from "react-cookie";
import axios from "axios";
import CustomerEdit from "../pages/customers/CustomerEdit";
import ProductEdit from "../pages/products/ProductEdit";

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
    path: "/edit-product/:product_id",
    element: <ProductEdit />,
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
    path: "/edit-customer/:customer_id",
    element: <CustomerEdit />,
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
  const [cookie, , removeCookie] = useCookies(["token", "id_user", "name"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config: any) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${checkToken}`;
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
        removeCookie("id_user");
        removeCookie("name");
      }
      return Promise.reject(error);
    }
  );

  return <RouterProvider router={router} />;
};
export default App;
