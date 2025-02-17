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

export default function Whitepaper() {
  const { t, i18n } = useTranslation();
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
    // PDF'i geçerli dilde oluştur
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      compress: true,
      hotfixes: ["px_scaling"] // PDF ölçeklendirme düzeltmesi
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (2 * margin);
    let yPos = margin;

    // Font boyutlarını ayarla
    const titleSize = 24;
    const subtitleSize = 18;
    const headingSize = 14;
    const bodySize = 11;

    // Sayfa numarası ekleme fonksiyonu
    const addPageNumber = () => {
      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128);
      const pageNumber = doc.getNumberOfPages();
      doc.text(`${pageNumber}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    };

    // Üst bilgi ekleme fonksiyonu
    const addHeader = () => {
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      const headerText = `BoobaBlip - ${new Date().toLocaleDateString(i18n.language)}`;
      doc.text(headerText, margin, 10);
    };

    // PDF meta verileri
    doc.setProperties({
      title: `BoobaBlip Technical Whitepaper - ${new Date().toLocaleDateString(i18n.language)}`,
      subject: 'Quantum Computing and AI in Finance',
      author: 'BoobaBlip',
      keywords: 'quantum computing, AI, finance, blockchain',
      creator: 'BoobaBlip'
    });

    // Kapak sayfası
    doc.setFontSize(titleSize);
    doc.setTextColor(0, 0, 0);
    doc.text('BoobaBlip', pageWidth/2, yPos + 40, { align: 'center' });

    doc.setFontSize(subtitleSize);
    doc.text(t('sections.vision.title'), pageWidth/2, yPos + 50, { align: 'center' });

    doc.setFontSize(bodySize);
    doc.text(new Date().toLocaleDateString(i18n.language), pageWidth/2, yPos + 60, { align: 'center' });

    addPageNumber();
    doc.addPage();
    yPos = margin;

    // İçindekiler
    addHeader();
    doc.setFontSize(subtitleSize);
    doc.setTextColor(0, 0, 0);
    doc.text(t('toc'), margin, yPos);
    yPos += 10;

    sections.forEach((section, index) => {
      doc.setFontSize(bodySize);
      const tocEntry = `${index + 1}. ${section.title}`;
      const dotLeader = '.'.repeat(50);
      const pageNum = (index + 3).toString(); // Kapak ve içindekiler sayfalarını hesaba kat

      doc.text(tocEntry, margin, yPos);
      doc.text(dotLeader, margin + 50, yPos, { align: 'left' });
      doc.text(pageNum, pageWidth - margin, yPos, { align: 'right' });

      yPos += 8;

      if (yPos > pageHeight - margin) {
        addPageNumber();
        doc.addPage();
        addHeader();
        yPos = margin;
      }
    });

    addPageNumber();
    doc.addPage();
    yPos = margin;

    // İçerik sayfaları
    sections.forEach((section, index) => {
      addHeader();

      // Bölüm başlığı
      doc.setFontSize(headingSize);
      doc.setTextColor(0, 0, 0);
      const sectionHeader = `${index + 1}. ${section.title}`;
      doc.text(sectionHeader, margin, yPos);
      yPos += 10;

      // İçerik işleme
      doc.setFontSize(bodySize);
      doc.setTextColor(51, 51, 51);

      const paragraphs = section.content.split('\n\n');

      paragraphs.forEach(paragraph => {
        const lines = doc.splitTextToSize(paragraph.trim(), contentWidth);

        // Madde işaretlerini işle
        if (paragraph.trim().startsWith('•')) {
          lines.forEach((line: string) => {
            doc.text(line, margin + 5, yPos);
            yPos += 6;

            if (yPos > pageHeight - margin) {
              addPageNumber();
              doc.addPage();
              addHeader();
              yPos = margin;
            }
          });
        } else {
          lines.forEach((line: string) => {
            doc.text(line, margin, yPos);
            yPos += 6;

            if (yPos > pageHeight - margin) {
              addPageNumber();
              doc.addPage();
              addHeader();
              yPos = margin;
            }
          });
        }

        yPos += 4; // Paragraflar arası boşluk
      });

      yPos += 8; // Bölümler arası boşluk

      if (yPos > pageHeight - margin * 2) {
        addPageNumber();
        doc.addPage();
        addHeader();
        yPos = margin;
      }
    });

    addPageNumber();

    // Dile özgü dosya adıyla kaydet
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `BoobaBlip-Whitepaper-${i18n.language}-${timestamp}.pdf`;
    doc.save(filename);
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