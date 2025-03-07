import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@app/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { ICourse } from "@app/interfaces/course";

interface IProps {
  data: ICourse;
}

export const LearningProgress: React.FC<IProps> = ({ data }) => {
  return (
    <Card className="bg-gradient-to-r from-[#6400E4] to-[#8A3FFC] text-white">
      <CardHeader>
        <CardTitle className="text-white">Keep learning</CardTitle>
        <CardDescription className="text-white/80">
          Continue your journey from where you left off
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="font-semibold mb-2">{data.title}</h3>
          <p className="text-sm text-white/80 mb-4">{data.description}</p>
          <Button>
            <Link href={data.href ?? "/"}>Resume Learning</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
