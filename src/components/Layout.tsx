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
          <button className="p-7" onClick={() => collapseSidebar()}>
            {<FiMenu size="30" />}
          </button>
          <MenuItem icon={<FiHome size="20" />}>Home</MenuItem>
          <MenuItem icon={<FiPackage size="20" />}> Product</MenuItem>
          <MenuItem icon={<FiShoppingBag size="20" />}>
            Etalase Belanja
          </MenuItem>
          <MenuItem icon={<FiUsers size="20" />}> Customer</MenuItem>
          <MenuItem icon={<FiFileText size="20" />}>Laporan Penjualan</MenuItem>
          <MenuItem icon={<FiRepeat size="20" />}> Laporan Transaksi</MenuItem>
          <MenuItem icon={<FiCalendar size="20" />}>
            History Pembelanjaan
          </MenuItem>
          <MenuItem icon={<BsShop size="20" />}> Profil Tenant</MenuItem>
          <MenuItem icon={<FiLogOut size="20" />}> Log Out</MenuItem>
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
