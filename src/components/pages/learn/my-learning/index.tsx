"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@app/components/ui/accordion";
import { Button } from "@app/components/ui/button";
import { Progress } from "@app/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@app/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@app/components/ui/tabs";
import { Pencil, PinIcon } from "lucide-react";

const modules = [
  {
    title: "Intro to the Command Line",
    progress: 0,
    items: [
      {
        type: "Article",
        title: "Introduction to Command Line",
        status: "completed",
      },
      {
        type: "Lesson",
        title: "Navigation",
        status: "locked",
      },
      {
        type: "Quiz",
        title: "Navigation",
        status: "locked",
      },
      {
        type: "Project",
        title: "Bicycle World",
        status: "locked",
      },
      {
        type: "Article",
        title: "Command Line Interface Setup",
        status: "locked",
      },
      {
        type: "Informational",
        title: "Next Steps",
        status: "locked",
      },
    ],
  },
  {
    title: "Learn Python 3",
    progress: 15,
    items: [
      {
        type: "Lesson",
        title: "If Statements",
        status: "locked",
      },
      {
        type: "Exercise",
        title: "Loops",
        status: "locked",
      },
    ],
  },
];

const MyLearning: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My learning</h1>
        <Button variant="ghost" className="gap-2">
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="in-progress" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="in-progress" className="relative">
                In progress
              </TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <div className="flex justify-end">
              <Select defaultValue="last-added">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-added">Last added</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <TabsContent value="in-progress" className="mt-6 space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {modules.map((item, index) => (
                <AccordionItem key={index} value={item.title}>
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <h6 className="text-sm text-muted-foreground mb-1">
                          Course
                        </h6>
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">
                          {item.progress}%
                        </span>
                        <Progress value={item.progress} className="h-2 w-32" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-2">
                      {item.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-50"
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center
                                  ${
                                    item.status === "completed"
                                      ? "bg-green-100 text-green-600"
                                      : item.status === "locked"
                                      ? "bg-gray-100"
                                      : "bg-blue-100 text-blue-600"
                                  }`}
                          >
                            {item.status === "completed"
                              ? "✓"
                              : item.status === "in-progress"
                              ? "→"
                              : "🔒"}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-muted-foreground">
                              {item.type}
                            </div>
                            <div className="font-medium">{item.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t">
                      <Button variant="ghost" className="gap-2">
                        <PinIcon className="h-4 w-4" />
                        Pin to top
                      </Button>
                      <div className="flex items-center gap-4">
                        <Button variant="link" className="text-[#6400E4]">
                          View syllabus
                        </Button>
                        <Button className="bg-[#6400E4] hover:bg-[#5200BA] text-white">
                          Continue
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyLearning;
