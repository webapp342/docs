import { Button } from "@/components/ui/button";

interface TableOfContentsProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
}

export default function TableOfContents({ sections, activeSection }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold mb-2">Contents</h3>
      {sections.map((section) => (
        <Button
          key={section.id}
          variant={activeSection === section.id ? "secondary" : "ghost"}
          className="justify-start text-left"
          onClick={() => scrollToSection(section.id)}
        >
          {section.title}
        </Button>
      ))}
    </div>
  );
}
