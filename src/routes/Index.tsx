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
import React, { useState, useMemo } from "react";
import { userContext } from "../utils/context";
import CustomerEdit from "../pages/customers/CustomerEdit";
import ProductEdit from "../pages/products/ProductEdit";
import { HistoryBelanjaDetail } from "../pages/products/HistoryBelanjaDetail";

// const defaultGlobalState = {
//   num: 0,
//   text: "foo",
//   bool: false,
// };
// const globalStateContext =
//   React.createContext<typeof defaultGlobalState>(defaultGlobalState);
// const dispatchStateContext = React.createContext<
//   React.Dispatch<any> | undefined
// >(undefined);

// const GlobalStateProvider = ({ children }: any) => {
//   const [state, dispatch] = React.useReducer(
//     (state: any, newValue: any) => ({ ...state, ...newValue }),
//     defaultGlobalState
//   );
//   return (
//     <globalStateContext.Provider value={state}>
//       <dispatchStateContext.Provider value={dispatch}>
//         {children}
//       </dispatchStateContext.Provider>
//     </globalStateContext.Provider>
//   );
// };
// export const useGlobalState = () => [
//   React.useContext(globalStateContext),
//   React.useContext(dispatchStateContext),
// ];

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }

const App = () => {
  const [cookie, , removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
  const checkToken = cookie.token;

  const [user, setUser] = useState(false);
  const data = useMemo(() => ({ user, setUser }), [user]);

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
      path: "/detail-transaction/:transaction_id",
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
      path: "/detail-history-shopping/:transaction_id",
      element: <HistoryBelanjaDetail />,
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
        removeCookie("id");
        removeCookie("business_name");
        removeCookie("email");
      }
      return Promise.reject(error);
    }
  );

  return (
    <userContext.Provider value={data}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
};
export default App;
