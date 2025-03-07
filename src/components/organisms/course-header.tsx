"use client";

import { cn } from "@app/lib/utils";
import { Button } from "../ui/button";
import { IHeaderNavigation } from "@app/interfaces/header-navigation";
import HeaderNavigation from "../molecules/header-navigation";
import Logo from "../atoms/logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const navigationItems: IHeaderNavigation[] = [
  {
    label: "My Home",
    href: "/learn",
  },
];

const CourseHeader: React.FC = () => {
  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 bg-white border-b")}>
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className="ml-4">
              <HeaderNavigation navigations={navigationItems} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button className="bg-[#6400E4] hover:bg-[#5200BA] text-white">
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
