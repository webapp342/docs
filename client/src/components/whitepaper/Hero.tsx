import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <div className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              BBLip.io Technical Whitepaper
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Advanced AI-Powered Lip Synchronization Technology
            </p>
            <div className="flex gap-4">
              <Card className="p-2 text-sm">Version 1.0</Card>
              <Card className="p-2 text-sm">April 2024</Card>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee" 
                alt="Tech illustration 1"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1607452263110-39a87c399c50" 
                alt="Tech illustration 2"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
