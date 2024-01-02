"use client";

import { usePathname } from "next/navigation";

import { CalendarIcon, HomeIcon, ProjectorIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LuUser2 } from "react-icons/lu";

export default function Sidebar() {
  return (
    <>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <ProjectorIcon className="h-6 w-6" />
            <span>Task Tracker</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#">
              <ProjectorIcon className="h-4 w-4" />
              Projects
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              <UsersIcon className="h-4 w-4" />
              Team
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              <CalendarIcon className="h-4 w-4" />
              Schedule
            </Link>
            <div className="absolute bottom-2 px-8 flex items-center space-x-2 bg-slate-200 rounded-xl">
              <Avatar>
                <AvatarImage src={""} />
                <AvatarFallback>
                  <LuUser2 className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <div className="py-2 space-y-1">
                <div className="pt-1">John Doe</div>
                <span className="text-muted-foreground text-sm pb-1">
                  johndoe@gmail.com
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
