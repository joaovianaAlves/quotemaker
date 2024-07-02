"use client";
import React, { useState } from "react";

export default function App() {
  const quotes = [
    {
      author: "Albert Einstein",
      quote: "The only source of knowledge is experience.",
    },
    {
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      author: "Frank Zappa",
      quote: "So many books, so little time.",
    },
    {
      author: "Marcus Tullius Cicero",
      quote: "A room without books is like a body without a soul.",
    },
    {
      author: "Mahatma Gandhi",
      quote: "Be the change that you wish to see in the world.",
    },
    {
      author: "Robert Frost",
      quote:
        "In three words I can sum up everything I've learned about life: it goes on.",
    },
    {
      author: "Maya Angelou",
      quote:
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    },
    {
      author: "Mark Twain",
      quote: "If you tell the truth, you don't have to remember anything.",
    },
    {
      author: "Albert Camus",
      quote:
        "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
    },
    {
      author: "Ralph Waldo Emerson",
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    },
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState([quotes[randomIndex]]);
  function handleClick() {
    const randomQuote = quotes[randomIndex];
    setQuote([randomQuote]);
  }
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-black">
      {quote.map((quote) => (
        <div className="flex flex-col w-2/3 items-center justify-center mt-40">
          <div className="p-8 text-white">
            <p className="text-start font-bold text-6xl">“{quote.quote}”</p>
            <p className="text-start font-thin italic text-2xl pt-10">
              ― {quote.author}
            </p>
          </div>
        </div>
      ))}
      <button
        className="border hover:opacity-45 text-white font-medium text-2xl py-2 px-4 mb-36 rounded"
        onClick={handleClick}
      >
        Generate Quote
      </button>
    </main>
  );
}
