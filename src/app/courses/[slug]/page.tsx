import TerminalWrapper from "@app/components/layouts/terminal-wrapper";
import { ScrollArea } from "@app/components/ui/scroll-area";

interface IPageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: IPageProps) => {
  const { slug } = await params;

  return (
    <div className="w-full h-full grid md:grid-cols-3 grid-cols-1">
      <ScrollArea className="h-[95vh]">
        <div className="p-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            ls
          </h4>
          <blockquote className="mt-6 border-l-2 pl-6 italic">2 min</blockquote>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The first command we&apos;re going to look at is <code>ls</code>. A
            command is a directive to the computer to perform a specific task.
            When you type <code>ls</code>, the command line looks at the
            directory you are in, and then “lists” all the files and directories
            inside of it. Be sure to type the letter <strong>l</strong> as in
            “List” and not the number 1.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            In the terminal, the first thing you see is <code>$</code>. This is
            called a <strong>shell prompt</strong>. It appears when the terminal
            is ready to accept a command.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">If we typed:</p>

          <pre>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              $ ls
            </code>
          </pre>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            the terminal would display our current directory’s files and
            directories:
          </p>

          <pre>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              2014 2015 hardware.txt
            </code>
          </pre>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The directories <code>2014</code>, <code>2015</code>, and the file
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              hardware.txt
            </code>{" "}
            are the contents of the current directory.
          </p>
        </div>
      </ScrollArea>
      <div className="col-span-2">
        <TerminalWrapper session={slug} />
      </div>
    </div>
  );
};

export default Page;
