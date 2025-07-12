// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(
        `/search?q=${encodeURIComponent(query)}&category=${encodeURIComponent(
          category
        )}`
      );
    }
  };

  return (
    <>
      <section className="flex items-center justify-center h-[50vh] md:h-[70vh] font-mont bg-[url('/images/bg1.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center justify-center bg-gray-900/70 p-8 rounded">
          <span className="text-lg md:text-2xl font-semibold text-white">
            EXPLORATION STARTS HERE!
          </span>
          <form
            onSubmit={handleSubmit}
            className="mt-5 text-white flex flex-col md:flex-row bg-black/30 rounded"
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Type Your Query . . ."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-[70vw] md:w-[40vw] p-2 bg-black/30 border border-white/30 rounded-t md:rounded-none md:rounded-l focus:outline-none placeholder-white/70"
            />
            <div className="flex">
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 bg-black/30 border border-white/30 focus:outline-none text-white w-[45vw] md:w-[8vw] rounded-bl md:rounded-none"
              >
                <option value="all">All</option>
                <option value="1">Books</option>
                <option value="2">Magazines</option>
                <option value="3">Comics</option>
              </select>
              <button
                type="submit"
                className="bg-black/30 border border-white/30 rounded-br md:rounded-r hover:bg-white/10 transition px-4 w-[25vw] md:w-[5vw]"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
      <div>
        <hr className="h-2 bg-secondary border-none" />
        <hr className="h-1 bg-secondary border-none my-2" />
      </div>
      <section>
        <div className="container mx-auto px-4 py-8 font-mont">
          <h2 className="text-4xl font-semi mb-4">
            Welcome to{" "}
            <span className="text-secondary">Lorem Ipsum Library</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-gray-700">
            For more information, visit our{" "}
            <a href="/about-us" className="text-blue-500 hover:underline">
              About Us
            </a>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
