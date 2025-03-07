"use client";

import { SkillsCard } from "@app/components/molecules/skills-card";
import { LearningProgress } from "@app/components/organisms/learning-progress";
import { RecommendedCourses } from "@app/components/organisms/recommended-courses";
import { ICourse } from "@app/interfaces/course";

const recommendedCourses: ICourse[] = [
  {
    title: "Learn the Command Line",
    description:
      "Learn about the command line, starting with navigating the file system.",
    duration: "4 hours",
    level: "Beginner",
    tag: "In progress",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Learn the Command Line: Navigation",
    description:
      "Learn how to manage directories and files from the command line.",
    duration: "1 hour",
    level: "Beginner",
    tag: "Free course",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Configure the Environment",
    description:
      "Learn to set up your environment and customize your settings.",
    duration: "1 hour",
    level: "Beginner",
    tag: "Free course",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const latestCourse: ICourse = {
  title: "Intro to the Command Line",
  href: "/courses/learn-the-command-line-configuring-the-environment",
  description: "Current Module: Navigating the File System",
  duration: "2 mins",
  level: "Beginner",
  tag: "In progress",
  image:
    "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
};

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <LearningProgress data={latestCourse} />
      <SkillsCard />
      <RecommendedCourses courses={recommendedCourses} />
    </div>
  );
};

export default Dashboard;
