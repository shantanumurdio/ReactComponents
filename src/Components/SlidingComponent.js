// import React from "react";

// const quotes = [
//   // ... your quotes here
//   {
//     text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     author: "Charles Dickens",
//     source: "A Tale of Two Cities",
//   },
//   {
//     text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     author: "William Shakespeare",
//     source: "Hamlet",
//   },
//   {
//     text: "All that we see or seem is but a dream within a dream.",
//     author: "Edgar Allan Poe",
//     source: "A Dream Within a Dream",
//   },
//   {
//     text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     author: "Jane Austen",
//     source: "Pride and Prejudice",
//   },
//   {
//     text: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     author: "Herman Melville",
//     source: "Moby-Dick",
//   },
// ];

// const App = () => {
//   const doubledQuotes = [...quotes, ...quotes]; // Duplicate quotes for seamless flow

//   return (
//     <div className="w-screen overflow-hidden">
//       <div className="flex w-[200%] gap-4 py-4 animate-scroll transition duration-300 ease-in-out"> {/* Add transition */}
//         {doubledQuotes.map((quote, index) => (
//           <div
//             key={index}
//             className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
//             style={{
//               background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
//               animation: `scrollAnimation ${quotes.length * 10}s linear infinite`,
//             }}
//           >
//             <blockquote>
//               <div
//                 aria-hidden="true"
//                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
//               ></div>
//               <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
//                 {quote.text}
//               </span>
//               <div className="relative z-20 mt-6 flex flex-row items-center">
//                 <span className="flex flex-col gap-1">
//                   <span className="text-sm leading-[1.6] text-gray-400 font-normal">
//                     {quote.author}
//                   </span>
//                   <span className="text-sm leading-[1.6] text-gray-400 font-normal">
//                     {quote.source}
//                   </span>
//                 </span>
//               </div>
//             </blockquote>
//           </div>
//         ))}
//       </div>
//       <style>{`
//         @keyframes scrollAnimation {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-100% * ${(quotes.length) / 2}));
//           }
//         }
//         .flex.w-[200%] { /* Target the container element */
//           animation-iteration-count: infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;
