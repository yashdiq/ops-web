"use client";

import { cn } from "@app/lib/utils";
import { useScroll } from "framer-motion";
import { Search, Bell } from "lucide-react";
import { Button } from "../ui/button";
import { IHeaderNavigation } from "@app/interfaces/header-navigation";
import Logo from "../atoms/logo";
import HeaderNavigation from "../molecules/header-navigation";

const navigationItems: IHeaderNavigation[] = [
  {
    label: "My Home",
    href: "/learn",
  },
  {
    label: "Catalog",
    href: "#",
    items: [
      {
        title: "Popular",
        href: "#",
        description: "Most popular courses and paths",
      },
      {
        title: "Trending",
        href: "#",
        description: "Currently trending courses",
      },
      {
        title: "New Releases",
        href: "#",
        description: "Recently added content",
      },
    ],
  },
  {
    label: "Resources",
    href: "#",
    items: [
      { title: "Documentation", href: "#" },
      { title: "Cheatsheets", href: "#" },
      { title: "Articles", href: "#" },
    ],
  },
  {
    label: "Community",
    href: "#",
    items: [
      { title: "Forums", href: "#" },
      { title: "Discord", href: "#" },
      { title: "Events", href: "#" },
    ],
  },
  { label: "Pricing", href: "#" },
  { label: "Career Center", href: "#" },
  { label: "For Business", href: "#" },
];

const Header: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollYProgress.get() > 0.02
          ? "bg-white/80 backdrop-blur-sm border-b shadow-sm"
          : "bg-white border-b"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <HeaderNavigation navigations={navigationItems} />

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="bg-[#6400E4] hover:bg-[#5200BA] text-white">
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
