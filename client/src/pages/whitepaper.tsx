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
    content: `BoobaBlip represents a paradigm shift in quantitative finance through the integration of quantum computing methodologies with advanced financial modeling. This technical whitepaper presents a comprehensive analysis of our quantum-enhanced financial intelligence platform, which leverages quantum mechanical principles to revolutionize institutional trading and risk management.

Our framework builds upon seminal work in quantum finance (Nielsen & Chuang, 2010; Orus et al., 2019) and extends traditional financial models through quantum-mechanical implementations. The platform demonstrates significant improvements in computational efficiency and predictive accuracy across multiple asset classes.

Key Theoretical Foundations:
• Quantum State Preparation for Financial Data
• Quantum Feature Maps in Market Analysis
• Entanglement-based Portfolio Optimization
• Quantum Risk Metrics and Uncertainty Principles`
  },
  {
    id: "quantum-technology",
    title: "Quantum Computing Architecture",
    content: `The theoretical foundation of BoobaBlip's quantum architecture rests on advanced quantum mechanical principles:

1. Quantum State Preparation
Our system prepares quantum states |ψ⟩ that encode financial market data through a series of unitary transformations:
|ψ⟩ = U_n U_(n-1) ... U_1 |0⟩^⊗n

Where each U_i represents a specific market feature transformation, implemented through custom quantum circuits optimized for financial calculations.

2. Quantum Feature Space
Financial data is mapped to a high-dimensional Hilbert space through quantum feature maps:
Φ(x) = exp(iH_1x_1)exp(iH_2x_2)...exp(iH_nx_n)|0⟩

Where H_i are carefully chosen Hamiltonians that capture relevant market dynamics and correlations.

3. Entanglement-Enhanced Processing
Our architecture utilizes quantum entanglement to capture complex market correlations:
|Ψ⟩_market = (1/√N)∑|i⟩_asset1|i⟩_asset2

This allows for simultaneous analysis of multiple assets and their interdependencies.

4. Technical Parameters
• Quantum Coherence Time: τ > 100μs
• Gate Fidelity: F > 99.99%
• Quantum Volume: Q_v = 512
• Error Rate: ε < 10^-6
• Circuit Depth: d = 100`
  },
  {
    id: "financial-models",
    title: "Advanced Financial Models",
    content: `Our quantum-enhanced financial models incorporate sophisticated mathematical frameworks:

1. Quantum Portfolio Theory
Building on Markowitz's Modern Portfolio Theory, we implement a quantum version of the optimization problem:

min_w (w^T Σ w - λR^T w)
subject to:
• w^T 1 = 1 (budget constraint)
• Quantum uncertainty relations
• Entanglement constraints

Where:
Σ: Quantum-enhanced covariance matrix
R: Expected returns vector
λ: Risk aversion parameter
w: Portfolio weights

2. Risk Metrics
Advanced risk calculations utilizing quantum uncertainty principles:
VaR_q = μ_p - σ_p Φ^(-1)(α)

Where:
μ_p: Quantum-estimated portfolio mean
σ_p: Quantum-enhanced volatility measure
Φ^(-1): Inverse standard normal distribution
α: Confidence level

3. Market Microstructure Model
Our quantum-enhanced market microstructure model incorporates:
• Quantum stochastic differential equations
• Non-linear price impact functions
• High-frequency correlation matrices
• Quantum entropy maximization principles`
  },
  {
    id: "cryptoasset-analysis",
    title: "Cryptoasset Quantum Analysis",
    content: `Advanced cryptoasset analysis utilizing quantum computing principles:

1. Quantum Blockchain Analysis
Our framework applies quantum mechanics to blockchain analysis:
• Quantum Walk Algorithms for Network Analysis
• Grover's Algorithm for Transaction Pattern Recognition
• Quantum Fourier Transform for Time Series Analysis

2. Cross-Chain Correlation Analysis
Utilizing quantum entanglement properties:
ρ_ij = Tr(ρ_total H_i ⊗ H_j)

Where:
ρ_total: Quantum density matrix of the entire crypto market
H_i, H_j: Observable operators for different blockchain networks

3. Quantum Price Discovery Model
P_t = f(Q_t, L_t, V_t)

Where:
P_t: Asset price at time t
Q_t: Quantum liquidity measure
L_t: On-chain metrics
V_t: Network velocity tensor

4. Risk Assessment Metrics
• Quantum-Enhanced Sharpe Ratio
• Quantum Value at Risk (QVaR)
• Quantum Maximum Drawdown (QMDD)
• Quantum-adjusted Kelly Criterion`
  },
  {
    id: "security-protocols",
    title: "Security & Cryptographic Framework",
    content: `Our security framework implements advanced quantum cryptographic protocols:

1. Post-Quantum Cryptography Implementation
• Lattice-based cryptography: NTRU, LWE
• Hash-based signatures: SPHINCS+
• Multivariate cryptography: Rainbow
• Code-based cryptography: McEliece

2. Quantum Key Distribution (QKD)
Implementation of BB84 protocol with enhanced security:
• Quantum Bit Error Rate (QBER) < 0.1%
• Key Generation Rate > 1Mbps
• Secure Key Rate: -log₂(ε)/n bits/signal

3. Quantum Random Number Generation
Utilizing quantum mechanical principles:
• Vacuum fluctuations
• Photon detection statistics
• Quantum phase noise

4. Security Metrics & Standards
• Quantum Bit Security Level: 256-bit equivalent
• Forward Secrecy: Perfect Forward Secrecy (PFS)
• Key Exchange: Quantum-resistant ECDH
• Authentication: Quantum-safe digital signatures`
  },
  {
    id: "performance",
    title: "Performance Analysis & Benchmarks",
    content: `Comprehensive analysis of system performance metrics:

1. Quantum Processing Metrics
• Quantum Volume (QV): 512
• Quantum Coherence Time (T2): >100μs
• Gate Fidelity (F): 99.99%
• Error Rate (ε): <10^-6

2. Financial Analysis Performance
• Latency Distribution: L ~ N(μ=0.5ms, σ=0.1ms)
• Throughput: T = λ(1-ρ), where λ=50k ops/sec
• Prediction Accuracy: A = 1 - E[|ŷ-y|/y]
• Optimization Convergence: O(log N) quantum speedup

3. System Reliability Analysis
• Availability: 99.999% (Five Nines)
• Mean Time Between Failures (MTBF): >5000 hours
• Mean Time To Recovery (MTTR): <15 minutes
• Error Detection Rate: >99.999%

4. Comparative Analysis with Classical Systems
Portfolio Optimization (n=1000 assets):
• Classical: O(n³) complexity
• Quantum: O(n log n) complexity
• Speedup Factor: ~100x for n>500

Risk Calculation (m=10⁶ scenarios):
• Classical: O(m²) complexity
• Quantum: O(√m) complexity
• Speedup Factor: ~1000x for m>10⁶`
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