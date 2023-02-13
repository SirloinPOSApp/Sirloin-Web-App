import React, { FC } from "react";
import {
  FiCalendar,
  FiChevronsRight,
  FiFileText,
  FiHome,
  FiLogOut,
  FiMenu,
  FiPackage,
  FiRepeat,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";
import { CiWarning } from "react-icons/ci";
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  useProSidebar,
  menuClasses,
} from "react-pro-sidebar";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  requestForToken,
  onMessageListener,
} from "../utils/firebase/firebase.utils.js";

import logo from "../assets/logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
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

  const [notification, setNotification] = useState({ title: "", body: "" });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return notification.body.length > 30 ? (
      <div className="px-10 py-6  items-center  text-center flex flex-col">
        <p className="text-3xl font-bold mb-3 mt-3 capitalize">
          {notification?.title}
        </p>
        <p className="text-xl">{notification?.body}</p>
      </div>
    ) : (
      <div className="px-10 py-6 text-red-600 text-center  items-center   flex flex-col">
        <CiWarning className="w-20 h-20 text-yellow-400" />
        <p className="text-3xl font-bold mb-3 mt-3 capitalize">
          {notification?.title}
        </p>
        <p className="text-xl">{notification?.body}</p>
      </div>
    );
  }

  onMessageListener().then((payload: any) => {
    setNotification({
      title: payload?.notification?.title,
      body: payload?.notification?.body,
    });
  });
  // .catch((err) => console.log("failed: ", err));

  useEffect(() => {
    if (!checkToken) {
      navigate("/login");
      MySwal.fire({
        title: "Login First",
        icon: "info",
        confirmButtonAriaLabel: "ok",
      });
    }
    requestForToken();
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  const handleLogout = () => {
    setIsLoggedOut(!isLoggedOut);
    removeCookie("token", { path: "/" });
    removeCookie("id", { path: "/" });
    removeCookie("business_name", { path: "/" });
    removeCookie("email", { path: "/" });
    MySwal.fire({
      title: "Berhasil Logout",

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
          [`.${menuClasses.button}`]: {
            "&:hover": { color: "teal" },
          },
        }}
        className="h-full"
        breakPoint="lg"
      >
        <Menu className="text-white">
          <button id="burger" className="p-7" onClick={() => collapseSidebar()}>
            {<FiChevronsRight size="30" />}
          </button>
          <img src={logo} alt="logo" />

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

              <MenuItem
                component={<Link to="/report-selling" />}
                id="laporan-penjualan"
                icon={<FiFileText size="20" />}
              >
                Laporan Penjualan
              </MenuItem>

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
      <main className="h-full w-full overflow-auto">
        {broken && (
          <button
            className="btn btn-ghost rounded"
            onClick={() => toggleSidebar()}
          >
            <FiMenu size={30} />
          </button>
        )}
        {children}
      </main>
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
