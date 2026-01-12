import { Sparkles, MessageSquare } from "lucide-react";

const BetaInvitation = () => {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Active Development
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Help Shape TraceMeister
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            TraceMeister is under active development with new features and improvements being added regularly. 
            Your feedback is invaluable in making this tool better for network professionals everywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-card border border-border/50">
            <MessageSquare className="w-8 h-8 text-primary shrink-0" />
            <p className="text-muted-foreground">
              Found a bug? Have a feature request? We'd love to hear from you. 
              Share your thoughts through the app's feedback option or reach out on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaInvitation;
