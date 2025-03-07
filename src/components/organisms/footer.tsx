"use client";

const footerSections = [
  {
    title: "Company",
    links: ["About", "Careers", "Affiliates"],
  },
  {
    title: "Resources",
    links: [
      "Articles",
      "Blog",
      "Cheatsheets",
      "Code challenges",
      "Docs",
      "Projects",
      "Videos",
      "Workspaces",
    ],
  },
  {
    title: "Plans",
    links: ["For individuals", "For students", "For business", "Discounts"],
  },
  {
    title: "Community",
    links: ["Forums", "Chapters", "Events"],
  },
  {
    title: "Subjects",
    links: [
      "AI",
      "Cloud computing",
      "Code foundations",
      "Computer science",
      "Cybersecurity",
      "Data analytics",
      "Data science",
      "Data visualization",
      "Developer tools",
      "DevOps",
      "Game development",
      "IT",
      "Machine learning",
      "Math",
      "Mobile development",
      "Web design",
      "Web development",
    ],
  },
  {
    title: "Languages",
    links: [
      "Bash",
      "C",
      "C++",
      "C#",
      "Go",
      "HTML & CSS",
      "Java",
      "JavaScript",
      "Kotlin",
      "PHP",
      "Python",
      "R",
      "Ruby",
      "SQL",
      "Swift",
    ],
  },
  {
    title: "Career building",
    links: [
      "Career paths",
      "Career center",
      "Interview prep",
      "Professional certification",
      "Full catalog",
      "-",
      "Beta content",
      "Roadmap",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-foreground">
                Cookie Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-foreground">
                Do Not Sell My Personal Information
              </a>
              <span>|</span>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              Made with ♥ in NYC © 2025 Practical DevSecOps
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
