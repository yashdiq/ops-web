import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  MenuIcon,
  Bell,
  BookOpen,
  Calendar,
  FolderGit2,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "My Learning" },
  { icon: Calendar, label: "Events" },
  { icon: FolderGit2, label: "Projects" },
  { icon: Users, label: "Workspaces" },
];

const MobileSidebar: React.FC = () => {
  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <SheetTitle />
          <SheetDescription />
          <nav className="flex flex-col gap-4 mt-8">
            {sidebarLinks.map((link) => (
              <Button
                key={link.label}
                variant={link.active ? "secondary" : "ghost"}
                className="justify-start gap-2"
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default MobileSidebar;
