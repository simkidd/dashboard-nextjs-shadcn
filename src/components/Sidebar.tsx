"use client";
import {
  BellIcon,
  CreditCard,
  Inbox,
  LineChart,
  Package,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

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

const Sidebar = () => {
  const menuList = MenuList;
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
                    className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
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
        icon: <LineChart />,
        name: "Overview",
        tooltip: "View overall performance and metrics",
      },
      {
        link: "/sales",
        icon: <ShoppingBag />,
        name: "Sales",
        tooltip: "Monitor sales statistics and trends",
      },
      {
        link: "/orders",
        icon: <Inbox />,
        name: "Orders",
        tooltip: "Manage and view customer orders",
      },
      {
        link: "/activity",
        icon: <BellIcon />,
        name: "Activity",
        tooltip: "Track recent activities and system logs",
      },
    ],
  },
  {
    group: "Products",
    items: [
      {
        link: "/products",
        icon: <Package />,
        name: "Product Management",
        tooltip: "Manage product details and inventory",
      },
      {
        link: "/categories",
        icon: <CreditCard />,
        name: "Categories",
        tooltip: "Organize products into categories",
      },
      {
        link: "/brands",
        icon: <CreditCard />,
        name: "Brands",
        tooltip: "Manage product brands",
      },
      {
        link: "/reviews",
        icon: <CreditCard />,
        name: "Reviews",
        tooltip: "View and manage product reviews",
      },
    ],
  },
  {
    group: "Inventory",
    items: [
      {
        link: "/inventory",
        icon: <Package />,
        name: "Stock Levels",
        tooltip: "Check and manage stock levels",
      },
      {
        link: "/inventory/adjustments",
        icon: <CreditCard />,
        name: "Adjustments",
        tooltip: "Adjust inventory quantities",
      },
      {
        link: "/inventory/warehouse",
        icon: <Package />,
        name: "Warehouse",
        tooltip: "Manage warehouse locations",
      },
    ],
  },
  {
    group: "Orders",
    items: [
      {
        link: "/orders",
        icon: <Inbox />,
        name: "Order Management",
        tooltip: "Manage customer orders and order status",
      },
      {
        link: "/returns",
        icon: <CreditCard />,
        name: "Returns",
        tooltip: "Handle product returns and exchanges",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        link: "/settings/general",
        icon: <Settings />,
        name: "General Settings",
        tooltip: "Adjust general application settings",
      },
      {
        link: "/settings/security",
        icon: <CreditCard />,
        name: "Security",
        tooltip: "Update security and access settings",
      },
      {
        link: "/settings/notifications",
        icon: <BellIcon />,
        name: "Notifications",
        tooltip: "Configure notification preferences",
      },
      {
        link: "/settings/integrations",
        icon: <CreditCard />,
        name: "Integrations",
        tooltip: "Manage third-party integrations",
      },
    ],
  },
  {
    group: "Support",
    items: [
      {
        link: "/support/tickets",
        icon: <Inbox />,
        name: "Support Tickets",
        tooltip: "View and respond to support tickets",
      },
      {
        link: "/support/faq",
        icon: <BellIcon />,
        name: "FAQ",
        tooltip: "Frequently Asked Questions",
      },
      {
        link: "/support/contact",
        icon: <CreditCard />,
        name: "Contact Support",
        tooltip: "Get in touch with customer support",
      },
    ],
  },
];
