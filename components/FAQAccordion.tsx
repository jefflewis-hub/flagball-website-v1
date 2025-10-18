"use client";

import { useState, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
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
          "Flagball is a hybrid between Traditional and Flag Football. It's 11-on-11 with full contact open-hand blocking, but flag-pulling instead of tackling",
      },
      {
        question: "How does blocking without pads work?",
        answer:
          "Offensive players must engage a defender (1) from the front, (2) with open-hands (no shoulders), and (3) between the defender's waist and shoulders.",
      },
      {
        question: "What are the main differences from Traditional Football?",
        answer: "Players don't wear pads. Flag pulling instead of tackling",
      },
      {
        question: "Is scoring the same as traditional football?",
        answer: (
          <>
            Touchdown is 6 points.
            <br />
            <br />
            Extra point field goal is 1 point.
            <br />
            <br />
            Teams may opt for a 2 or 3 point conversion after a touchdown,
            instead of an extra point kick
          </>
        ),
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
        answer: (
          <>
            6 teams compete in a 16-game regular season, playing 2 games per
            week for 8 weeks.
            <br />
            <br />
            The top 4 teams will qualify for the playoffs — the winners of the
            semi-finals game will square off in the championship
          </>
        ),
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
        question: "Where can I watch FLAGBALL?",
        answer:
          "Games will be streamed by @Flagball on Youtube, X, and Instagram",
      },
      {
        question: "Who are the players?",
        answer: (
          <>
            Flagball rosters bring together the best athletes in the world, from
            the highest level of a variety of sports.
            <br />
            <br />
            Many FLAGBALL players have won World Championships in Flag Football
            and will compete for the Olympic Flag Football teams of their
            respective countries.
          </>
        ),
      },
    ],
  },
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const [activeSection, setActiveSection] = useState(0);

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

  const scrollToSection = (index: number) => {
    const sectionId = faqData[index].title.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(index);
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = faqData.map((section) =>
        document.getElementById(
          section.title.toLowerCase().replace(/\s+/g, "-")
        )
      );

      const viewportMiddle = window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportMiddle) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative">
      {/* FAQ Title - Mobile Only */}
      <h1 className="md:hidden text-3xl text-gray-700 text-center mb-8 mt-5">
        FAQs
      </h1>

      {/* Table of Contents - Left Side on Desktop Only */}
      <div className="hidden md:block md:fixed md:left-12 md:top-40 md:w-64">
        <h3 className="text-3xl text-gray-700 mb-8">FAQs</h3>
        <nav className="flex flex-col">
          {faqData.map((section, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => scrollToSection(index)}
                className={`w-full text-left py-3 px-4 text-base text-gray-700 transition-colors rounded-md ${
                  activeSection === index ? "bg-gray-200" : ""
                }`}
              >
                {section.title}
              </button>
              {index < faqData.length - 1 && (
                <div className="border-b border-gray-400 mt-2"></div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content - Centered with TOC space accounted for in parent */}
      <div className="max-w-3xl md:max-w-[600px] mx-auto space-y-0 md:space-y-12">
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
                <h2 className="text-lg md:text-2xl font-bold text-flagball-red px-6 md:px-0 md:pb-3 flex justify-between items-center md:block">
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

              {/* Spacer below border (desktop only) */}
              <div className="hidden md:block md:h-6"></div>

              {/* FAQ Items - Collapsible on Mobile, Always Visible on Desktop */}
              <div
                className={`md:block ${
                  sectionIsOpen ? "block" : "hidden"
                } md:space-y-4 space-y-3`}
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
                        <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
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
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 text-gray-700 leading-relaxed text-base md:text-lg bg-white">
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
