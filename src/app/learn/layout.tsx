import MainLayout from "@app/components/layouts/main-layout";
import DesktopSidebar from "@app/components/organisms/desktop-sidebar";
import MobileSidebar from "@app/components/organisms/mobile-sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical DevSecOps - Learn",
  description: "Practical DevSecOps Training and Certification",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout
      mobileAside={<MobileSidebar />}
      desktopAside={<DesktopSidebar />}
    >
      {children}
    </MainLayout>
  );
}
