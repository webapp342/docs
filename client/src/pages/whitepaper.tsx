import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import TableOfContents from "../components/whitepaper/TableOfContents";
import Section from "../components/whitepaper/Section";
import Hero from "../components/whitepaper/Hero";
import { useState } from "react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `BBLip.io is a cutting-edge AI-powered platform that revolutionizes digital communication through advanced lip-sync technology. Our solution enables the creation of hyper-realistic, synchronized video content in multiple languages while maintaining the original speaker's authentic appearance and expressions.`
  },
  {
    id: "technology",
    title: "Technology Overview",
    content: `Our proprietary AI technology utilizes state-of-the-art deep learning models to analyze and map facial movements, creating seamless lip synchronization that matches translated audio perfectly. The system processes facial landmarks, muscle movements, and speech patterns to generate natural-looking results.`
  },
  {
    id: "features",
    title: "Key Features",
    content: `- Real-time lip synchronization
- Multi-language support
- Preservation of original expressions
- High-quality video output
- Scalable cloud infrastructure
- Enterprise-grade security
- API integration capabilities`
  },
  {
    id: "use-cases",
    title: "Use Cases",
    content: `Our technology serves various industries:
- Media & Entertainment: Localize content globally
- Education: Create multilingual learning materials
- Corporate Communications: Deliver messages in multiple languages
- Marketing: Produce localized advertising campaigns`
  },
  {
    id: "technical-specs",
    title: "Technical Specifications",
    content: `- Processing speed: Real-time capability
- Supported video formats: MP4, MOV, AVI
- Audio formats: WAV, MP3, AAC
- Resolution support: Up to 4K
- Language pairs: 50+ languages
- API latency: <100ms`
  }
];

export default function Whitepaper() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

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
    // In a real implementation, this would generate and download a PDF
    alert("PDF download functionality would be implemented here");
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
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
              Download PDF
            </Button>
          </Card>

          <div 
            className="flex-1 prose prose-slate max-w-none"
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
