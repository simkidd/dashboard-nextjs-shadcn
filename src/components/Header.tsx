"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./Sidebar";
import { ThemeToggler } from "./ThemeToggler";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

interface Notification {
  text: string;
  date: string;
  read: boolean;
}

const Header = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      text: "This is a notification",
      date: "02-01-2015",
      read: true,
    },
    {
      text: "This is another notification",
      date: "02-01-2015",
      read: false,
    },
  ]);

  // Count unread notifications
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const menuList = MenuList;

  return (
    <div className="w-full bg-gray-800 sticky top-0 z-[5] flex items-center">
      <div className="px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] p-0">
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
                          <SheetClose asChild>
                            <Link
                              href={link}
                              className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
                            >
                              <span>{icon}</span>
                              <span className="text-sm">{name}</span>
                            </Link>
                          </SheetClose>
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
          </SheetContent>
        </Sheet>
      </div>
      <div className="container px-4 py-4 mx-auto flex items-center justify-end">
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative" variant="outline" size="icon">
                {unreadCount > 0 && (
                  <div className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadCount}
                  </div>
                )}
                <BellIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              {notifications.length === 0 ? (
                <DropdownMenuItem className="py-2 px-3 text-gray-400">
                  No notifications
                </DropdownMenuItem>
              ) : (
                notifications.map((notification, index) => (
                  <DropdownMenuItem
                    key={index}
                    className={`py-2 px-3 cursor-pointer flex items-start gap-2 transition-colors ${
                      !notification.read
                        ? "hover:bg-gray-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full ${
                        !notification.read ? "bg-red-500" : "bg-gray-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm">{notification.text}</p>
                      <p className="text-xs text-gray-400">
                        {notification.date}
                      </p>
                    </div>
                  </DropdownMenuItem>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggler */}
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default Header;
