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
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { collapseSidebar } = useProSidebar();

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
          <Link to={"/landing"}>
            <MenuItem id="home" icon={<FiHome size="20" />}>
              Home
            </MenuItem>
          </Link>
          <Link to={"/products"}>
            <MenuItem id="product" icon={<FiPackage size="20" />}>
              Product
            </MenuItem>
          </Link>
          <Link to={"/etalase"}>
            <MenuItem id="etalase-belanja" icon={<FiShoppingBag size="20" />}>
              Etalase Belanja
            </MenuItem>
          </Link>
          <Link to={"/customer"}>
            <MenuItem id="customer" icon={<FiUsers size="20" />}>
              Customer
            </MenuItem>
          </Link>
          <Link to={"/report-selling"}>
            <MenuItem id="laporan-penjualan" icon={<FiFileText size="20" />}>
              Laporan Penjualan
            </MenuItem>
          </Link>
          <Link to={"/transaction"}>
            <MenuItem id="laporan-transaksi" icon={<FiRepeat size="20" />}>
              Laporan Transaksi
            </MenuItem>
          </Link>
          <Link to={"/history-shopping"}>
            <MenuItem id="history-pembelanjaan" icon={<FiCalendar size="20" />}>
              History Pembelanjaan
            </MenuItem>
          </Link>
          <Link to={"/profile-tenant"}>
            <MenuItem id="profil-tenant" icon={<BsShop size="20" />}>
              Profil Tenant
            </MenuItem>
          </Link>
          <Link to={"/login"}>
            <MenuItem id="logout" icon={<FiLogOut size="20" />}>
              Log Out
            </MenuItem>
          </Link>
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
