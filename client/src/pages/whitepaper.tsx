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
    content: `BoobaBlip is an enterprise-grade financial intelligence platform powered by cutting-edge quantum computing technology. Our platform revolutionizes institutional trading and financial analysis by providing unprecedented computational capabilities and advanced algorithmic strategies.

Built for institutional clients, BoobaBlip combines quantum computing with artificial intelligence to deliver superior market insights, portfolio optimization, and trading execution capabilities.`
  },
  {
    id: "quantum-technology",
    title: "Quantum Computing Technology",
    content: `At the core of BoobaBlip's platform lies our proprietary quantum computing architecture:

• Quantum-Enhanced Processing: Utilizing quantum superposition and entanglement for complex financial calculations
• Advanced Quantum Algorithms: Custom-developed algorithms optimized for financial analysis and pattern recognition
• Quantum-Classical Hybrid System: Seamless integration between quantum and classical computing resources
• Scalable Architecture: Designed to grow with increasing quantum computational capabilities
• Error Correction: Advanced quantum error correction mechanisms for reliable results`
  },
  {
    id: "key-features",
    title: "Platform Capabilities",
    content: `BoobaBlip offers a comprehensive suite of financial analysis and trading tools:

1. Market Analysis
• Quantum-enhanced market analysis with real-time data processing
• Advanced pattern recognition across multiple asset classes
• Predictive analytics using quantum machine learning
• Multi-dimensional correlation analysis

2. Portfolio Optimization
• Quantum-powered portfolio balancing algorithms
• Real-time risk assessment and management
• Custom optimization strategies for different market conditions
• Transaction cost analysis and optimization

3. Trading Execution
• High-frequency trading capabilities
• Smart order routing
• Execution algorithm optimization
• Market impact analysis and minimization

4. Risk Management
• Real-time risk monitoring and assessment
• Stress testing and scenario analysis
• Regulatory compliance monitoring
• Advanced risk metrics calculation`
  },
  {
    id: "security",
    title: "Security & Compliance",
    content: `BoobaBlip maintains the highest standards of security and compliance:

• Enterprise-Grade Security
- Multi-layer encryption for data protection
- Secure quantum key distribution
- Regular security audits and penetration testing
- 24/7 security monitoring

• Regulatory Compliance
- Adherence to global financial regulations
- Regular compliance audits
- Transparent reporting mechanisms
- Data privacy compliance (GDPR, CCPA)

• System Reliability
- 99.99% platform uptime
- Redundant infrastructure
- Disaster recovery capabilities
- Regular backup and failover testing`
  },
  {
    id: "integration",
    title: "Integration & API",
    content: `BoobaBlip provides comprehensive integration capabilities:

• RESTful API
- Secure API endpoints
- Comprehensive documentation
- Rate limiting and usage monitoring
- Custom integration support

• Data Feeds
- Real-time market data integration
- Custom data source integration
- Historical data access
- Multiple data format support

• Custom Solutions
- Tailored integration services
- Custom workflow development
- Technical support and consultation
- Integration testing and validation`
  },
  {
    id: "use-cases",
    title: "Use Cases",
    content: `BoobaBlip serves various institutional clients across the financial sector:

1. Investment Banks
• High-frequency trading optimization
• Risk management and compliance
• Portfolio optimization
• Market analysis and research

2. Hedge Funds
• Algorithmic trading strategies
• Real-time market analysis
• Portfolio risk management
• Performance optimization

3. Asset Managers
• Portfolio optimization
• Risk assessment
• Client reporting
• Regulatory compliance

4. Insurance Companies
• Risk assessment
• Portfolio management
• Regulatory reporting
• Investment strategy optimization`
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