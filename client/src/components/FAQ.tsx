import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How much will I get paid?",
      answer: "You will be compensated with $350.00 per week via certified bank check or direct deposit. This payment is for allowing Moment Motor Co. to place our advertisement decal on your vehicle."
    },
    {
      question: "How will the decal be applied to my car?",
      answer: "Moment Motor Co. will provide vinyl car decal specialists who will handle the professional installation of the advertisement on your car. The decal size is small (18x28 inches) and will be placed on the vehicle door side or fender."
    },
    {
      question: "How long does the program last?",
      answer: "You can choose between a minimum period of 4 weeks (1 month) or a maximum period of 12 weeks (3 months). After the program expires, the decals will be professionally removed from your vehicle at no cost to you."
    },
    {
      question: "Do I need to drive a certain amount or follow specific routes?",
      answer: "No. You simply go about your normal daily routine as you usually do. There are no minimum mileage requirements or specific routes you need to follow. The program is designed to fit into your existing driving habits."
    },
    {
      question: "Is there any fee to participate in this program?",
      answer: "No application or participation fee is required. Moment Motor Co. covers all costs associated with the program, including decal production, installation, and removal."
    },
    {
      question: "Will the decal damage my car's paint?",
      answer: "No. We use high-quality vinyl decals that are designed to be removed without damaging your vehicle's paint or finish. Our professional technicians are experienced in both installation and removal of these types of decals."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Get answers to common questions about our auto wrap campaign.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-bold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
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
