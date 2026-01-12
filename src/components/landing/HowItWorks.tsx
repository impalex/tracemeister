import { Terminal, Sliders, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Terminal,
    step: "01",
    title: "Enter Target",
    description: "Type any hostname or IP address. TraceMeister resolves DNS and shows all available IPs."
  },
  {
    icon: Sliders,
    step: "02",
    title: "Configure & Launch",
    description: "Select your diagnostic mode — Ping, Traceroute, or Live Trace. Adjust parameters as needed."
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Analyze Results",
    description: "View real-time results with detailed statistics, latency graphs, and geographic visualization."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From target to results in seconds. No root required, no complex setup.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="text-6xl font-bold text-primary/10 absolute -top-4 left-1/2 -translate-x-1/2">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border border-primary/30 flex items-center justify-center mb-6 glow-primary">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
