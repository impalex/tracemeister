import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes TraceMeister different from other network tools?",
    answer: "TraceMeister implements all network operations natively in C++ via JNI, without calling external binaries like ping or traceroute. This gives you unprecedented speed (hundreds of packets per second), full control over parameters, and consistent behavior across devices. Plus, the unique Live Trace feature provides real-time monitoring of every hop — something no other Android app offers."
  },
  {
    question: "Why native C++ instead of calling system commands?",
    answer: "System commands like ping and traceroute have limited configurability, inconsistent output formats across Android versions, and performance overhead from process spawning. Our native implementation runs in the same process as the app, offers complete control over packet construction and timing, and delivers results 10-100x faster than command-line approaches."
  },
  {
    question: "Does TraceMeister support IPv6?",
    answer: "Yes! TraceMeister has full IPv4 and IPv6 support. You can seamlessly switch between protocols, and the app automatically detects available IP versions for any hostname. This is essential for modern network diagnostics as IPv6 adoption continues to grow."
  },
  {
    question: "What is Live Trace and why is it special?",
    answer: "Live Trace is a hybrid of ping and traceroute that continuously monitors latency to every hop along the path to your destination. It's similar to the popular MyTraceRoute (mtr) tool on desktop systems. TraceMeister is the only Android app that offers this functionality with native performance."
  },
  {
    question: "Is the source code available?",
    answer: "The app is available for download on Google Play and RuStore. The core network library (icmpenguin) is open source under the Apache 2.0 license, which means you can review the code, contribute improvements, or even use it in your own projects."
  },
  {
    question: "What permissions does the app require?",
    answer: "TraceMeister requires network access permission to perform diagnostics. The app is designed to work without root on most modern Android devices."
  },
  {
    question: "Can I export and share my test results?",
    answer: "Yes! TraceMeister allows you to export detailed diagnostic reports that you can save locally or share with colleagues. This is invaluable for documenting network issues, comparing results over time, or collaborating with your team on troubleshooting."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about TraceMeister.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-base font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
