import { useState } from "react";

const faqs = [
  {
    question: "What is the cost of the The Kirana Mart supermarket franchise?",
    answer:
      "Every area is different and the people of that area are different, thus the requirements differ. Because of these differences, we could not have a single uniform investment plan. We have created a few investment plans. To know which one would be best for you, call us.",
  },
  {
    question: "Do you have a retail grocery store franchise?",
    answer:
      "Yes, we do have a retail grocery store franchise. We understand that not everyone can afford a supermarket franchise in India, thus we created retail ones too.",
  },
  {
    question:
      "Will you conduct the site survey before approving the franchise?",
    answer:
      "Yes, we do conduct the site survey! Again we are sorry to make it hard but it is important to be the leading supermarket franchise in India as it is a title full of responsibility to hold. ",
  },
  {
    question: "What is area code verification?",
    answer:
      "Each area is designated with an area code where we have our franchise business. Once your franchise is approved, we will share the The Kirana Mart area activation code to activate your area code. This makes data handling easier.",
  },
  {
    question: "What support will The Kirana Mart provide to franchise owners?",
    answer:
      "You will get start-to-end hand-holding support from The Kirana Mart. Accounting Support, Purchasing Support, Operations Support, TV Advertisement, News Paper Ad, Radio, Pamphlets, Support Hoardings, Social Media Ad, Staff Training, T-shirt, Cap, and advice from experts on a regular basis.",
  },
  {
    question: "Which is the best supermarket franchise in India?",
    answer:
      "It may sound like we are bragging, but our fast results and reviews make us the fastest-growing supermarket franchise in India. And there can only be one reason for such fast growth; we offer the best benefits to our franchises. ",
  },
  {
    question: "Is Supermarket profitable in India?",
    answer:
      "The franchising industry in India is growing at 30-35% year on year.Predicted to reach $100 billion by 2024.India is already the second-largest franchise market in the world, after the US.Almost 1,000+ new retail brands adopt franchising every year.35 to 40% profit margin is there for a grocery store in India.The franchise sector is booming in India and the supermarket franchise is a very large percentage of it",
  },
];

const faq2 = [
  {
    question: "Can I own more than one The Kirana Mart franchise?",
    answer:
      "Of course, you can! We will analyze your location, area, and population demographics as we do with every franchisee. Once that is done and you qualify, welcome to the The Kirana Mart chain!",
  },
  {
    question: "Do I need an appointment for the The Kirana Mart franchise?",
    answer:
      "Yes, you do!  We understand that it makes the process a bit hard, but you can’t become the fastest-growing supermarket franchise in India without having a structured process to deal with numerous requests every day.",
  },
  {
    question: "What type of store is The Kirana Mart?",
    answer:
      "The Kirana Mart provides retail grocery stores and supermarket franchises in India, to everyone who is eligible for the basic requirements.",
  },
  {
    question: "What is the unique selling proposition of The Kirana Mart?",
    answer:
      "Our Unique selling proposition is the knowledge, technology, strategy, and tactics that we share with all our franchises to help them grow to their maximum potential.",
  },
  {
    question: "What are the main products of The Kirana Mart?",
    answer:
      "We have a wide range of 20,000+ products including Grocery, Bakery, Stationery, Toys, Books and Magazine, Personal Care, Beverages, Fruit and Vegetable, Frozen Food and Ice Cream Tobacco, Travel Solutions, and More.",
  },
  {
    question: "How much does a supermarket cost in India?",
    answer:
      "A supermarket’s cost in India depends on various factors. The leading one is the area factor. Depending on the area, you would require 10 lakhs to 2 crores to open a supermarket.Whereas a grocery store, again depending on the area can be opened for about 3 lakhs to 9 lakhs.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState({ col: null, index: null });

  const toggleFAQ = (col, index) => {
    if (active.col === col && active.index === index) {
      setActive({ col: null, index: null });
    } else {
      setActive({ col, index });
    }
  };

  const renderFAQ = (faqList, col) =>
    faqList.map((faq, index) => (
      <div key={index} className="border-b border-gray-300 py-4">
        <div
          className={`flex justify-between items-normal cursor-pointer text-lg font-medium transition-colors ${
            active.col === col && active.index === index
              ? "text-green-600"
              : "text-gray-800"
          }`}
          onClick={() => toggleFAQ(col, index)}
        >
          {faq.question}
          <span className="text-xl">
            {active.col === col && active.index === index ? "×" : "+"}
          </span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            active.col === col && active.index === index
              ? "max-h-96 mt-2"
              : "max-h-0"
          }`}
        >
          <p className="text-gray-600 text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    ));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-600">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>{renderFAQ(faqs, "left")}</div>
        <div>{renderFAQ(faq2, "right")}</div>
      </div>
    </div>
  );
};

export default FAQ;
