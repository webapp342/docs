import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import TableOfContents from "../components/whitepaper/TableOfContents";
import Section from "../components/whitepaper/Section";
import Hero from "../components/whitepaper/Hero";
import LanguageSelector from "../components/whitepaper/LanguageSelector";
import { useState, useEffect } from "react";
import { jsPDF } from 'jspdf';
import { useTranslation } from 'react-i18next';

// Move sections data to translation files
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

  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (2 * margin);
    let yPos = margin;

    // Helper function to add page number
    const addPageNumber = () => {
      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128);
      doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    };

    // Add cover page
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text('BoobaBlip', pageWidth/2, yPos + 40, { align: 'center' });

    doc.setFontSize(18);
    doc.text('Technical Whitepaper', pageWidth/2, yPos + 50, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, pageWidth/2, yPos + 60, { align: 'center' });

    addPageNumber();
    doc.addPage();
    yPos = margin;

    // Add table of contents
    doc.setFontSize(16);
    doc.text('Table of Contents', margin, yPos);
    yPos += 10;

    sections.forEach((section, index) => {
      doc.setFontSize(12);
      doc.text(`${index + 1}. ${section.title}`, margin, yPos);
      yPos += 8;

      if (yPos > pageHeight - margin) {
        addPageNumber();
        doc.addPage();
        yPos = margin;
      }
    });

    addPageNumber();
    doc.addPage();
    yPos = margin;

    // Process each section
    sections.forEach((section, index) => {
      // Section header with styling
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text(`${index + 1}. ${section.title}`, margin, yPos);
      yPos += 10;

      // Process content with better formatting
      doc.setFontSize(11);
      doc.setTextColor(51, 51, 51);

      // Split content into paragraphs
      const paragraphs = section.content.split('\n\n');

      paragraphs.forEach(paragraph => {
        // Handle bullet points
        if (paragraph.trim().startsWith('•')) {
          const lines = doc.splitTextToSize(paragraph, contentWidth - 10);
          lines.forEach(line => {
            doc.text(line, margin + 5, yPos);
            yPos += 6;

            if (yPos > pageHeight - margin) {
              addPageNumber();
              doc.addPage();
              yPos = margin;
            }
          });
        } else {
          // Regular paragraph
          const lines = doc.splitTextToSize(paragraph, contentWidth);
          lines.forEach(line => {
            doc.text(line, margin, yPos);
            yPos += 6;

            if (yPos > pageHeight - margin) {
              addPageNumber();
              doc.addPage();
              yPos = margin;
            }
          });
        }

        yPos += 4; // Add space between paragraphs
      });

      // Add extra space between sections
      yPos += 10;

      if (yPos > pageHeight - margin * 2) {
        addPageNumber();
        doc.addPage();
        yPos = margin;
      }

      addPageNumber();
    });

    // Save the PDF with improved name
    doc.save(`BoobaBlip-Technical-Whitepaper-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="lg:w-64 p-4 h-fit sticky top-4">
            <TableOfContents 
              sections={sections} 
              activeSection={activeSection}
            />
            <Button 
              className="w-full mt-4"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              {t('download-pdf')}
            </Button>
          </Card>

          <div 
            className="flex-1 prose prose-slate max-w-none overflow-y-auto h-[calc(100vh-2rem)]"
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
  );
}