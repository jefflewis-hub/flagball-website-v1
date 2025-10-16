"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: "THE GAME",
    items: [
      {
        question: "What is Flagball?",
        answer:
          "Hybrid between Flag and Traditional Football. Its 11-on-11 with full blocking but flag-pulling on ball carriers instead of tackling",
      },
      {
        question: "How does the blocking work?",
        answer:
          "Offensive players may block a defender with their hands on the front of an opposing player between the belly-button and the shoulders. No blocking is allowed below the waist or above the shoulders. Offensive players may not use their head or shoulders to block a defender.",
      },
      {
        question: "What are the main rule differences from tackle football?",
        answer: "Flag pulling instead of tackling",
      },
      {
        question: "Is scoring similar to traditional football?",
        answer:
          "Touchdown is 6 points. Extra point field goal is 1 point. Teams may opt for a 2 or 3 point conversion after a touchdown, instead of an extra point",
      },
      {
        question: "How long are the games?",
        answer:
          "4x 15-minute quarters. Games have a running clock until the last 2 minutes of either half",
      },
    ],
  },
  {
    title: "LEAGUE FORMAT",
    items: [
      {
        question: "How does the season work?",
        answer:
          "6 teams compete in a 16-game regular season, playing 2 games per week for 8 weeks. The top 4 teams will qualify for the playoffs — the winners of the semi-finals game will square off in the championship",
      },
      {
        question: "When will the season be played?",
        answer: "June 8th, 2026 - August 10th, 2026.",
      },
    ],
  },
  {
    title: "FANS",
    items: [
      {
        question: "Where can I watch?",
        answer:
          "Games will be streamed by @Flagball on Youtube, X, and Instagram",
      },
      {
        question: "Who are the players?",
        answer:
          "Flagball players are selected from a variety of backgrounds at the highest level of sports. Many of the players on rosters this spring have won gold medals in Flag Football and will compete for the olympic flag football team.",
      },
    ],
  },
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }

    setOpenItems(newOpenItems);
  };

  const toggleSection = (sectionIndex: number) => {
    const newOpenSections = new Set(openSections);

    if (newOpenSections.has(sectionIndex)) {
      newOpenSections.delete(sectionIndex);
    } else {
      newOpenSections.add(sectionIndex);
    }

    setOpenSections(newOpenSections);
  };

  const isOpen = (sectionIndex: number, itemIndex: number) => {
    return openItems.has(`${sectionIndex}-${itemIndex}`);
  };

  const isSectionOpen = (sectionIndex: number) => {
    return openSections.has(sectionIndex);
  };

  return (
    <div className="relative">
      {/* FAQ Title - Mobile Only */}
      <h1 className="md:hidden text-4xl font-bold text-flagball-red text-center mb-8 mt-5">
        FAQ
      </h1>

      {/* Table of Contents - Left Side on Desktop Only */}
      <div className="hidden md:block md:fixed md:left-20 md:top-40 md:w-64">
        <h3 className="text-4xl font-bold text-flagball-red mb-8">FAQS</h3>
        <nav className="flex flex-col gap-6">
          {faqData.map((section, index) => (
            <a
              key={index}
              href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-flagball-red hover:opacity-80 font-bold text-xl transition-opacity"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-3xl mx-auto space-y-0 md:space-y-12">
        {faqData.map((section, sectionIndex) => {
          const sectionIsOpen = isSectionOpen(sectionIndex);
          const isLastSection = sectionIndex === faqData.length - 1;

          return (
            <div
              key={sectionIndex}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
              className={`md:bg-transparent md:rounded-none md:shadow-none ${
                isLastSection ? "border-b border-flagball-red" : ""
              } md:border-b-0`}
            >
              {/* Section Header - Clickable on Mobile, Static on Desktop */}
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full text-left md:pointer-events-none border-t md:border-t-0 border-flagball-red md:border-b-4 py-5 md:py-0"
              >
                <h2 className="text-xl md:text-3xl font-bold text-flagball-red px-6 md:px-0 md:mb-6 md:pb-3 flex justify-between items-center md:block">
                  <span>{section.title}</span>
                  <svg
                    className={`w-5 h-5 md:hidden text-flagball-red transform transition-transform duration-300 ease-in-out flex-shrink-0 ${
                      sectionIsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </h2>
              </button>

              {/* FAQ Items - Collapsible on Mobile, Always Visible on Desktop */}
              <div
                className={`md:block ${
                  sectionIsOpen ? "block" : "hidden"
                } md:space-y-4 space-y-3 pb-6 md:pb-8`}
              >
                {section.items.map((item, itemIndex) => {
                  const itemIsOpen = isOpen(sectionIndex, itemIndex);
                  return (
                    <div
                      key={itemIndex}
                      className={`bg-white rounded-lg overflow-hidden shadow-sm md:shadow-md transition-all duration-300 ease-in-out md:border-2 ${
                        itemIsOpen
                          ? "md:border-flagball-red"
                          : "md:border-transparent"
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
                        className={`w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center transition-colors bg-white ${
                          !itemIsOpen ? "hover:bg-gray-50" : ""
                        }`}
                      >
                        <span className="text-lg md:text-xl font-medium text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ease-in-out flex-shrink-0 ${
                            itemIsOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out bg-white ${
                          itemIsOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 text-gray-700 leading-relaxed text-lg md:text-xl bg-white">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
