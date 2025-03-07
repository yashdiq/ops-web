import Dashboard from "@app/components/pages/learn/dashboard";
import MyLearning from "@app/components/pages/learn/my-learning";

interface IPageProps {
  searchParams: Promise<{ page: string }>;
}

const Page = async ({ searchParams }: IPageProps) => {
  const { page } = await searchParams;

  switch (page) {
    case "dashboard":
      return <Dashboard />;
    case "learning":
      return <MyLearning />;
    default:
      return <div className="max-w-5xl mx-auto space-y-8" />;
  }
};

export default Page;
