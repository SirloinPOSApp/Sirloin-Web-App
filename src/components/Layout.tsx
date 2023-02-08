import React, { FC } from "react";
import {
  FiCalendar,
  FiFileText,
  FiHome,
  FiLogOut,
  FiMenu,
  FiPackage,
  FiRepeat,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { BsShop } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies, Cookies, withCookies } from "react-cookie";
import Swal from "../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { useEffect, useState } from "react";
import axios from "axios";
// import { messaging } from "../utils/firebase/firebase.utils.js";
// import { requestForToken } from "../utils/firebase/firebase.utils.js";
import toast, { Toaster } from "react-hot-toast";
import {
  requestForToken,
  onMessageListener,
} from "../utils/firebase/firebase.utils.js";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookie, setCookie, removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const checkToken = cookie.token;
  const [isTokenFound, setTokenFound] = useState(false);

  const [notification, setNotification] = useState({ title: "", body: "" });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }
  // requestForToken();

  // useEffect(() => {
  //   sendDeviceToken();
  // }, []);

  // const sendDeviceToken = () => {
  //   var storedToken = localStorage.getItem("device_token");
  //   axios
  //     .postForm("https://bluepath.my.id/register_device", {
  //       device_token: storedToken,
  //     })
  //     .then((response) => {
  //       // console.log(response);
  //       MySwal.fire({
  //         title: "Berhasil",
  //         text: response.data.message,
  //         icon: "success",
  //         confirmButtonAriaLabel: "ok",
  //       });
  //     })
  //     .catch((err) => {
  //       MySwal.fire({
  //         title: "Gagal",
  //         text: err.response.data.message,
  //         icon: "error",
  //         confirmButtonAriaLabel: "ok",
  //       });
  //     });
  // };

  onMessageListener()
    .then((payload: any) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  useEffect(() => {
    if (!checkToken) {
      navigate("/login");
      MySwal.fire({
        title: "Login First",
        icon: "info",
        confirmButtonAriaLabel: "ok",
      });
    }
    console.log("cookie:", cookie.id);
    requestForToken();
    if (notification?.title) {
      notify();
    }
    console.log("asas", notification);
  }, [notification]);

  const handleLogout = () => {
    // alert("Log Out");
    setIsLoggedOut(!isLoggedOut);
    removeCookie("token", { path: "/" });
    removeCookie("id", { path: "/" });
    removeCookie("business_name", { path: "/" });
    removeCookie("email", { path: "/" });
    MySwal.fire({
      title: "Berhasil Logout",
      // text: response.data.message,
      icon: "success",
      confirmButtonAriaLabel: "ok",
    }).then(() => {
      navigate("/login");
      window.location.reload();
    });
  };

  return (
    <div className="flex w-full h-screen bg-white overflow-auto">
      <Toaster />
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "teal",
          },
        }}
        className="h-full"
      >
        <Menu className="text-white">
          <button id="burger" className="p-7" onClick={() => collapseSidebar()}>
            {<FiMenu size="30" />}
          </button>

          {cookie.id != 1 ? (
            <div>
              <MenuItem
                component={<Link to="/landing" />}
                id="home"
                icon={<FiHome size="20" />}
              >
                Home
              </MenuItem>
              <MenuItem
                component={<Link to="/products" />}
                id="product"
                icon={<FiPackage size="20" />}
              >
                Product
              </MenuItem>

              <MenuItem
                component={<Link to="/etalase" />}
                id="etalase-belanja"
                icon={<FiShoppingBag size="20" />}
              >
                Etalase Belanja
              </MenuItem>

              <MenuItem
                component={<Link to="/customer" />}
                id="customer"
                icon={<FiUsers size="20" />}
              >
                Customer
              </MenuItem>

              {/* <MenuItem
                component={<Link to="/report-selling" />}
                id="laporan-penjualan"
                icon={<FiFileText size="20" />}
              >
                Laporan Penjualan
              </MenuItem> */}

              <MenuItem
                component={<Link to="/transaction" />}
                id="laporan-transaksi"
                icon={<FiRepeat size="20" />}
              >
                Laporan Transaksi
              </MenuItem>

              <MenuItem
                component={<Link to="/history-shopping" />}
                id="history-pembelanjaan"
                icon={<FiCalendar size="20" />}
              >
                History Pembelanjaan
              </MenuItem>

              <MenuItem
                component={<Link to="/profile-tenant" />}
                id="profil-tenant"
                icon={<BsShop size="20" />}
              >
                Profil Tenant
              </MenuItem>

              <MenuItem
                onClick={() => handleLogout()}
                id="logout"
                icon={<FiLogOut size="20" />}
              >
                Log Out
              </MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem
                component={<Link to="/landing" />}
                id="home"
                icon={<FiHome size="20" />}
              >
                Home
              </MenuItem>
              <MenuItem
                component={<Link to="/products" />}
                id="product"
                icon={<FiPackage size="20" />}
              >
                Product
              </MenuItem>

              {/* <MenuItem
                component={<Link to="/etalase" />}
                id="etalase-belanja"
                icon={<FiShoppingBag size="20" />}
              >
                Etalase Belanja
              </MenuItem> */}

              {/* <MenuItem
                component={<Link to="/customer" />}
                id="customer"
                icon={<FiUsers size="20" />}
              >
                Customer
              </MenuItem> */}

              <MenuItem
                component={<Link to="/report-selling" />}
                id="laporan-penjualan"
                icon={<FiFileText size="20" />}
              >
                Laporan Penjualan
              </MenuItem>

              {/* <MenuItem
                component={<Link to="/transaction" />}
                id="laporan-transaksi"
                icon={<FiRepeat size="20" />}
              >
                Laporan Transaksi
              </MenuItem>

              <MenuItem
                component={<Link to="/history-shopping" />}
                id="history-pembelanjaan"
                icon={<FiCalendar size="20" />}
              >
                History Pembelanjaan
              </MenuItem> */}

              <MenuItem
                component={<Link to="/profile-tenant" />}
                id="profil-tenant"
                icon={<BsShop size="20" />}
              >
                Profile Super Admin
              </MenuItem>

              <MenuItem
                onClick={() => handleLogout()}
                id="logout"
                icon={<FiLogOut size="20" />}
              >
                Log Out
              </MenuItem>
            </div>
          )}
        </Menu>
      </Sidebar>
      <main className="h-full w-full overflow-auto">{children}</main>
    </div>
  );
};

export const LayoutPlain: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen  flex flex-col overflow-auto ">
      <div className="h-full w-full overflow-auto ">{children}</div>
    </div>
  );
};
