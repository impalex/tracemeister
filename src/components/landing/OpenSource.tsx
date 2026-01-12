import { Button } from "@/components/ui/button";
import { Github, Scale, Users } from "lucide-react";

const OpenSource = () => {
  return (
    <section id="open-source" className="py-24 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-secondary border border-border/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">icmpenguin</h2>
                  <p className="text-muted-foreground">Open Source Core Library</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                The heart of TraceMeister is open source. The <span className="text-foreground font-medium">icmpenguin</span> library 
                provides the native C++ implementation for all network operations. Explore the code, 
                contribute improvements, or use it in your own projects.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Scale className="w-4 h-4 text-primary" />
                  <span>Apache 2.0 License</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Community Contributions Welcome</span>
                </div>
              </div>
              
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <a href="https://github.com/impalex/icmpenguin" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
