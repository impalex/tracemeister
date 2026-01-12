import { 
  Activity, 
  Route, 
  Radio, 
  Map, 
  Ruler, 
  Settings, 
  RefreshCw, 
  FileText 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Activity,
    title: "Custom High-Speed Ping",
    description: "Native ICMP implementation with configurable packet rates, sizes, and intervals. Monitor latency with precision.",
    badge: null
  },
  {
    icon: Route,
    title: "Custom Traceroute",
    description: "Map the complete path to any destination with accurate hop-by-hop latency measurements and geolocation data.",
    badge: null
  },
  {
    icon: Radio,
    title: "Live Trace",
    description: "A unique hybrid of ping and traceroute — continuously monitor every hop in real-time, similar to MyTraceRoute.",
    badge: "Unique on Android"
  },
  {
    icon: Map,
    title: "Visual Trace",
    description: "Display trace results on an interactive map. See the geographic path your packets take across the globe.",
    badge: null
  },
  {
    icon: Ruler,
    title: "Path MTU Discovery",
    description: "Discover the maximum transmission unit along the network path to optimize packet sizes and avoid fragmentation.",
    badge: null
  },
  {
    icon: Settings,
    title: "Configurable Parameters",
    description: "Fine-tune TTL, hop limits, packet rates, timeouts, and more. Full control over every aspect of your diagnostics.",
    badge: null
  },
  {
    icon: RefreshCw,
    title: "Multi-IP Switching",
    description: "Quickly switch between multiple resolved IPs for a single hostname. Test different endpoints with a single tap.",
    badge: null
  },
  {
    icon: FileText,
    title: "Exportable Reports",
    description: "Save and share detailed test results. Document network issues with comprehensive diagnostic reports.",
    badge: null
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional-Grade Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for comprehensive network diagnostics, built for power users who demand precision and control.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 ${
                feature.badge ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {feature.badge && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                  {feature.badge}
                </Badge>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
