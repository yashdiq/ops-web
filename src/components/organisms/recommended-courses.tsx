import { ICourse } from "@app/interfaces/course";
import React from "react";
import { Button } from "../ui/button";
import { CourseCard } from "../molecules/course-card";
import { ArrowRight } from "lucide-react";

interface IProps {
  courses: ICourse[];
}

export const RecommendedCourses: React.FC<IProps> = ({ courses }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recommended for you</h2>
        <Button variant="ghost" className="text-[#6400E4]">
          View more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};
