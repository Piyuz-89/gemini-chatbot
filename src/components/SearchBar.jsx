import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SearchBar = ({ setChats }) => {

  const [query, setQuery] = useState("");

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);

  const handleQuery = async () => {

    setChats(prevChats => [...prevChats, { sender: "user", msg: query }]);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = query ;
    setQuery("");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setChats(prevChats => [...prevChats, { sender: "bot", msg: text }]);
  }

  return (
    <div className="flex border-slate-500 rounded h-12 w-full border-y-2 ">
      <input type="text" className="w-5/6 flex-auto p-2 ps-5 rounded focus:outline-none bg-transparent text-slate-800 placeholder:text-stone-700"  placeholder="Ask Anything..." name="query" id=""
        value={query}
        onChange={(e) => { setQuery(e.target.value) }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleQuery()
          }
        }}
        autoComplete="off"
      />
      <button className=" px-5 hover:text-gray-500 " onClick={handleQuery} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataslot="icon" className="w-6 h-6 sm:w-10 sm:h-10">
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>

      </button>
    </div>

  )
}

export default SearchBar;

