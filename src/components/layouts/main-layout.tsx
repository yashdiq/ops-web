import Footer from "../organisms/footer";
import Header from "../organisms/header";

interface MainLayoutProps {
  children: React.ReactNode;
  mobileAside?: React.ReactNode;
  desktopAside?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  mobileAside,
  desktopAside,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col pt-16">
        {mobileAside && mobileAside}
        <div className="flex flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex-col md:flex-row flex w-full">
            {desktopAside && desktopAside}
            <main className="flex-1 pt-6 pb-6 pl-6">{children}</main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
