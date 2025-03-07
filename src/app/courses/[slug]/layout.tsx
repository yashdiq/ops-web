import CourseLayout from "@app/components/layouts/course-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical DevSecOps - Course",
  description: "Practical DevSecOps Training and Certification",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CourseLayout>{children}</CourseLayout>;
}
