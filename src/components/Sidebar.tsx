"use client";
import {
  ArchiveIcon,
  BarChartIcon,
  BellIcon,
  CalendarIcon,
  CreditCard,
  CreditCardIcon,
  HomeIcon,
  Inbox,
  LayersIcon,
  LineChart,
  Package,
  PackageIcon,
  PercentIcon,
  Settings,
  SettingsIcon,
  ShoppingBag,
  ShoppingCartIcon,
  TagIcon,
  TagsIcon,
  TrendingUpIcon,
  TruckIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

interface MenuItem {
  link: string;
  icon: React.ReactNode;
  name: string;
  tooltip: string;
}

interface MenuGroup {
  group: string;
  items: MenuItem[];
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuList = MenuList;

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="w-full h-full flex flex-col bg-gray-800 text-white">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <nav className="h-full overflow-y-auto px-4 py-2 flex flex-col space-y-6 scrollbar-hide">
        {menuList.map(({ group, items }, i) => (
          <div key={i} className="">
            <h4 className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">
              {group}
            </h4>
            <ul className="mt-2 space-y-2">
              {items.map(({ icon, link, name }, j) => (
                <li key={j}>
                  <Link
                    href={link}
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors ${
                      isActive(link)
                        ? "bg-gray-700 text-white"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    <span>{icon}</span>
                    <span className="text-sm">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* User Section */}
      <div className="flex flex-col items-center px-4 py-4 border-t border-gray-600 mt-auto">
        <Avatar>
          <AvatarImage src="" alt="User Avatar" />
          <AvatarFallback className="bg-gray-950">GD</AvatarFallback>
        </Avatar>
        <div className="text-center mt-2">
          <p className="text-base font-bold">Guillaume Duhan</p>
          <p className="text-xs text-neutral-500">Admin</p>
        </div>
        {/* Logout Button */}
        <Button
          variant="outline"
          className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-red-500 hover:bg-red-700 hover:text-white transition-colors"
          onClick={() => router.push("/login")}
        >
          <span>Logout</span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

export const MenuList: MenuGroup[] = [
  {
    group: "Dashboard",
    items: [
      {
        link: "/",
        icon: <HomeIcon />,
        name: "Overview",
        tooltip: "Overview of the store's performance",
      },
    ],
  },
  {
    group: "Products",
    items: [
      {
        link: "/products",
        icon: <PackageIcon />,
        name: "All Products",
        tooltip: "View and manage all products",
      },
      {
        link: "/products/categories",
        icon: <TagsIcon />,
        name: "Product Categories",
        tooltip: "Manage product categories",
      },
      {
        link: "/products/groups",
        icon: <LayersIcon />,
        name: "Product Groups",
        tooltip: "Manage product groups",
      },
      {
        link: "/brands",
        icon: <TagIcon />,
        name: "Brands",
        tooltip: "Manage product brands",
      },
    ],
  },
  {
    group: "Sales",
    items: [
      {
        link: "/sales/orders",
        icon: <ShoppingCartIcon />,
        name: "Orders",
        tooltip: "Manage customer orders",
      },
      {
        link: "/sales/customers",
        icon: <UsersIcon />,
        name: "Customers",
        tooltip: "View and manage customers",
      },
      {
        link: "/sales/discounts",
        icon: <PercentIcon />,
        name: "Discounts",
        tooltip: "Manage discount offers",
      },
    ],
  },
  {
    group: "Inventory",
    items: [
      {
        link: "/inventory/stock",
        icon: <ArchiveIcon />,
        name: "Stock Management",
        tooltip: "Manage product stock levels",
      },
      {
        link: "/inventory/suppliers",
        icon: <TruckIcon />,
        name: "Suppliers",
        tooltip: "Manage suppliers",
      },
    ],
  },
  {
    group: "Analytics",
    items: [
      {
        link: "/analytics/sales",
        icon: <BarChartIcon />,
        name: "Sales Reports",
        tooltip: "View sales analytics",
      },
      {
        link: "/analytics/top-selling",
        icon: <TrendingUpIcon />,
        name: "Top Selling Products",
        tooltip: "View top selling products",
      },
      {
        link: "/analytics/monthly",
        icon: <CalendarIcon />,
        name: "Monthly Reports",
        tooltip: "View monthly performance",
      },
    ],
  },
  {
    group: "Notifications",
    items: [
      {
        link: "/notifications",
        icon: <BellIcon />,
        name: "Notifications",
        tooltip: "View notifications",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        link: "/settings/profile",
        icon: <UserIcon />,
        name: "Profile Settings",
        tooltip: "Manage user profile settings",
      },
      {
        link: "/settings/store",
        icon: <SettingsIcon />,
        name: "Store Settings",
        tooltip: "Configure store settings",
      },
      {
        link: "/settings/payment",
        icon: <CreditCardIcon />,
        name: "Payment Methods",
        tooltip: "Manage payment methods",
      },
    ],
  },
];
