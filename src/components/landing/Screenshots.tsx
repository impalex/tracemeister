import { Smartphone } from "lucide-react";

const screenshots = [
  { label: "Live Trace View", description: "Real-time hop monitoring", screenshot: "livetrace" },
  { label: "Visual Map", description: "Geographic path visualization", screenshot: "map" },
  { label: "Ping Results", description: "Detailed latency statistics", screenshot: "ping" },
  { label: "Configuration", description: "Full parameter control", screenshot: "config" }
];

const Screenshots = () => {
  return (
    <section id="screenshots" className="py-24 border-t border-border/50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clean, professional interface designed for efficient network diagnostics.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {screenshots.map((screen, index) => (
            <div key={index} className="group">
              {/* Phone mockup placeholder */}
              <div className="relative aspect-[9/20] bg-card rounded-[2.5rem] border-4 border-muted p-2 mb-4 group-hover:border-primary/50 transition-colors">
                {/* Screen area */}
                <div className="relative h-full w-full rounded-[2rem] bg-secondary overflow-hidden flex flex-col items-center justify-center">
                  <img src={`${screen.screenshot}.png`} alt={`${screen.label} - ${screen.description}`} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold mb-1">{screen.label}</h3>
                <p className="text-sm text-muted-foreground">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
