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
          <MenuItem id="home" icon={<FiHome size="20" />}>
            Home
          </MenuItem>
          <MenuItem id="product" icon={<FiPackage size="20" />}>
            {" "}
            Product
          </MenuItem>
          <MenuItem id="etalase-belanja" icon={<FiShoppingBag size="20" />}>
            Etalase Belanja
          </MenuItem>
          <MenuItem id="customer" icon={<FiUsers size="20" />}>
            {" "}
            Customer
          </MenuItem>
          <MenuItem id="laporan-penjualan" icon={<FiFileText size="20" />}>
            Laporan Penjualan
          </MenuItem>
          <MenuItem id="laporan-transaksi" icon={<FiRepeat size="20" />}>
            {" "}
            Laporan Transaksi
          </MenuItem>
          <MenuItem id="history-pembelanjaan" icon={<FiCalendar size="20" />}>
            History Pembelanjaan
          </MenuItem>
          <MenuItem id="profil-tenant" icon={<BsShop size="20" />}>
            {" "}
            Profil Tenant
          </MenuItem>
          <MenuItem id="logout" icon={<FiLogOut size="20" />}>
            {" "}
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
