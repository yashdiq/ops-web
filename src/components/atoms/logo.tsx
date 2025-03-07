import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-xl font-bold">DevSecOps</span>
    </Link>
  );
};

export default Logo;
