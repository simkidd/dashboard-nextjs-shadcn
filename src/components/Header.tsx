"use client";
import React, { useState } from "react";
import { ThemeToggler } from "./ThemeToggler";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon, Menu, MenuSquare } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

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
            <Sidebar />
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
