import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@app/components/ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

const skills = [
  { name: "Bash", xp: 10, progress: 75 },
  { name: "Computer Science", xp: 10, progress: 45 },
  { name: "IT", xp: 10, progress: 30 },
];

export const SkillsCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Skills</CardTitle>
            <CardDescription>recently earned</CardDescription>
          </div>
          <Button variant="ghost">Most progress</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.xp} XP
                </span>
              </div>
              <Progress value={skill.progress} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
