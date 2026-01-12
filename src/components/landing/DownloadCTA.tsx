import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-3xl" />
          
          <div className="relative p-8 md:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Take Control?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Built for people who actually care about the network layer.
              <br className="hidden sm:block" />
              Download TraceMeister and experience the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="glow-primary text-lg px-10 py-7 group"
                asChild
              >
                <a href="https://play.google.com/store/apps/details?id=me.impa.tracemeister.free.orbit" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  Get on Google Play
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://www.rustore.ru/catalog/app/me.impa.tracemeister.free.fold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Get on RuStore
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
