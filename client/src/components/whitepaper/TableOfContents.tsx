import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface TableOfContentsProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
}

export default function TableOfContents({ sections, activeSection }: TableOfContentsProps) {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold mb-2">{t('toc')}</h3>
      <div className="flex flex-col gap-1.5">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "secondary" : "ghost"}
            className="justify-start text-left break-words whitespace-normal h-auto min-h-[2.5rem] px-3 py-2"
            onClick={() => scrollToSection(section.id)}
          >
            <span className="text-sm line-clamp-2">{section.title}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}