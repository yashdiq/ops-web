import CourseHeader from "../organisms/course-header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const CourseLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <CourseHeader />

      <div className="flex-1 flex flex-col pt-16">
        <div className="flex flex-1">
          <main className="mx-auto flex-col md:flex-row flex w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
