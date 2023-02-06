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

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookie, , removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {}, [isLoggedOut]);

  const handleLogout = () => {
    // alert("Log Out");
    setIsLoggedOut(true);
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
            component={<Link to="/report-selling" />}
            id="laporan-penjualan"
            icon={<FiFileText size="20" />}
          >
            Laporan Penjualan
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
