import { Card } from "@/components/ui/card";
import { SiQuantcast } from "react-icons/si";

export default function Hero() {
  return (
    <div className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold">
                BoobaBlip Technical Whitepaper
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Quantum-Powered Financial Intelligence Platform
            </p>
            <div className="flex gap-4">
              <Card className="p-3 text-sm">Version 2.0</Card>
              <Card className="p-3 text-sm">February 2025</Card>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 space-y-2">
                <h3 className="font-semibold">Quantum Computing</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced quantum algorithms for financial analysis
                </p>
              </Card>
              <Card className="p-6 space-y-2">
                <h3 className="font-semibold">Real-time Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  High-frequency trading and market analysis
                </p>
              </Card>
              <Card className="p-6 space-y-2">
                <h3 className="font-semibold">Risk Management</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced risk assessment and compliance
                </p>
              </Card>
              <Card className="p-6 space-y-2">
                <h3 className="font-semibold">Portfolio Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  AI-driven portfolio management strategies
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}