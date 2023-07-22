"use client";

import { useState } from "react";

interface FaqItems {
  id: string | number;
  title: string;
  text: string;
}

const Faq = () => {
  const [actives, setActives] = useState<(number | string)[]>([]);

  const toggle = (id: number | string) => {
    if (actives.includes(id)) {
      setActives((prev: (number | string)[]) =>
        prev.filter((prevItem: number | string) => prevItem !== id)
      );
    } else {
      setActives((prev: (number | string)[]) => [...prev, id]);
    }
  };

  return (
    <div>
      {/* <!-- faq section start --> */}
      <section className="faq-section pa-y4">
        <div className="container">
          <div className="common-heading">
            <h2>Frequently Asked Question</h2>
          </div>

          {/* <!-- faq asked start --> */}
          <div className="faq-box-wrap">
            {DATA.map((item: FaqItems) => (
              <div
                className={`faq-box-item ${
                  actives.includes(item.id) ? "show" : ""
                }`}
                key={item.id}
              >
                <button
                  type="button"
                  className="btn faq-item"
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 15.75L12 8.25L19.5 15.75"
                      stroke="#CFAF9C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- faq asked end --> */}
        </div>
      </section>
      {/* <!-- faq section end --> */}
    </div>
  );
};

const DATA: FaqItems[] = [
  {
    id: 1,
    title: "How do your tools works?",
    text: "We have some Amazing Growth Marketing tools to help you scale your Business. Unlike most similar tools on the market, we provide you with 100% Accurate Results at a much more Affordable Rate.",
  },
  {
    id: 2,
    title: "How do your tools works?",
    text: "  We have some Amazing Growth Marketing tools to help you scale your Business. Unlike most similar tools on the market, we provide you with 100% Accurate Results a much more Affordable Rate.",
  },
  {
    id: 3,
    title: "How do your tools works?",
    text: "   We have some Amazing Growth Marketing tools to help you scale  your Business. Unlike most similar tools on the market, we provide you with 100% Accurate Results at a much more Affordable Rate.",
  },
  {
    id: 4,
    title: "How do your tools works?",
    text: "We have some Amazing Growth Marketing tools to help you scale  your Business. Unlike most similar tools on the market, we provide you with 100% Accurate Results at a much more Affordable Rate.",
  },
  {
    id: 5,
    title: "How do your tools works?",
    text: "   We have some Amazing Growth Marketing tools to help you scale  your Business. Unlike most similar tools on the market, we provide you with 100% Accurate Results at a much more Affordable Rate.",
  },
];

export default Faq;
