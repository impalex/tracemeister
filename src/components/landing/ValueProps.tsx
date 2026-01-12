import { Cpu, Shield, Layers } from "lucide-react";

const props = [
  {
    icon: Cpu,
    title: "Native Performance",
    description: "C++/JNI engine delivers hundreds of packets per second, even on mid-range devices. No overhead, no compromises."
  },
  {
    icon: Layers,
    title: "Full Protocol Support",
    description: "Complete IPv4 and IPv6 support with ICMP and UDP modes. Choose the right protocol for your diagnostic needs."
  },
  {
    icon: Shield,
    title: "No External Tools",
    description: "Everything runs natively inside the app. No calls to ping, traceroute, or any other system binaries."
  }
];

const ValueProps = () => {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <prop.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
