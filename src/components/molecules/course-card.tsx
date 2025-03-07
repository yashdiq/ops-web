import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@app/components/ui/card";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Tag } from "../atoms/tag";
import React from "react";

interface CourseProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  tag: string;
  image: string;
}

export const CourseCard: React.FC<CourseProps> = ({
  title,
  description,
  duration,
  level,
  tag,
  image,
}) => {
  return (
    <Card className="overflow-hidden pt-0">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-full h-40 object-cover"
      />
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Tag text={tag} />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div>{level}</div>
        </div>
      </CardContent>
    </Card>
  );
};
