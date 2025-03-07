"use client";

import {
  BookOpen,
  Calendar,
  FolderGit2,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const sidebarLinks = [
  { icon: LayoutDashboard, key: "dashboard", label: "Dashboard" },
  { icon: BookOpen, key: "learning", label: "My Learning" },
  { icon: Calendar, key: "events", label: "Events" },
  { icon: FolderGit2, key: "projects", label: "Projects" },
  { icon: Users, key: "workspaces", label: "Workspaces" },
];

const DesktopSidebar: React.FC = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  return (
    <aside className="hidden md:block sticky top-16 self-start w-64 pt-6 pb-6 pr-6 bg-white">
      <nav className="flex flex-col gap-2">
        {sidebarLinks.map((link) => (
          <Button
            key={link.label}
            variant={link.key === page ? "secondary" : "ghost"}
            className="justify-start gap-2"
            onClick={() => router.push(`/learn?page=${link.key}`)}
          >
            <link.icon className="h-5 w-5" />
            {link.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
};

export default DesktopSidebar;
