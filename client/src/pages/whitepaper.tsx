import { Card } from "@/components/ui/card";
import TableOfContents from "../components/whitepaper/TableOfContents";
import Section from "../components/whitepaper/Section";
import Hero from "../components/whitepaper/Hero";
import LanguageSelector from "../components/whitepaper/LanguageSelector";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Whitepaper() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("vision");

  const sections = [
    {
      id: "vision",
      title: t('sections.vision.title'),
      content: t('sections.vision.content')
    },
    {
      id: "introduction",
      title: t('sections.introduction.title'),
      content: t('sections.introduction.content')
    },
    {
      id: "quantum-technology",
      title: t('sections.quantum-technology.title'),
      content: t('sections.quantum-technology.content')
    },
    {
      id: "financial-models",
      title: t('sections.financial-models.title'),
      content: t('sections.financial-models.content')
    },
    {
      id: "ai-systems",
      title: t('sections.ai-systems.title'),
      content: t('sections.ai-systems.content')
    },
    {
      id: "cryptoasset-analysis",
      title: t('sections.cryptoasset-analysis.title'),
      content: t('sections.cryptoasset-analysis.content')
    },
    {
      id: "security-protocols",
      title: t('sections.security-protocols.title'),
      content: t('sections.security-protocols.content')
    },
    {
      id: "market-dynamics",
      title: t('sections.market-dynamics.title'),
      content: t('sections.market-dynamics.content')
    },
    {
      id: "performance",
      title: t('sections.performance.title'),
      content: t('sections.performance.content')
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollTop;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top <= 100) {
          setActiveSection(section.id);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sticky sidebar for larger screens */}
          <div className="lg:w-64 order-2 lg:order-1">
            <Card className="p-4 lg:sticky lg:top-4 shadow-lg">
              <TableOfContents 
                sections={sections} 
                activeSection={activeSection}
              />
            </Card>
          </div>

          {/* Main content */}
          <div className="flex-1 order-1 lg:order-2">
            <div 
              className="prose prose-slate max-w-none lg:px-6 overflow-y-scroll h-[calc(100vh-12rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
              onScroll={handleScroll}
            >
              {sections.map((section) => (
                <Section 
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  content={section.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}