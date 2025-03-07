import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@app/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Practical DevSecOps",
  description: "Practical DevSecOps Training and Certification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
